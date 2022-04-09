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
		
		var state = new ListState();
				
		if(ListStore.has()) state = {...state, ...ListStore.retrieve()};		
			
		state.ref = ref;	
			
		return state;
	}		

	getHeight = function getHeight(){
		return (this.ref && this.ref.current) ? this.ref.current.parentElement.offsetHeight - 15 : 1 ;	
	}
	
	getPageSize = function getPageSize(){				
		var value = Math.round((this.getHeight()/ROW_SIZE)) - 3;
		return  value || 1;
	}
	
	getTotalPages = function getTotalPages(){
		var value = (Math.ceil(this.total /  this.getPageSize()) - 1);	
		return value > 0 ? value : 0;
	}

	getCurrentPage = function getCurrentPage(){
		var totalPages = this.getTotalPages();			
		return (this.page > totalPages) ? totalPages : this.page;	
	}
}

class ListStore {
	static cookie = new Cookies('my-cookie');

	static save(s){	
		ListStore.cookie.set('list-state', { ...s, ...{ref:null}} )
	}
	
	static retrieve(){	
		return ListStore.cookie.get('list-state');
	}	
	
	static has(){
		return ListStore.cookie.get('list-state') ? true : false;	
	}
	

	
	
}

export  {ListState, ListStore};
