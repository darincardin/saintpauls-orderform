const path = require('path');
var webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = (env) => {

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
		path: path.resolve(__dirname, 'dist'), filename: '[name].js'
	  },
	  devServer: require('./devServer/index.js')(env),
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


