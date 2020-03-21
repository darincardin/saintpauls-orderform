import React from 'react';
import {BrowserRouter as Router, Switch,  Route,Link, withRouter} from "react-router-dom";
import OrderAPI from '/js/orderAPI.js';

import Context from '/js/context.js';

class Page2 extends React.Component{
    static contextType = Context;

	submitHandler = (e) => {
		this.context.showOverlay()

		OrderAPI.create(this.props.object).then(res => { 
			this.context.hideOverlay()
			this.props.object.id = res;
			this.props.history.push('/page3')
		}).catch(this.context.errorHandler)
	}

	data = [
		{label: "First Name", value: this.props.object.fName },
		{label: "Last Name", value: this.props.object.lName },
		{label: "Quantity", value: this.props.object.quantity },
		{label: "Phone", value: this.props.object.phone },
		{label: "Address", value: this.props.object.address }
	]
	
	render(){
		return (
			<div className="page2" >
				<h2>Confirm Order </h2>
				<div className="panel panel-default form-horizontal">
					<div className="panel-body">
						<table >  
							<tbody>
							{this.data.map(i=>(
								<tr> 
									<td><label className='control-label' htmlFor='inputSuccess4'>{i.label}</label></td>
									<td>{i.value}</td>
								</tr>
							))}
							</tbody>
						</table>
						<hr/>
						<div className="text-right">
							<Link to='/'><button  className="btn btn-default">Back</button></Link>
							&nbsp;
							<button className="btn btn-primary" type='button' onClick={this.submitHandler} >Confirm</button> 	  
						</div>
					</div>
				</div>
			</div>		
		)
	}
}
export default withRouter(Page2);
								
								