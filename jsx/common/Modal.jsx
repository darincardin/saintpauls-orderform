import React from "react";
import Input from './input/Input.jsx';
import Number from './input/Number.jsx';
import Phone from './input/Phone.jsx';
import form from '../../js/form.js';


class Modal extends React.Component{
	
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
		this.state = {order: props.order};
	}
	
	componentWillReceiveProps(data){

		this.setState({order:data.order});
	}
	
	onClick(){
		
		
	}
	
    render() {
		return (
		<div className="modal fade" id="basicModal" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">X</button>
						<h4 className="modal-title" id="myModalLabel">Edit</h4>
					</div>
					<div className="modal-body">
					 {this.state.order.errors &&
						<table>
							<tbody>
							    <tr>
									<td><label className="control-label required">First Name</label></td>
									<td>  
									<Input form={this.state.order} name="fName" required /></td>
								</tr>

								
								<tr>
									<td><label className="control-label required">Last Name</label></td>
									<td><Input form={this.state.order} name="lName" required /></td>
								</tr>
								
								<tr>
									<td><label className="control-label required">Quantity</label></td>
									<td><Number form={this.props.order} name="quantity" required /></td>
								</tr>
								<tr>
									<td><label className="control-label required">Phone</label></td>
									<td><Phone form={this.props.order} name="phone" required /></td>
								</tr>				
								<tr>
									<td><label className="control-label">Address</label></td>
									<td><Input form={this.props.order} name="address" /></td>
								</tr>
							</tbody>
						</table>
					 }	
		
					
						
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
	
						<button type="button" className="btn btn-primary" onClick={()=>{this.props.onSubmit(this.state.order)} } >Save Changes</button>
				</div>
			</div>
		  </div>
		</div>
		);
	}
}
export default Modal;

/*
			
					
					    {this.state.order ? (
							 <Input form={this.state.order} name="fName" required />
						) : (
							<div>x</div>
					    )}
										
					

*/
