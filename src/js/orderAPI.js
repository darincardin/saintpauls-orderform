
var url = 'http://api.darincardin.com';
//var url = "";


export default class OrderAPI {
	
	static progressbar = null;
	
	static list(page=0){
		var amount = Math.floor((window.innerHeight - 215) / 43);
		return OrderAPI.get(`${url}/php/orders/list.php?amount=${amount}&page=${page}`)	
	}

	static create(data){
		return OrderAPI.post(`${url}/php/orders/create.php`, data);
	}	
	
	static update(data){
		return OrderAPI.post(`${url}/php/orders/update.php`, data);	
	}	

	static delete(id){
		return OrderAPI.get(`${url}/php/orders/delete.php?id=${id}`);
	}
	
	static login(username, password){
		return OrderAPI.post(`${url}/php/login.php`, {username, password} )
	}	
	
	static logout(){
		return OrderAPI.get(`${url}/php/logout.php`)
	}	
	
	
	static get(url){
		return OrderAPI.request(url, 'get')
	}
		
	static post(url, data){
		return OrderAPI.request(url, 'post', data)
	}
	
	
	static request(url, method, data){

		var opts = {method}
		
		if(data) opts.body = JSON.stringify(data)
		
		return fetch(url, opts).then(res => res.json()).catch( err =>{
			alert('An error occurred. Please try again later.')
			OrderAPI.progressbar.hide();	
			throw err;
		})	
	}
}









