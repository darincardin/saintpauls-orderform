import React from 'react';
import Text from './Text.jsx';
import Context from '../../../js/context.js';

class Number extends React.Component {
	static contextType = Context;
	

	validate = () =>{
		return this.context.state.form.$phone(this.props.name);
	}
	
	render(){ 
		return ( <Text type="text" name={this.props.name} required validate={this.validate} /> );
	}
}

export default Number;
