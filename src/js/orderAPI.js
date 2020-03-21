
var url = "";//'http://api.darincardin.com';

export default class OrderAPI {
	
	
	
	static list(amount, page){
		return  fetch(`${url}/php/orders/list.php?amount=${amount}&page=${page}`).then(res =>res.json())
	}
	
	static create(data){
		return  fetch(`${url}/php/orders/create.php`, { method: 'post', body: JSON.stringify(data) }).then(res => res.json())
	}	
	
	static update(obj){
		return fetch(`${url}/php/orders/update.php`, { method:'post', body:JSON.stringify(obj)} ).then(res =>res.json());
	}	

	static delete(id){
		return fetch(`${url}/php/orders/delete.php?id=${id}`).then(res=>res.json());
	}
	
	static login(username, password){
		return fetch(`${url}/php/login.php`, {method:'post',  body: JSON.stringify({username, password})} ).then(res => res.json());
	}	
	
	static logout(){
		return fetch(`${url}/php/logout.php`).then(res => res.json());
	}	
}