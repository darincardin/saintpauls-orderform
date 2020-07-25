
var url = 'http://api.darincardin.com';
//var url = "";


class Order {
	
	id="";
	fName="";
	lName="";
	phone="";
	
	quantity="";
	deliveryMethod = false;
	address="";
	time="10:30"	
	instructions=""
		
	constructor(o){
		if(o) Object.assign(this, o);	
	}
	
	
	static toArray(arr){
		return arr.map(i=>new Order(i));
	}
	
	
	equals(o){
		return (o != null && this.id == o.id);
	}
	
	static display = {
		columns: [
			{name:'ID', id:'id'},
			{name:'First Name', id:'fName'},
			{name:'Last Name', id:'lName'},
			{name:'Qty', id:'quantity'},
			{name:'Phone', id:'phone'},
			{name:'Address', id:'address'}
		],

		inputs: {
			id: [{label:"ID", name:"id", tag:'label'}],
			customerInfo: [ 
				{label:"Customer Info", name:"customer-info",  tag:"header"  },
				{label:"First Name", name:"fName",  tag:"text",  required:true},
				{label:"Last Name",  name:"lName",  tag:"text",  required:true},
				{label:"Phone",      name:"phone",  tag:"phone",  required:true},
			],
			orderInfo: [ 
				{label:"Order Info", name:"order-info", 	tag:"header" },
				{label:"Quantity",   name:"quantity",   	tag:"number",  required:true, showIf:{target: "deliveryMethod", test:v=>v>5 }},
				{label:"Deliver",    name:"deliveryMethod", tag:"radio", showIf:{target:['address', 'time'], test:true },  options: [
					{label:"Pickup",  value:false },
					{label:"Deliver", value:true }
				]},
				{label:"Address",    name:"address",    tag:"text", required:true },
				{label:"Time",       name:"time",       tag:"select",  options: [  
					{id:"10:30", label:"10:30 AM"},
					{id:"11:00", label:"11:00 AM"},
					{id:"11:30", label:"11:30 AM"}
				]},
				{label:"Instructions",    name:"instructions",    tag:"textarea" },
			]
		}
	}
	
}


 class OrderAPI {
	

	static list(page, sort, amount){	
		return OrderAPI.get(`${url}/php/orders/controllers/list.php?amount=${amount}&page=${page}&sortBy=${sort.by}&sortDir=${sort.dir}`);
	}

	static create(data){
		return OrderAPI.post(`${url}/php/orders/controllers/create.php`, data).then(id =>{   
			return {...data, id}
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

			if(res?.data?.length != undefined)res.data = Order.toArray(res.data)

			return res;
		}).catch( err =>{
			alert('An error occurred. Please try again later.')	
			throw err;
		})	
	}
}









export  {Order};
export default OrderAPI;