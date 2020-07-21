import {Order} from '/js/orderAPI.js';

const newState = { order: new Order() }

const reducer = (state = newState, action) => {

	var {type, order, data} = action;

	switch (type) {
	    case 'SETORDER': return { ...state, order };
	    case 'CLEAR':    return { ...state, order: new Order() };
        default:  return state;
    }
}
export default reducer;