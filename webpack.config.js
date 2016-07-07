const resolve      = require('path').resolve;
const autoprefixer = require('autoprefixer');

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
    loaders: [
      {
        test: /\.scss$/,
        include: [
          resolve(process.cwd(), 'client/style')
        ],
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.jsx?$/,
        include: [
          resolve(process.cwd(), 'client/js')
        ],
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.woff$/,
        loader: 'url?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    extension: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  postcss: function() {
    return [autoprefixer({ browsers: ['last 2 versions'] })];
  }
};

module.exports = config;
