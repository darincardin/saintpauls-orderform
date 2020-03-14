const path = require('path');
var webpack = require('webpack');


module.exports = (env) => {


	var dir = env.mode || 'src';
	var plugins = env.production ? [ new webpack.DefinePlugin({'process.env': { 'NODE_ENV': JSON.stringify('production')} }) ] : [] 

	return  {

	  entry: {
		index: './src/index.js',
		admin: './src/admin.js',
		login: './src/login.js'
	  },

	  output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	  },
	  
	  plugins:plugins,
	  devServer: {
		contentBase: path.join(__dirname, dir),
		publicPath: '/',
		
		
		historyApiFallback: true,   
		inline: true,
		port: 7777   ,
		before: function(app, server, compiler) {
			
			var reader = function(res, path){   return JSON.parse( require('fs').readFileSync(`data/${path}`, 'utf8')) }
			  
			app.post('/php/orders/create.php',  (req, res)=>res.json(reader(res, 'create.json'))); 
			app.post('/php/orders/update.php',  (req, res)=>res.json(reader(res, 'success.json'))); 
			app.get('/php/orders/list.php*',    (req, res)=>{
				
				var {page, amount} = req.query;
				var list = 	reader(res, 'list.json'); 

				res.json({
					totalPages: Math.ceil(list.length/amount),
					data: list.splice(amount*page, amount)	
				});
			})

			app.get('/php/orders/delete.php*', (req, res)=>res.json(reader(res, 'success.json'))); 
			app.post('/php/login.php*',  (req, res)=>res.json(reader(res, 'success.json'))); 
			app.get('/php/logout.php',  (req, res)=>res.json(reader(res, 'success.json'))); 
		}
	  },


	  module: {
		rules: [
		  {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		    // query: { presets: ['es2015', 'react'] }
		  }
		]
	  }
	}

}


