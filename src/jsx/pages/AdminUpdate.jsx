import React from 'react';

import * as Input from '../common/input';
import Modal from '../common/widget/Modal.jsx';
import Context from '../../js/context.js';

class AdminUpdate extends React.Component {
	static contextType = Context;
	
	



	render(){
		
	  return (
		<Context.Consumer>
		{ context => (

				<Modal   open={this.context.state.showModal}  onSubmit={this.context.state.edit}>
					<div>
						<table>
							<tbody>
								<tr>
									<td><label className="control-label required">First Name</label></td>
									<td><Input.Text name="fName" required /></td>
								</tr>	
								<tr>
									<td><label className="control-label required">Last Name</label></td>
									<td><Input.Text name="lName" required /></td>
								</tr>	
								<tr>
									<td><label className="control-label required">Quantity</label></td>
									<td><Input.Number name="quantity" required /></td>
								</tr>
								<tr>
									<td><label className="control-label required">Phone</label></td>
									<td><Input.Phone name="phone" required /></td>
								</tr>				
								<tr>
									<td><label className="control-label">Address</label></td>
									<td><Input.Text name="address" /></td>
								</tr>
							</tbody>
						</table>	
					</div>
				</Modal>
			
		
		)}	
		</Context.Consumer>	
	  )
	}
}

export default AdminUpdate;