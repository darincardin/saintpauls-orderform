import React from 'react';
import ReactDOM from 'react-dom';


var TableLink = props =>{
	if( props.active )	return <a onClick={props.onClick}> {props.children} </a>
	else return <span class="disabled">{props.children}</span> ;
}

export default TableLink;

