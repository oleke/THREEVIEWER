const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: './js/threeview.js'
  },
  //plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [{
      test: /\.js$/, // files ending with .js
      exclude: /node_modules/, // exclude the node_modules directory
      loader: "babel-loader" // use this (babel-core) loader
    }]
  }
};

module.exports = config;
