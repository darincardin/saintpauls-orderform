import React from 'react';
import Text from './Text.jsx';

class Number extends Text {
	
	constructor(props){
		super(props);
	}
	
	validate = () =>{
		var result = true;
		
		if(this.props.required)  result = this.context.state.form.$required(this.props.name);
		
		if(!result)  this.context.state.form.$phone(this.props.name);
	}
}

export default Number;
