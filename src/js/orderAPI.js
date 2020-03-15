

export default class OrderAPI {
	
	static list(amount, page){
		return  fetch(`/php/orders/list.php?amount=${amount}&page=${page}`).then(res =>res.json())
	}
	
	static create(data){
		return  fetch('/php/orders/create.php', { method: 'post', body: JSON.stringify(data) }).then(res => res.json())
	}	
	
	static update(obj){
		return fetch(`/php/orders/update.php`, { method:'post', body:JSON.stringify(obj)} ).then(res =>res.json());
	}	

	static delete(id){
		return fetch(`/php/orders/delete.php?id=${id}`).then(res=>res.json());
	}
	
	static login(username, password){
		var obj = {username, password}
		
		return fetch(`/php/login.php`, {method:'post',  body: JSON.stringify(obj)} ).then(res => res.json());
	}	
	
	static logout(){
		return fetch(`/php/logout.php`).then(res => res.json());
	}	
}