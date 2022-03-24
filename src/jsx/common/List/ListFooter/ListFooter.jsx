import React from 'react';
import TableLink from '../TableLink/TableLink.jsx';

			
var ListFooter = props =>{
	
	var totalPages = [];
	debugger;
	var maxPage = Math.ceil(props.listState.total / props.listState.pageSize);
	
	for(var i = 0; i < maxPage;i++) totalPages.push(i);;


	return (
		<div className="foot text-center">
			<TableLink onClick={()=>props.update(props.listState.page-1)} active={props.listState.page>0} >&lt; Prev</TableLink>
				&nbsp;
				{totalPages.map( (obj,i) =>  
					<span key={i}>
						&nbsp;
						{ props.listState.page==i ? <b>{i+1}</b> : <a onClick={()=>props.update(i)}>{i+1}</a> }	
						&nbsp;
					</span>	
				)}
				&nbsp;
			<TableLink onClick={()=>props.update(props.page+1)} active={props.listState.page<maxPage-1} >Next &gt;</TableLink>
		</div>
	)
}
export default ListFooter;
