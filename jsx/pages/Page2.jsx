import React from 'react';
import {BrowserRouter as Router, Switch,  Route,Link, withRouter} from "react-router-dom";
import form from '../../js/form.js';

class Page2 extends React.Component {
	
	constructor(props){
		super(props);
		this.state = { form: props.form };
		this.onSuccess = this.onSuccess.bind(this);
	}
	
	onSuccess(){
		this.props.history.push('/page3')
	}

	render(){
		return (
			<div className="page2" >
				<h2>Confirm Order </h2>

				<div className="panel panel-default form-horizontal">
					<div className="panel-body">

						<table >  
							<tbody>
								 <tr> 
									<td><label className='control-label' htmlFor='inputSuccess4'>First Name</label></td>
									<td>{this.state.form.fName}</td>
								 </tr>
								 <tr> 
									<td><label className='control-label ' htmlFor='inputSuccess4'>Last Name</label></td>
									<td>{this.state.form.lName}</td>
								 </tr>
								 <tr> 
									<td><label className='control-label ' htmlFor='inputSuccess4'>Quantity</label></td>
									<td>{this.state.form.quantity}</td>
								 </tr>
								 <tr> 
									<td><label className='control-label ' htmlFor='inputSuccess4'>Phone</label></td>
									<td>{this.state.form.phone}</td>
								 </tr>
								 <tr> 
									<td><label className='control-label ' htmlFor='inputSuccess4'>Address</label></td>
									<td>{this.state.form.address}</td>
								 </tr>
							 </tbody>
						</table>

						<hr/>

						<Link to='/'>
							<button  className="btn btn-default">Back</button>
						</Link>
						&nbsp;
						
						<button className="btn btn-primary" type='button' onClick={()=>{this.props.onSubmit(this.onSuccess)  }} >Confirm</button> 	  
					</div>
				</div>
			</div>
		)
	}
}
export default withRouter(Page2);