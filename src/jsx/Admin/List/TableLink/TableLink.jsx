import React from 'react';
import ReactDOM from 'react-dom';


var TableLink = props =>{
	
	var html = props.active ?
		<a onClick={props.onClick}>{props.children}</a>:
		<span class="disabled">{props.children}</span>
	
	
	return <>&nbsp;{html}&nbsp;</>
	
}

export default TableLink;

