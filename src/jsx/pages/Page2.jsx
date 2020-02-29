import React from 'react';
import {BrowserRouter as Router, Switch,  Route,Link, withRouter} from "react-router-dom";
import form from '../../js/form.js';

import Context from '../../js/context.js';

class Page2 extends React.Component {
	static contextType = Context;

	onSuccess = () => {
		this.props.history.push('/page3')
	}

	render(){
		return (
			<Context.Consumer>
			{ context => (
				<div className="page2" >
					<h2>Confirm Order </h2>
					<div className="panel panel-default form-horizontal">
	
						<div className="panel-body">

							<table >  
								<tbody>
									 <tr> 
										<td><label className='control-label' htmlFor='inputSuccess4'>First Name</label></td>
										<td>{context.state.form.fName}</td>
									 </tr>
									 <tr> 
										<td><label className='control-label' htmlFor='inputSuccess4'>Last Name</label></td>
										<td>{context.state.form.lName}</td>
									 </tr>
									 <tr> 
										<td><label className='control-label' htmlFor='inputSuccess4'>Quantity</label></td>
										<td>{context.state.form.quantity}</td>
									 </tr>
									 <tr> 
										<td><label className='control-label' htmlFor='inputSuccess4'>Phone</label></td>
										<td>{context.state.form.phone}</td>
									 </tr>
									 <tr> 
										<td><label className='control-label' htmlFor='inputSuccess4'>Address</label></td>
										<td>{context.state.form.address}</td>
									 </tr>
								 </tbody>
							</table>

							<hr/>

							<Link to='/'>
								<button  className="btn btn-default">Back</button>
							</Link>
							&nbsp;
							
							<button className="btn btn-primary" type='button' onClick={ ()=>{ context.state.submit(this.onSuccess)}} >Confirm</button> 	  
						</div>
					</div>
				</div>
			)}	
			</Context.Consumer>	
		)
	}
}
export default withRouter(Page2);