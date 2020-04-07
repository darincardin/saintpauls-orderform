import OrderAPI from '/js/orderAPI.js';


const newOrder = {id:"", fName:"", lName:"", quantity:"", phone:"", address:""}

const newState = { loading:false,  order:{...newOrder}, data:[], page:0, total:0 }

const reducer = (state = newState, action) => {

	var {type, order, data, total, page} = action;

	switch (type) {
	  		
	  case 'LIST': return { ...state, data, total, page, loading:false };
	
	  case 'SAVE':  return { ...state, order };
	  case 'CLEAR': return { ...state, order:{...newOrder} };

      default:  return state;
    }
    
}
export default reducer;