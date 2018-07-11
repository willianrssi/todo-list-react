
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')

module.exports = {
  entry: join(__dirname, 'src', 'index.jsx'),

  output: {
    path: join(__dirname, 'public'),
    filename: './app.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo App',
      template: join(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [{
      test: /.js(x*)?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['stage-0', 'react']
      }
    },
    {
      test: /\.(s*)css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
      loaders: 'file-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: join(__dirname, 'node_modules')
    }
  }
}
