

module.exports = function(data)  {

  var obj =  { 
	$submitted: false,
	$errors:{},
	
	$isValid: function(){
		return Object.keys(this.$errors).length == 0;
	},
		
	$required: function(name, val){
		
		if(!val) this.$errors[name] = "required";
		else delete this.$errors[name];	
		
		return !val;
	},

	$phone: function(name, val){
		
		var pattern = /^\d{3}-\d{3}-\d{4}$/;
		
		if(!pattern.test(val)) this.$errors[name] = "phone";
		else delete this.$errors[name];	
		
		return !pattern.test(val);
	}
  };
  
  if(data) $.extend(obj, data);
  
  return obj;
};

