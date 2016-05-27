const Path = require('path');

const config = {
  entry: {
    app: ['./client/js/app']
  },
  output: {
    path: './build',
    filename: '[name]-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.scss$/,
      include: [
        Path.resolve(process.cwd(), 'client/style')
      ],
      loader: 'style!css!sass'
    }, {
      test: /\.jsx?$/,
      include: [
        Path.resolve(process.cwd(), 'client/js')
      ],
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extension: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
};

module.exports = config;
