import React from 'react';


import './list.header.scss';

var Href = props => { 

	var className = (props.sort.by == props.name) ? props.sort.dir:"";
		
	var onClick = ()=>{

		var sort = {
			by:props.name, 
			dir:className=="ASC" ? "DESC" : "ASC"
		}
		
		props.update( undefined, sort )
	}
		
	return <a className={className} name={props.name} onClick={onClick}>{props.children}</a>
}


var ListHeader = props => {

	return (	
		<thead>
			<tr>
				{
					props.labels.map((label,i)=>
					(<td key={i}>
						<Href {...props} name={label.id} >{label.name}</Href>
					</td>))	
				}
				{props.hasActions && <td>Actions</td>}
			</tr>
		</thead>
	)
}

export default ListHeader;