
const newOrder = {fName:"", lName:"", quantity:"", phone:"", address:""}

const newState = { showProgress:false, order:{...newOrder} }

const reducer = (state = newState, action) => {
	debugger;
	switch (action.type) {
      case 'SAVE':  return { ...state, order:{...action.order} };
	  case 'CLEAR': return { ...state, order:{...newOrder} };
	  case 'OPEN':  return { ...state, showProgress:true };
      case 'CLOSE': return { ...state, showProgress:false } ;
      default:  return state;
    }
    
}
export default reducer;