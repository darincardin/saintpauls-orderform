import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import Page2 from './Page2.jsx';
import Input from '../common/input/Input.jsx';
import Number from '../common/input/Number.jsx';
import Phone from '../common/input/Phone.jsx';
import form from '../../js/form.js';

import Context from '../../js/context.js';

class Page1 extends React.Component {
	static contextType = Context;

	onNext = () => {		
		this.context.state.change('$submitted', true)
		if(this.context.state.form.$isValid()) this.props.history.push('/page2');
	}
	
	render(){
		return (
		<Context.Consumer>
		{ context => (	
			<div className="page1">
				<div>
				<h2> Order Form </h2>
				<form>
					<div className="panel panel-default">
						<div className="panel-body">
							<table>
								<tbody>
								<tr>
									<td><label className="control-label required">First Name</label></td>
									<td><Input name="fName" required /></td>
								</tr>
								<tr>
									<td><label className="control-label required">Last Name</label></td>
									<td><Input name="lName" required /></td>
								</tr>
								<tr>
									<td><label className="control-label required">Quantity</label></td>
									<td><Number name="quantity" required /></td>
								</tr>
								<tr>
									<td><label className="control-label required">Phone</label></td>
									<td><Phone name="phone" required /></td>
								</tr>				
								<tr>
									<td><label className="control-label">Address</label></td>
									<td><Input name="address" /></td>
								</tr>
								</tbody>
							</table>
							<button type="button" className="btn btn-primary" onClick={this.onNext} >Submit</button> 	
						</div>
					</div>
				</form>
				</div>
			</div>
		)}	
		</Context.Consumer>	
		)	
	}
}

export default withRouter(Page1) ;
