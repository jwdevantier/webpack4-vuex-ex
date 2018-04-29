'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const cfgBase = require('./webpack.config.base')
const utils = require('./utils')

const HOST = 'localhost'
const PORT = '8080'

module.exports = merge(cfgBase, {
  mode: 'development',
  //TODO: add more if errors encountered
  devServer: {
    hot: true,
    host: HOST,
    port: PORT
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          utils.css_loader,
          utils.postcss_loader
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          utils.css_loader,
          utils.postcss_loader,
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})