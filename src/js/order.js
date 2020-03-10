
import form from './form.js';

export default class Order {
	
	constructor(obj = {}){
		this.id = obj.id || "";
		this.fName = obj.fName || "";
		this.lName = obj.lName || "";
		this.quantity = obj.quantity || "";
		this.phone = obj.phone || "";
		this.address = obj.address || "";
		
		return form(this);
	}
}