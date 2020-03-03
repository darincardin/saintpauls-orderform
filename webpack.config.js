const path = require('path');

var readFile = function(file){
	return JSON.parse( require('fs').readFileSync(file, 'utf8') );
}


var config = {

  entry: {
	index: './src/index.js',
	admin: './src/admin.js',
	login: './src/login.js',
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
		
		var reader = function(res, path){
			var data = JSON.parse( require('fs').readFileSync(`data/${path}`, 'utf8') );
			res.json(data);
		}
		  
		app.post('/php/orders/create.php',  (req, res)=>reader(res, 'create.json')); 
		app.post('/php/orders/update.php',  (req, res)=>reader(res, 'success.json')); 
		app.get('/php/orders/list.php',    (req, res)=>reader(res, 'list.json')); 
		app.get('/php/orders/delete.php*', (req, res)=>reader(res, 'success.json')); 
		app.post('/php/login.php*',  (req, res)=>reader(res, 'success.json')); 
		app.get('/php/logout.php',  (req, res)=>reader(res, 'success.json')); 
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

