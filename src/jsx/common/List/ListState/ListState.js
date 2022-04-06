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
	
	constructor(ref){
	
	//	var state =  ListState.retrieve() || this;
		
		//var state = this;
		debugger;
		this.ref = ref;
		
		//return ( state );
	}		
	

	
	getHeight = function getHeight(){
		return this.ref.current ? this.ref.current.parentElement.offsetHeight - 15 : 1 ;	
	}
	

	getTotalPages = function getTotalPages(){
		var value = (Math.ceil(this.total /  this.getPageSize()) -1);
		
		return value > 0 ? value : 0;
	}

	getPageSize = function getPageSize(){				
		var value = Math.floor((this.getHeight()/ROW_SIZE)) -3;
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
		
	//	ListStore.cookie.set('list-state', s)
	}
	
}

export  {ListState, ListStore};
