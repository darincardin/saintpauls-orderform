import React from 'react';
import {BrowserRouter as Router, Switch,  Route,Link} from "react-router-dom";

import Input from './Input.jsx';

class Number extends Input {
	
	constructor(props){
		super(props);
		this.html = <input type="number" className="form-control" name={props.name} defaultValue={props.form[props.name]}  onFocus={this.onWatch} onKeyUp={this.onWatch} onChange={this.onChange} />
	}
	
		render(){
		var name = this.props.name;
		var submitted = this.state.form.submitted;
		var errors = this.state.form.errors[name];
		
		return (
		<div ref={this.elem} 
		     className={`form-group has-feedback ${ submitted && (!errors ? "has-success" : "has-error") } `} name={`my-${name}`} >
		   
			<input type="number" className="form-control" name={this.props.name} value={this.state.form[this.props.name]}  onFocus={this.onWatch} onKeyUp={this.onWatch} onChange={this.onChange} />



			<span className="glyphicon glyphicon-ok form-control-feedback" ></span>
	        <span className="glyphicon glyphicon-remove form-control-feedback" ></span>
			<span id="inputSuccess4Status" className="sr-only">(success)</span>
		</div>
		)
	}
}

export default Number;
