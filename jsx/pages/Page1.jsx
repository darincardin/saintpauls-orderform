import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import Page2 from './Page2.jsx';
import Input from '../common/input/Input.jsx';
import Number from '../common/input/Number.jsx';
import Phone from '../common/input/Phone.jsx';
import form from '../../js/form.js';

class Page1 extends React.Component {
	
	constructor(props) {
		super(props);
	
		this.state = { form: props.form };
		this.onNext = this.onNext.bind(this);	
	
	}

	onNext(event) {		
	
		;
		var form = this.state.form;
		form.submitted = true;
		this.setState({form: form})

		if(form.isValid()) this.props.history.push('/page2');
	}
	
	render(){
		return (
		
		<div className="page1">
		<h2> Order Form </h2>
		<form>
		    <div className="panel panel-default">
			<div className="panel-body">
			<table>
				<tbody>
				<tr>
					<td><label className="control-label required">First Name</label></td>
					<td><Input form={this.state.form} name="fName" required /></td>
				</tr>
				
				<tr>
					<td><label className="control-label required">Last Name</label></td>
					<td><Input form={this.state.form} name="lName" required /></td>
				</tr>
				
				<tr>
					<td><label className="control-label required">Quantity</label></td>
					<td><Number form={this.state.form} name="quantity" required /></td>
				</tr>
				<tr>
					<td><label className="control-label required">Phone</label></td>
					<td><Phone form={this.state.form} name="phone" required /></td>
				</tr>				
				<tr>
					<td><label className="control-label">Address</label></td>
					<td><Input form={this.state.form} name="address" /></td>
				</tr>
				</tbody>
			</table>
			
		    <button type="button" className="btn btn-primary" onClick={this.onNext} >Submit</button> 	

			</div>
			</div>
		</form>
		</div>
		)	
	}
}

export default withRouter(Page1) ;

		//var state = this.state;
		//state.form.submitted = true;
		//this.setState(state);
		
		//if(!obj.fName || !obj.lName || !obj.quantity) return ;
		//if(!Math.isNumber(obj.quantity)) return ;
		
		//this.props.setObject(this.state.object);