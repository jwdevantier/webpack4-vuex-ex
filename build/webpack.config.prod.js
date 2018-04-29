'use strict'

const merge = require('webpack-merge')
const cfgBase = require('./webpack.config.base')
const utils = require('./utils')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(cfgBase, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          MiniCssExtractPlugin.loader,
          utils.css_loader,
          utils.postcss_loader
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          utils.css_loader,
          utils.postcss_loader
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
})