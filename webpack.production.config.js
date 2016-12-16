var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index']
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js',
    publicPath: './build'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      { test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
       },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.png'],
    modulesDirectories: ['src', 'node_modules']
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin ({
      inject: true,
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('app.css', {
        allChunks: true
    })
  ]
};
