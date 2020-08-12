import {Order} from  '/js/order';

const newState = { step:0,  order: new Order() }

const reducer = (state = newState, action) => {

	var {type, order, data} = action;

	switch (type) {
	    case 'SETORDER': return { ...state, order };
	    case 'CLEAR':    return { ...state, order: new Order() };
        default:  return state;
    }
}
export default reducer;