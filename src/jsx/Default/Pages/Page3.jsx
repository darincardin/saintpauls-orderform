import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";

import {Order} from  '/js/order';
import {connect, actions} from 'reducer'

class Page3 extends React.Component {
	
		state = { order: this.props.order }
	
	    data = [];
	
		constructor(props){
			super(props)
			if(!props.order.fName) props.history.push('/')	

			this.data = [
				{label: "Order ID", value: this.state.order.id },
				{label: "Name", value: this.state.order.lName + ", " + this.state.order.fName },
				{label: "Quantity", value: this.state.order.quantity },
				{label: "Price", value:  "$" + this.state.order.total() }
			]					
		}
	
		clear = () =>{
			this.props.actions.setOrder(new Order());
		}
	
		render() { 
			return (
				<div className="page3" >
					<h3 style={{'font-weight':'600'}}>Order Successful!</h3>
	
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
								<Link to="/" onClick={this.clear} >
									<button type="button" className="btn btn-primary" >Place Another Order</button> 	
								</Link>
							</div>
				</div>
			)
		}
}

const mapStateToProps = (state, ownProps) => {;
	return { order: state.order }
}

const mapDispatchToProps = (dispatch) => ({
	actions: actions(dispatch),
})

export default withRouter(connect(  mapStateToProps,  mapDispatchToProps)(Page3));

