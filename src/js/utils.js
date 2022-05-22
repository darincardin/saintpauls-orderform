
function utils () {
	
	var x = {
		
		thirdParty: Promise.all([
			import ('jquery'),
			import ('bootstrap/dist/js/bootstrap.js'),
		]),	
				
		ref:null,
		width: 0,
		isXS: () => { return x.ref ? x.ref.current.clientWidth<=525 : 0 }		
	}
	
	return x; 
}


export default utils();