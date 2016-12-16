var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require("fs");
var express = require('express');
var socketio = require('socket.io');
var http = require('http');
var voteState = null;

//run express server
var app = express();
var server = http.createServer(app);
var io = socketio(server);

var serverOpts = {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
};

//serve webpack assets on webpack dev server
new WebpackDevServer(webpack(config), serverOpts)
  .listen(3000, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Assets served on 3000");
  });


app.use('/build', express.static(path.join(__dirname + '/build'))); //define build route
app.use('/', function (req, res) {  //route everything to index, and let react router handle the rest
    res.sendFile(path.resolve('build/index.html'));
});

//socket stuff
io.on('connection', function(socket){
  console.log('a user connected');
  if (voteState){
    io.emit('cast vote', voteState);
    console.log('load up current voteState');
  }
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('cast vote', (newState) => {
    voteState = newState;
    socket.broadcast.emit('cast vote', newState); //broadcast to everyone but sender
  });
});

server.listen(process.env.PORT || 3001, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});