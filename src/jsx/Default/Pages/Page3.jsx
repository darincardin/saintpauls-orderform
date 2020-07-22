import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import {Order} from '/js/orderAPI.js';

import {connect, actions} from 'reducer'

class Page3 extends React.Component {
	
		constructor(props){
			super(props)
			if(!props.order.fName) props.history.push('/')
		}
	
		clear = () =>{
			this.props.actions.setOrder(new Order());
		}
	
	
		data = [
			{label: "Order ID", value: this.props.order.id },
			{label: "Name", value: this.props.order.lName + ", " + this.props.order.fName },
			{label: "Quantity", value: this.props.order.quantity },
			{label: "Price", value: "$" + (this.props.order.quantity * 12.99) }
		]
	
		render() { 
			return (
				<div className="page3" >

					<h3 style={{'font-weight':'600'}}>Order Successful! </h3>
	
							<table >  
								<tbody>
								{this.data.map(i=>(
									<tr> 
										<td><label className='control-label'>{i.label}</label></td>
										<td>{i.value}</td>
									</tr>
								))}							
								 </tbody>
							</table>  
							<hr/>
							<div className="text-right">
								<Link to="/" onClick={this.clear}  >
									<button type="button" className="btn btn-primary" >Place Another Order</button> 	
								</Link>
							</div>
				
				</div>
			)
		}
}

const mapStateToProps = (state, ownProps) => {
	return { order: state.order }
}

const mapDispatchToProps = (dispatch) => ({
	actions: actions(dispatch),
})

export default withRouter(connect(  mapStateToProps,  mapDispatchToProps)(Page3));

