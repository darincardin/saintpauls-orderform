import { Cookies } from 'react-cookie';





class ListState {
	
	ref = null;
	
	static cookie = new Cookies('my-cookie');

	
	page = 0;
	pageSize = 0;
	total = 0;
	search =  "";
	loading = false;
	sort = {by:"id", dir:"ASC"};
	
	error = false;
	
	constructor(ref){
		this.ref = ref;
		//var state =  ListState.get();
		
		//return ( state || this );
		
		console.log('sssss')
	}		
	

	

	
	
	getHeight = ()=>{

		return this.ref.current && this.ref.current.parentElement.offsetHeight - 15 ;	
	}
	


	
	isActive(){
		
		return true;
	}
	
	static getxxx(){
	//	return ListState.cookie.get('list-state');
	}	
	
	static setxxx(s){
	//	ListState.cookie.set('list-state', s)
	}
}


export default ListState;
