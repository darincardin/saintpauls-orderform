import React from 'react';
//import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import Form from 'form';

import {Order} from '/js/orderAPI.js';

//import {actions} from '/js/actions.js';

class Page1 extends React.Component {

	state = { order: this.props.order }

	inputs = [ 
		{label:"First Name", name:"fName",  tag:"text",  required:true},
		{label:"Last Name",  name:"lName",  tag:"text",  required:true},
		{label:"Quantity",   name:"quantity", tag:"number",  required:true},
		{label:"Phone",      name:"phone",  tag:"phone",  required:true},
		{label:"Address",    name:"address", tag:"text"},
	]	

	 onSuccess = order =>{

		this.props.update(order);
	
		this.props.history.push('/page2')
	}

	render = ()=> {
		return (
			<div className="page1" >
				<div>
					<h2> Order Form </h2>
					<div className="panel panel-default">
						<div className="panel-body">
							Lobster rolls cost $12.99 and include a bag of chips. Orders can be picked up XX.<br /><br />
							<Form  onSuccess={this.onSuccess} object={this.state.order} inputs={this.inputs}>
								<hr/>
								<button type="submit" className="btn btn-primary">Submit</button> 	
							</Form>			

						</div>
					</div>
				</div>
			</div>	
		)
	}
}
export default withRouter((Page1));
/*
const mapStateToProps = (state, ownProps) => {
	return{ order: state.order, props: ownProps }
}

const mapDispatchToProps = (dispatch) => ({
	actions: actions(dispatch)
})
export default withRouter(connect(  mapStateToProps,  mapDispatchToProps)(Page1));
	
	*/
	/*
	

	
	*/