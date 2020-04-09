import OrderAPI from '/js/orderAPI.js';


const newOrder = {id:"", fName:"", lName:"", quantity:"", phone:"", address:""}

const newState = {  order:{...newOrder}, data:[]}

const reducer = (state = newState, action) => {

	var {type, order, data} = action;

	switch (type) {
	  		
	  case 'LIST': return { ...state, data };
	
	  case 'SAVE':  return { ...state, order };
	  case 'CLEAR': return { ...state, order:{...newOrder} };

      default:  return state;
    }
    
}
export default reducer;