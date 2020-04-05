import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch,  Route,Link, withRouter} from "react-router-dom";

import {actions, progressbar} from '/js/actions.js';

import OrderAPI from '/js/orderAPI.js';


let Page2 = ({ order, actions, progressbar, props }) => {

	useEffect(() => {
		if(!order.fName) props.history.push('/')
	});

	var data = [
		{label: "First Name", value: order.fName },
		{label: "Last Name", value: order.lName },
		{label: "Quantity", value: order.quantity },
		{label: "Phone", value: order.phone },
		{label: "Address", value: order.address }
	]

	var submitHandler = () => {
		
		progressbar.show();
		
		actions.create(order).then(res =>{
			props.history.push('/page3')
		})
		.finally(
			progressbar.hide
		)
	}

	return (
			<div className="page2" >
				<h2>Confirm Order </h2>
				<div className="panel panel-default form-horizontal">
					<div className="panel-body">
						<table>  
							<tbody>
							{data.map(i=>(
								<tr> 
									<td><label className='control-label' htmlFor='inputSuccess4'>{i.label}</label></td>
									<td>{i.value}</td>
								</tr>
							))}
							</tbody>
						</table>
						<hr/>
						<div className="text-right">
							<Link to='/'><button className="btn btn-default">Back</button></Link>
							&nbsp;
							<button className="btn btn-primary" type='button' onClick={submitHandler} >Confirm</button> 	  
						</div>
					</div>
				</div>
			</div>		
	)
}

const mapStateToProps = (state, ownProps) => {
	return{ order: state.order, props: ownProps }
}

const mapDispatchToProps = (dispatch) => {	
	return { 
		actions: actions(dispatch),
		progressbar: progressbar(dispatch),
	}		
}

export default withRouter(connect( mapStateToProps,  mapDispatchToProps)(Page2));
		

