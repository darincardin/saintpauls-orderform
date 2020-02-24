const path = require('path');


var config = {

 // entry: './src/index.js',

  entry: {
	index: './src/index.js',
	admin: './src/admin.js',
  },

  output: {
	path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  devServer: {
	contentBase: './src',
	publicPath: '/',
	historyApiFallback: true,
    inline: true,
    port: 7777
  },


  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
       // query: {
      //    presets: ['es2015', 'react']
      //  }
      }
    ]
  }
}

module.exports = config;
