

class Order {
	
	static price =  12.99;
	
	constructor(o){
		if(o) Object.assign(this, o);	
	}

	id="";
	fName="";
	lName="";
	phone="";
	
	quantity="";
	deliveryMethod = false;
	address="";
	time="10:30"	
	instructions=""
		
	total() {
		return Order.price * parseInt(this.quantity);
	}
	
	equals(o){
		return (o != null && this.id == o.id);
	}
	
	
	static toArray(arr){
		return arr.map(i=>new Order(i));
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
				{label:"Customer Info", name:"cust-info", tag:"header"  },
				{label:"First Name",    name:"fName",  	  tag:"text",  required:true},
				{label:"Last Name",     name:"lName",  	  tag:"text",  required:true},
				{label:"Phone",         name:"phone",  	  tag:"phone", required:false, format:true}
			],
			orderInfo: [ 
				{label:"Order Info", name:"order-info", 	tag:"header" },
				{label:"Quantity",   name:"quantity",   	tag:"number", showIf:{target: "deliveryMethod", test:v=>v>5 }, required:true},
				{label:"Deliver",    name:"deliveryMethod", tag:"radio",  showIf:{target:['address', 'time'], test:true },  options: [
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

export default Order;