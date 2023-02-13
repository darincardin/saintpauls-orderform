
var _ = require('lodash');


module.exports = function(env) {
	
	var dir = env && env.mode || 'dist';
	
	var reader = function(res, path){   return JSON.parse( require('fs').readFileSync(`devServer/data/${path}`, 'utf8')) }

	var data = reader(null, 'list.json');
	
	
	return {
		contentBase:  require('path').join(__dirname, dir),
		publicPath: '/',
		historyApiFallback: true,   
		inline: true,
		disableHostCheck: true,  
		port: 8080   ,
		before: function(app, server, compiler) {
			app.post('/php/orders/controllers/create.php',  (req, res)=>res.json(reader(res, 'create.json'))); 
			app.post('/php/orders/controllers/update.php',  (req, res)=>{
				return res.json(reader(res, 'success.json')); 
			})
			app.get('/php/orders/controllers/list.php*',    (req, res)=>{	
				var {page, amount} = req.query;
			
				var list = [
				  	{"id":"15", "fName": "Rice", "lName":"Allen",  "quantity":"2", "phone":"211-234-3332", "address":"Union Street"},
  					{"id":"16", "fName": "Smith", "lName":"John",  "quantity":"5", "phone":"222-222-2222", "address":"Rockdale Street"}  	
				]
				
				
				res.json({total:list.length, data: list});
			})

			app.get('/php/orders/controllers/delete.php*', (req, res)=>{
				_.remove(data, {id: req.query.id})
				res.json(reader(res, 'success.json'));
			}); 
			app.post('/php/login.php*',  (req, res)=>res.json(reader(res, 'success.json'))); 
			app.get('/php/logout.php',  (req, res)=>res.json(reader(res, 'success.json'))); 
		}
	}
}


