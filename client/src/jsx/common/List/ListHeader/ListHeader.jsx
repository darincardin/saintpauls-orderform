import React from 'react';

import './list.header.scss';

var Href = props => { 

	var onClick = () => {
		var sort = props.sort.next(props.name);
		props.update(  {sort} );
	}
		
	return <a className={props.sort.isActive(props.name)} name={props.name} onClick={onClick}>{props.children}</a>
}

var ListHeader = props => {

	return (	
		<thead>
			<tr>
				{props.labels.map((label,i)=>
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