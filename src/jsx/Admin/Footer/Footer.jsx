import React from 'react';
import ReactDOM from 'react-dom';
import TableLink from '../TableLink/TableLink.jsx';

var Footer = props =>{
	
	
	return (
		<div className="foot text-center">
			<TableLink onClick={()=>props.update(props.page-1)} active={props.page>0} >&lt; Prev</TableLink>
			&nbsp;&nbsp;&nbsp;
			<TableLink onClick={()=>props.update(props.page+1)} active={props.page<props.max-1} >Next &gt;</TableLink>
		</div>
	
	)
}

export default Footer;
