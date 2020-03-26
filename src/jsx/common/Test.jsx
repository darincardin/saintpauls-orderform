import React from "react";
import {connect} from 'react-redux';

var	mapStateToProps = state =>{
		return {
			ctr: this.state.counter
		}
		
}

var mapDispatchToProps = displatch =>{
	
		return {
			onIncrementCounter: () => dispatch({type: 'INCREMENT'})
		}


}



class Test extends React.Component{
	
	state = {counter:1}
	


    render() {
		return (<div > {this.state.counter}XSDSDDSDSX</div> );
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Test);
