import React from 'react';
import {BrowserRouter as Router, Switch, withRouter, Route,Link} from "react-router-dom";
import form from '../../js/form.js';
import Context from '../../js/context.js';

class Page3 extends React.Component {
	static contextType = Context;

	newOrder = () =>{
		this.context.state.clear();
		this.props.history.push('/');
	}
	
	render(){
		return (
		<Context.Consumer>
		{ context => (
	
			<div className="page3" >
				<h2>Order Successfull!</h2>
				<div className="panel panel-default form-horizontal">
					<div className="panel-body">
						<table >  
							<tbody>
								<tr>
									<td><label className="control-label">Order ID</label> </td>
									<td>{context.state.form.id}</td>
								</tr>
								<tr>
									<td><label className="control-label">Name</label> </td>
									<td>{context.state.form.fName}, {context.state.form.lName}</td>
								</tr>
								<tr>
									<td><label className="control-label">Quantity</label></td>
									<td>{context.state.form.quantity}</td>
								</tr>
								<tr>
									<td><label className="control-label">Price</label></td>
									<td>${context.state.form.quantity * 12.99}</td>
								</tr>								
							 </tbody>
						</table>  
						<hr/>
						<button  className="btn btn-primary" onClick={this.newOrder} >Place Another Order</button>
					</div>
				</div>
			</div>
		)}	
		</Context.Consumer>	
		)
	}
}

export default withRouter(Page3);