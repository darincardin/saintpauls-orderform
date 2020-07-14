import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";

import Form from 'form';
import {Order} from '/js/orderAPI.js';


class Page1 extends React.Component {

	state = { order: this.props.order }

	fields = [ 
			{label:"Personal Info",  tag:"header"  },
		{label:"First Name", name:"fName",  tag:"text",  required:true},
		{label:"Last Name",  name:"lName",  tag:"text",  required:true},
		{label:"Phone",      name:"phone",  tag:"phone",  required:true},
		
		{label:"Order Info",  tag:"header"  },
		{label:"Quantity",   name:"quantity", tag:"number",  required:true},
		//{label:"Deliver",   name:"deliver", tag:"checkbox",  showIf:{name: "quantity", func:v=>v>5 }},
		
		{label:"Address",    name:"address", tag:"text", required:false},
		/*
		{label:"Time",       name:"time",    tag:"select", options: [  
			{id:"1", label:"10:30 AM"},
			{id:"2", label:"11:00 AM"},
			{id:"3", label:"11:30 AM"}
		]}
		*/
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
							<Form  onSuccess={this.onSuccess} object={this.state.order} fields={this.fields}>
						
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