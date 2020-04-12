import React from 'react';


import Text from './Text.jsx';
import Number from './Number.jsx';
import Phone from './Phone.jsx';

const newOrder = {id:"", fName:"", lName:"", quantity:"", phone:"", address:""}


class Form extends React.Component {

	state =  { 
	    object:  {...this.props.object} ,
		submitted: false,
		errors:{}	
	}
	
	componentWillReceiveProps(props) {
		this.setState({object:props.object, submitted:false});
	}

	onSubmit = (e)=> {
	
		e.preventDefault()
		this.setState({submitted:true});
	
		if(Object.keys(this.state.errors).length==0) 
			this.props.onSuccess(this.state.object)
	}


	change = e=>{
		var {name, value} = e.target;
		this.setState(state=>state.object[name] = value )
	}
	
	render() {
		
		return (
			<form onSubmit={this.onSubmit}>
				<table>
					{this.state.object &&
						<tbody>
							{this.props.showID && 
							<tr>
									<td><label className="control-label label-id" >ID</label></td>
									<td>{this.state.object.id}</td>
							</tr>
							}					
							<tr>
								<td><label className="control-label required">First Name</label></td>
								<td><Text name="fName" required change={this.change} state={this.state}  /></td>
							</tr>
							<tr>
								<td><label className="control-label required">Last Name</label></td>
								<td><Text name="lName" required change={this.change} state={this.state}  /></td>
							</tr>
							<tr>
								<td><label className="control-label required">Quantity</label></td>
								<td><Number name="quantity" required change={this.change} state={this.state}  /></td>
							</tr>
							<tr>
								<td><label className="control-label required">Phone</label></td>
								<td><Phone name="phone" required change={this.change} state={this.state} /></td>
							</tr>				
							<tr>
								<td><label className="control-label">Address</label></td>
								<td><Text name="address" change={this.change} state={this.state} /></td>
							</tr>
						</tbody>
					}
				</table>
				<div class="text-right">{this.props.children}</div>
			</form>	
		)
	}
}
export default Form;
