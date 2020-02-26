import React from 'react';
import {BrowserRouter as Router, Switch, withRouter, Route,Link} from "react-router-dom";
import form from '../../js/form.js';

class Page3 extends React.Component {
	
	
	constructor(props){
		super(props);
		this.state = { form: props.form };
		this.price = 12.99 * props.form.quantity;
		this.newOrder = this.newOrder.bind(this);

	}
	
	newOrder(){

		var f = this.state.form;

		f.fName = "";
		f.lName = ""
		f.quantity = "";
		f.phone = "";
		f.address = "";
		f.submitted = false;

		this.setState({form: f});
		
		this.props.history.push('/');
	}
	
	render(){
		return (
		
			<div className="page3" >
				<h2>Order Successfull!</h2>
				<div className="panel panel-default form-horizontal">
					<div className="panel-body">

						<table >  
							<tbody>
								<tr>
									<td><label className="control-label">Order ID</label> </td>
									<td>{this.state.form.id}</td>
								</tr>
								<tr>
									<td><label className="control-label">Name</label> </td>
									<td>{this.state.form.fName}, {this.state.form.lName}</td>
								</tr>
								<tr>
									<td><label className="control-label">Quantity</label></td>
									<td>{this.state.form.quantity}</td>
								</tr>
								<tr>
									<td><label className="control-label">Price</label></td>
									<td>{this.price}</td>
								</tr>								
							 </tbody>
						</table>
						<hr/>
						<button  className="btn btn-primary" onClick={this.newOrder} >Place Another Order</button>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Page3);

//<Link to='/'></Link>  {this.state.form.quantity * 12.99}