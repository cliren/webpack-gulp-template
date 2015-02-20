var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + "/dist",
    filename: 'main.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /\.handlebars$/, loader: 'handlebars-loader'},
      {test: /\.less$/, loader: "style!css!less"},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
    ],
    noParse: []
  },
  resolve: {
    root: [
      nodeModulesPath,
      bowerComponentsPath],
    alias: {},
    extensions: ['',
      '.js',
      '.css']
  },
  plugins: [
    new webpack.optimize.DedupePlugin()
  ]
};