'use strict'

const path = require('path')

module.exports = {
  devMode: function() {
    return process.env.NODE_ENV !== 'production'
  },

  resolve: function(dir) {
    return path.join(__dirname, '..', dir)
  },

  postcss_loader: {
    loader: 'postcss-loader',
    options: {config: {path: path.resolve(__dirname, 'postcss.config.js')}}},
  
  css_loader: {
    loader: 'css-loader',
    options: {importLoaders: 1}
  }
}