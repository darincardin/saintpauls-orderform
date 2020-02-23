

module.exports = function(data)  {

  var obj =  { 
	
	submitted: false,
	errors:{},
	
	isValid: function(){
		return Object.keys(this.errors).length == 0;
	},
		
	$required: function(name, value){
			
		var val =  value==undefined ? this[name] : value;
		if(!val) this.errors[name] = "required";
		else delete this.errors[name];	
		
		return !val;
	},

	$phone: function(name){
		var val = this[name];
			
		var phone = /^\d{3}-\d{3}-\d{4}$/;
		
		if(!phone.test(val)) this.errors[name] = "phone";
		else delete this.errors[name];	
		
		return !phone.test(val);
	}
  };
  
  if(data) $.extend(obj, data);
  
  return obj;
};

