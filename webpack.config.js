const path = require('path');

var readFile = function(file){
	return JSON.parse( require('fs').readFileSync(file, 'utf8') );
}


var config = {

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
	historyApiFallback: true   ,   
    inline: true,
    port: 7777   ,
	
	
	
	before: function(app, server, compiler) {
		
      app.post('/php/orders/create.php', function(req, res) {	  
		  res.json(readFile('data/create.json'));
      });
	  
	  app.get('/php/orders/list.php', function(req, res) {
		  res.json(readFile('data/list.json'));
      }); 

	  app.post('/php/orders/update.php', function(req, res) {
		  res.json(readFile('data/update.json'));
      }); 	  
	  
	  app.get('/php/orders/delete.php*', function(req, res) {
		  res.json(readFile('data/delete.json'));
      }); 
    }
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

