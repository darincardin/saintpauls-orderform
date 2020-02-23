import React from 'react';
import {BrowserRouter as Router, Switch,  Route,Link} from "react-router-dom";

import Input from './Input.jsx';

class Number extends Input {
	
	constructor(props){
		super(props);
	}
	
	validate(){
		
		var result = true;
		
		if(this.props.required)  result = this.state.form.$required(this.props.name);
		
		if(!result)  this.state.form.$phone(this.props.name);
	}
}

export default Number;
