import React from 'react';
import {BrowserRouter as Router, Switch,  Route,Link, withRouter} from "react-router-dom";
import OrderAPI from '/js/orderAPI.js';
import ProgressBar from '/jsx/common/widget/ProgressBar.jsx';

import Context from '/js/context.js';

class Page2 extends React.Component{
    static contextType = Context;

	submitHandler = (e) => {
		this.context.showOverlay()

		OrderAPI.create(this.props.object).then(res => { 
			this.context.hideOverlay()
			this.props.object.id = res;
			this.props.history.push('/page3')
		}).catch(context.errorHandler)
	}

	data = [
		{label: "First Name", value: props.object.fName },
		{label: "Last Name", value: props.object.lName },
		{label: "Quantity", value: props.object.quantity },
		{label: "Phone", value: props.object.phone },
		{label: "Address", value: props.object.address }
	]
	
	render(){
		return (
			<div className="page2" >
				<h2>Confirm Order </h2>
				<div className="panel panel-default form-horizontal">
					<div className="panel-body">
						<table >  
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
								
								