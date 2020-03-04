import React from 'react';
import Text from './Text.jsx';

class Number extends Text {
	
	constructor(props){
		super(props);
	}
	
	validate = () =>{
		return this.context.state.form.$phone(this.props.name);
	}
	
	render(){ 
		return ( <Text type="text" name={this.props.name} required validate={this.validate} /> );
	}
}

export default Number;
