import React from 'react';


var TableLink = props =>{
	
	var html = props.active ?
		<a onClick={props.onClick}>{props.children}</a>:
		<span className="disabled">{props.children}</span>
	
	
	return <>&nbsp;{html}&nbsp;</>
	
}

export default TableLink;

