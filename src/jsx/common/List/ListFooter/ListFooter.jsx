import React from 'react';
import TableLink from '../TableLink/TableLink.jsx';

import './list.footer.scss';			
			
			
var ListFooter = props =>{
	
	var show = {		
		get next(){
			return props.listState.page < (Math.ceil(props.listState.total / props.listState.getPageSize()) -1);
		},
		
		get prev(){
			return props.listState.page > 0;
		}			
	}
	
	function getPageLinks(){
						
		var pageLinks = [];
		
		for(var i = 0; i < props.listState.getMaxPage(); i++) pageLinks.push(i);		
		
		return pageLinks;
	}

	return (
		<div className="foot text-center">
			<TableLink onClick={()=>props.update({page:props.listState.page-1})} active={show.prev} >&lt; Prev</TableLink>
				&nbsp;
				{getPageLinks().map( (obj,i) =>  
					<span key={i}>					
						{ props.listState.page==i ? <b>{i+1}</b> : <a onClick={()=>props.update({page:i})}>{i+1}</a> }			
					</span>	
				)}
				&nbsp;
			<TableLink onClick={()=>props.update({page:props.listState.page+1})} active={show.next} >Next &gt;</TableLink>
		</div>
	)
}
export default ListFooter;
