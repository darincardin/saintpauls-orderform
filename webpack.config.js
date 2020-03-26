const path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

var data = JSON.parse( require('fs').readFileSync(`data/list.json`, 'utf8'))


module.exports = (env) => {


	var dir = env.mode || 'dist';
	var plugins = [ 
	//	new CleanWebpackPlugin(),
		new webpack.ProvidePlugin({   $: "jquery", jQuery: "jquery",  }) ,
		new CopyPlugin([  { from: './src/assets/images', to: './' },]),
	];
	
	
	if(env.production)  plugins.push( new webpack.DefinePlugin({'process.env': { 'NODE_ENV': JSON.stringify('production')} }) )

	return  {
	  resolve: {
		modules: [__dirname, 'node_modules'],
		alias:{
		   "/js": path.resolve(__dirname, 'src/js/'),
		   "/jsx": path.resolve(__dirname, 'src/jsx/'),
		   "/assets": path.resolve(__dirname, 'src/assets/'),
		},
		extensions: ['*','.js','.jsx']
	  },
	  plugins: plugins,
	  entry: {
		index: './src/index.js',
		admin: './src/admin.js',
		login: './src/login.js'
	  },

	  output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	  },
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
				var list = 	[...data];
				res.json({total: Math.ceil(list.length/amount), data: list.splice(amount*page, amount)});
			})

			app.get('/php/orders/delete.php*', (req, res)=>{
				_.remove(data, {id: req.query.id})
				res.json(reader(res, 'success.json'));
			}); 
			app.post('/php/login.php*',  (req, res)=>res.json(reader(res, 'success.json'))); 
			app.get('/php/logout.php',  (req, res)=>res.json(reader(res, 'success.json'))); 

		}
	  },
	  module: {
		rules: [
		  { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
		  { test: /\.css$/i, exclude: /node_modules/, loader: ['style-loader', 'css-loader'] },
		  {
			  test: /\.(png|jpe?g|gif)$/i, 
			  exclude: /node_modules/, 
			  use: [{
				  loader: 'file-loader',
			          options: {  name: '[name].[ext]'},
			  } ]
	      },
		  {
			test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			use: [
			  {
				loader: 'file-loader',
				options: { name: '[name].[ext]',  outputPath: 'fonts/'}
			  }
			]
		  }   
		]
	  }
	}

}


