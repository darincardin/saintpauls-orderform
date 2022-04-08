import { Cookies } from 'react-cookie';



const ROW_SIZE = 40;

class ListState {
	
	ref = null;
	
	
	
	page = 0;	
	total = 0;
	search =  "";
	sort = {by:"id", dir:"ASC"};
	
	loading = false;
	error = false;
	
	
	static get(ref){
		
		
		var state = new ListState(ref);
		
		
		if(ListStore.has()){
			
			var cookie = ListStore.retrieve();
			
			state.page = cookie.page;	
			state.total = cookie.total;
			state.search =  cookie.search;
			state.sort = cookie.sort
			
			state.loading = cookie.loading;
			state.error = cookie.error;
			
			return state;
		}
			
		return state
	}
	
	constructor(ref){
		this.ref = ref;
	}			

	getHeight = function getHeight(){
		return (this.ref && this.ref.current) ? this.ref.current.parentElement.offsetHeight - 15 : 1 ;	
	}

	getTotalPages = function getTotalPages(){
		var value = (Math.ceil(this.total /  this.getPageSize()) - 1);	
		return value > 0 ? value : 0;
	}

	getPageSize = function getPageSize(){				
		var value = Math.round((this.getHeight()/ROW_SIZE)) - 3;
		return  value || 1;
	}

	getCurrentPage = function getCurrentPage(){
		var totalPages = this.getTotalPages();			
		return (this.page > totalPages) ? totalPages : this.page;	
	}
}

class ListStore {
	static cookie = new Cookies('my-cookie');

	static save(s){
		const v = Object.assign({},s);
		v.ref = null;
		ListStore.cookie.set('list-state', v)
	}
	
	static retrieve(){	
		var cookie =  ListStore.cookie.get('list-state');
		return cookie;
	}	
	
	
	static has(){
		return (ListStore.cookie.get('list-state') ? true : false);	
	}
	

	
	
}

export  {ListState, ListStore};
