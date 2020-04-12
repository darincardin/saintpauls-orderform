import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";

import {actions} from '/js/actions.js';

let Page3 = ({ order, actions, props }) => {
	
		useEffect(() => {
			if(!order.fName) props.history.push('/')
		});
	
		var data = [
			{label: "Order ID", value: order.id },
			{label: "Name", value: order.lName + ", " + order.fName },
			{label: "Quantity", value: order.quantity },
			{label: "Price", value: "$" + (order.quantity * 12.99) }
		]
	
		return (
			<div className="page3" >
				<h2>Order Successfull!</h2>
				<div className="panel panel-default form-horizontal">
					<div className="panel-body">
						<table >  
							<tbody>
							{data.map(i=>(
								<tr> 
								    <td><label className='control-label'>{i.label}</label></td>
									<td>{i.value}</td>
								</tr>
							))}							
							 </tbody>
						</table>  
						<hr/>
						<div className="text-right">
							<Link to="/" onClick={actions.clear}  >
								<button type="button" className="btn btn-primary" >Place Another Order</button> 	
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
}

const mapStateToProps = (state, ownProps) => {
	
	return{ order: state.order, props: ownProps }
}

const mapDispatchToProps = (dispatch) => ({
	actions: actions(dispatch),
})

export default withRouter(connect(  mapStateToProps,  mapDispatchToProps)(Page3));