const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

let config = {
  entry: 'src/index.js',
  output: {
    filename = 'js/threeview.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};

module.exports = config;
