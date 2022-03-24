import Order from './Order.js';


var url = 'http://localhost:8888';



class OrderAPI {
	

	static list(page, sort, pageSize, search){	
		return OrderAPI.get(`${url}/php/orders/controllers/list.php?search=${search}&pageSize=${pageSize}&page=${page}&sortBy=${sort.by}&sortDir=${sort.dir}`);
	}

	static create(data){
		return OrderAPI.post(`${url}/php/orders/controllers/create.php`, data).then(id =>{   
			return new Order({...data, id});
		})
	}	
	
	static update(data){
		return OrderAPI.post(`${url}/php/orders/controllers/update.php?id=${data.id}`, data);	
	}	

	static delete(id){
		return OrderAPI.get(`${url}/php/orders/controllers/delete.php?id=${id}`);
	}
	
	static login(data){
		return OrderAPI.post(`${url}/php/login.php`, data ) 
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
		
		return fetch(url, opts).then(res => res.json()).then(res=>{
			
			if(res instanceof Array) res.data = Order.toArray(res.data)
				
			//if(res?.data?.length != undefined) res.data = Order.toArray(res.data)

			return res;
		}).catch( err =>{
			alert('An error occurred. Please try again later.')	
			throw err;
		})	
	}
}


export default OrderAPI;