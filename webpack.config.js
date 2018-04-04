var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DIST_DIR = path.join(__dirname, "dist");

module.exports =  {
  entry: { 
    app: [   
    './src/index' 
    ]
  },

  devServer: {
    contentBase: './dist',
    hot: true
  },

  output: {
    filename: '[name].js',
    path: DIST_DIR,
    publicPath: '/'
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.png'],
    modules: ['src', 'node_modules']
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "url-loader?limit=100000" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.json$/, loader: "json"}
    ],
  },

  externals: {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin ({
      inject: true,
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]

};
