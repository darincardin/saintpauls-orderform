
var _ = require('lodash');


module.exports = function(env) {
	
	var dir = env.mode || 'dist';
	
	var reader = function(res, path){   return JSON.parse( require('fs').readFileSync(`devServer/data/${path}`, 'utf8')) }

	var data = reader(null, 'list.json');
	
	
	return {
		contentBase:  require('path').join(__dirname, dir),
		publicPath: '/',
		historyApiFallback: true,   
		inline: true,
		port: 7777   ,
		before: function(app, server, compiler) {
			app.post('/php/orders/create.php',  (req, res)=>res.json(reader(res, 'create.json'))); 
			app.post('/php/orders/update.php',  (req, res)=>{
				return res.json(reader(res, 'success.json')); 
			})
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
	}
}


