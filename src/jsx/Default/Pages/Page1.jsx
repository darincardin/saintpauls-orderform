import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import Form from 'form';

import {connect, actions} from 'reducer'
import {Order} from '/js/orderAPI.js';

class Page1 extends React.Component {

	state = { order: this.props.order }

	onSuccess = order =>{
		this.props.actions.setOrder(order);
		this.props.history.push('/page2')
	}

	render = ()=> {
		return (
			<div className="page1" >
				<div>
				

							<p>Lobster rolls cost $12.99 and include a bag of chips. Orders can be picked up May 10th at noon.</p>
							
							<Form  onSuccess={this.onSuccess} object={this.state.order} fields={Order.display.inputs} >
								<button type="submit" className="btn btn-primary">Submit</button> 	
							</Form>			
				
				</div>
			</div>	
		)
	}
}


const mapStateToProps = (state, ownProps) => {
	return { order: state.order }
}

const mapDispatchToProps = (dispatch) => ({
	actions: actions(dispatch)
})

export default withRouter(connect(  mapStateToProps,  mapDispatchToProps)(Page1));
	
	
