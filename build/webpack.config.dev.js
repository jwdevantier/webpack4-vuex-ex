'use strict'

const path = require('path')

const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development', 
  entry: ['./src/app.js'],

  devServer: {
    hot: true
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'},
      { test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {loader: 'postcss-loader', options: {config: {path: path.resolve(__dirname, 'postcss.config.js')}}},
          'sass-loader']}
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"}),
      new VueLoaderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      })
    ]
  }