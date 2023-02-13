import { Cookies } from 'react-cookie';

import ListState from './ListState.js';
import ListSort from './ListSort.js';

class ListStore {
	static cookie = new Cookies('my-cookie');

	static save(s){	
		var d =  { ...s, ...{ref:null}}

		ListStore.cookie.set('list-state', d)
	}
	
	static retrieve(){	
		
		var state = new ListState();
				
		if(ListStore.has()){ 
			
			var cookie = ListStore.cookie.get('list-state')

			state.page = cookie.page;
			state.total = cookie.total;
			state.search =  cookie.search;
			state.sort = new ListSort(cookie.sort.by, cookie.sort.dir);
			state.loading = cookie.loading;
			state.error = cookie.error;		
		}
			
		return state;
	}	
	
	static has(){
		return ListStore.cookie.get('list-state') ? true : false;	
	}	
}

export default ListStore;
