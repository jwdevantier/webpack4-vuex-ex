'use strict'

const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development', 
  entry: ['./src/app.js'],

  devServer: {
    hot: true
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'}
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}