
const newOrder = {fName:"", lName:"", quantity:"", phone:"", address:""}

const newState = { showProgress:false, loading:false,  order:{...newOrder}, data:null, page:0, total:0 }

const reducer = (state = newState, action) => {



	switch (action.type) {
      case 'SAVE':  return { ...state, order:{...action.order} };
	  case 'CLEAR': return { ...state, order:{...newOrder} };
	  case 'SHOW':  return { ...state, showProgress:true };
      case 'HIDE': return { ...state, showProgress:false } ;
	  
	  case 'LOADING':  return { ...state, loading:true };
      case 'FINISHED': return { ...state, loading:false } ;
	  
	  
	  case 'SET_STATE': return { ...state, ...action.state };
	  case 'SET_ARRAY': return { ...state, array:[...action.array] };
	  
      default:  return state;
    }
    
}
export default reducer;