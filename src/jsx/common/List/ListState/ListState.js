import { Cookies } from 'react-cookie';





class ListState {
	
	static cookie = new Cookies('my-cookie');
	
	page = 0;
	pageSize = 0;
	total = 0;
	search =  "";
	loading = false;
	sort = {by:"id", dir:"ASC"};
	
	error = false;
	
	constructor(){

		//var state =  ListState.get();
		
		//return ( state || this );
	}		
	
	
	

	
	isActive(){
		
		return true;
	}
	
	static get(){
		return ListState.cookie.get('list-state');
	}	
	
	static set(s){
		ListState.cookie.set('list-state', s)
	}
}


export default ListState;
