import OrderAPI from '/js/orderAPI.js';



export const actions = function(dispatch, getState) {

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
		
		    var amount = Math.floor((window.innerHeight - 215) / 43);

			return OrderAPI.list(page, amount).then(res => { 
				dispatch({type:"LIST", data:res.data  } ) 
				return res;
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
