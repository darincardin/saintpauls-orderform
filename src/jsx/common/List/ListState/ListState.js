import { Cookies } from 'react-cookie';



class ListState {
	
	static cookie = new Cookies('my-cookie');
	
	static DEFAULT_STATE = {page:0, total:0, search: "", loading:false, sort:{by:"id", dir:"ASC"}};

	constructor(){

		var state =  ListState.get();
		
		const INITIAL_STATE = state || ListState.DEFAULT_STATE;
		
		return INITIAL_STATE;
	}	
	
	static get(){
		return ListState.cookie.get('list-state');
	}	
	
	static set(s){
		ListState.cookie.set('list-state', s)
	}
}


export default ListState;
