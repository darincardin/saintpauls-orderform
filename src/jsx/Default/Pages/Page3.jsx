import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";


var Page3 = props => {
	
		var data = [
			{label: "Order ID", value: props.object.id },
			{label: "Name", value: props.object.lName + ", " + props.object.fName },
			{label: "Quantity", value: props.object.quantity },
			{label: "Price", value: props.object.quantity * 12.99 }
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
							<Link to="/" onClick={()=>props.storeObject()}  >
								<button type="button" className="btn btn-primary" >Place Another Order</button> 	
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
}
export default Page3;