import React from 'react';
import Text from './Text.jsx';

class Number extends React.Component {
	
	render(){ return <Text type="number" name={this.props.name} required /> }
}

export default Number;
