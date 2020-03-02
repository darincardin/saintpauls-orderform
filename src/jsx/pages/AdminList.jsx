import React from 'react';

import Context from '../../js/context.js';
import form from '../../js/form.js';


class AdminList extends React.Component {
	static contextType = Context;


	render(){
	  return (
		<Context.Consumer>
		{ context => (
				<div className="order-window">
				
					<div>
						<table className="mainGrid">
							<thead>
								<tr><td>ID</td>
								<td>First Name</td>
								<td>Last Name</td>
								<td>Quantity</td>
								<td>Phone</td>
								<td>Address</td>
								<td>Actions</td></tr>
							</thead>
							<tbody>
								{this.context.state.array.map( r =>  
									<tr key={r.id}>
									   <td>{r.id}</td>
									   <td>{r.fName}</td>
									   <td>{r.lName}</td>
									   <td>{r.quantity}</td>
									   <td>{r.phone}</td>
									   <td>{r.address}</td>
									   <td>
										   <a onClick={() => {this.context.state.openEdit(r)}} > Edit </a> | 
										   <a onClick={() => this.context.state.delete(r.id)} > Delete </a> 
									   </td>
									</tr>  
								)}
							</tbody>
						</table>
					</div>	
				</div>
		)}	
		</Context.Consumer>	
	  )
	}
}

export default AdminList;