'use strict'

const utils = require('./utils')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')



module.exports = {
  entry: ['./src/app.js'],
  
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@components': utils.resolve('src/components'),
      '@assets': utils.resolve('assets')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        'use': 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false
          }
        }
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new VueLoaderPlugin()
  ]
}