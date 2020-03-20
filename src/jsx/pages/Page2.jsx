import React, { useContext } from 'react';

import {BrowserRouter as Router, Switch,  Route,Link, withRouter} from "react-router-dom";
import OrderAPI from '../../js/orderAPI.js';
import ProgressBar from '../common/widget/ProgressBar.jsx';

import Context from '/js/context.js';

var Page2 = props => {

	const context = useContext(Context);
	
	const submitHandler = (e) => {
		context.showOverlay()

		OrderAPI.create(props.object).then(res => { 
			context.hideOverlay()
			props.object.id = res;
			props.history.push('/page3')
		}).catch(context.errorHandler)
		
	}

	var data = [
		{label: "First Name", value: props.object.fName },
		{label: "Last Name", value: props.object.lName },
		{label: "Quantity", value: props.object.quantity },
		{label: "Phone", value: props.object.phone },
		{label: "Address", value: props.object.address }
	]
	
	return (
		<>
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
							<button className="btn btn-primary" type='button' onClick={submitHandler} >Confirm</button> 	  
						</div>
					</div>
				</div>
			</div>		
		</>
	)
}
export default withRouter(Page2);
								//		