import {OrderAPI, Order} from  '/js/order';



export const actions = function(dispatch, getState) {

	return {	
		setOrder: o =>{
			if(!(o instanceof Order)) o = new Order(o);
			
			dispatch({type:"SETORDER", order:o})
		},
		clear : () => { 
			dispatch({type:"CLEAR"})
		}
	}	
}
