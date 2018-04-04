var webpack = require('webpack');
var config = require('./webpack.config');
var bodyParser = require('body-parser');
var compiler = webpack(config);
var path = require('path');
var fs = require("fs");
var express = require('express');
var socketio = require('socket.io');
var http = require('http');
var voteState = null;
var webpackDevMiddleware = require('webpack-dev-middleware');

//run express server
var DIST_DIR = path.join(__dirname, "dist"),
    PORT = 3001,
    app = express();

var server = http.createServer(app);
var io = socketio(server);

var serverOpts = {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
};


//using webpack-dev-middleware to serve up assets in memory
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {colors: true}
}));

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

server.listen(PORT || 3001, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});