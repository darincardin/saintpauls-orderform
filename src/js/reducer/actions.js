import {OrderAPI, Order} from  '/js/order';



export const actions = function(dispatch, getState) {

	return {	
		
		setOrder: (order) =>{
			dispatch({type:"SETORDER", order:order})
		},
		clear : () => { 
			dispatch({type:"CLEAR"})
		}
	}	
}
