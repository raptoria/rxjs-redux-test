var webpack = require('webpack');
var path = require('path');
var combineLoaders = require('webpack-combine-loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
  entry: { 
    app: [   
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './src/index' 
    ]
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/build'

  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.png'],
    modulesDirectories: ['src', 'node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
          test: /\.css$/,
          loader: combineLoaders([
            {
              loader: 'style-loader'
            }, {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
             }
            ])
        },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "url-loader?limit=100000" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ],
  },

  externals: {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin ({
      inject: true,
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]

};