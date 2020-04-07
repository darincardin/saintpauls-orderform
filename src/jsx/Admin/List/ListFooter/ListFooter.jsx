import React from 'react';
import ReactDOM from 'react-dom';
import TableLink from '../TableLink/TableLink.jsx';

var ListFooter = props =>{
	

	return (
		<div className="foot text-center">
			<TableLink onClick={()=>props.update(props.page-1)} active={props.page>0} >&lt; Prev</TableLink>
			<div className="pagenum">{props.page + 1}</div>
			<TableLink onClick={()=>props.update(props.page+1)} active={props.page<props.max-1} >Next &gt;</TableLink>
		</div>
	)
}
export default ListFooter;
