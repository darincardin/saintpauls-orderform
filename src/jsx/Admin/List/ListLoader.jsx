import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'





var ListLoader = ({ loading}) => {
	return (
		<>{loading&& <div className="table-loader"></div>}</>			
	)	
}		


const mapStateToProps = (state, ownProps) => {
	return	{ loading: state.loading }
}

const mapDispatchToProps = (dispatch) => ({
    save: order => { dispatch({type:"SAVE", order})},
	setState: state =>{dispatch({type:"SET_STATE", state})},
	progress:{
		show: () => { dispatch({type:"SHOW"})},
		hide: () => { dispatch({type:"HIDE"})}
	},
	loader: {
		show: () => { dispatch({type:"LOADING"})},
		hide: () => { dispatch({type:"FINISHED"})}		
	}
})

export default connect(  mapStateToProps)(ListLoader);
