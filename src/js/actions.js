import OrderAPI from '/js/orderAPI.js';


export const progressbar = function(dispatch) {
	
	return {	
		show: () => { dispatch({type:"SHOW"})},
		hide: () => { dispatch({type:"HIDE"})}
	}
}

export const actions = function(dispatch) {
	
	return {	
		create : (data) => { 
			return OrderAPI.create(data).then(order => { 
				dispatch({type:"SAVE", order } )
			})
		},
		update : (data) => { 
			return OrderAPI.update(data).then(order => { 
				dispatch({type:"SAVE", order } )
			})
		},
		remove : (id) => { 
			return OrderAPI.delete(id).then(res => { return res;})
		},
		list : (page) => { 
			return OrderAPI.list(page).then(res => { 
				dispatch({type:"LIST", ...res, page  } ) 
			})
		},
		
		save : (order) => { 
			dispatch({type:"SAVE", order } )
		},		
		clear : () => { 
			dispatch({type:"CLEAR"})
		}	
	}	
}
