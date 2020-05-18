import React from 'react';


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
					<td><Href {...props} name="id" >ID</Href></td>
					<td><Href {...props} name="firstname" >First Name</Href></td>
					<td><Href {...props} name="lastname" >Last Name</Href></td>
					<td><Href {...props} name="quantity" >Qty</Href></td>
					<td><Href {...props} name="phone" >Phone</Href></td>
					<td><Href {...props} name="address" >Address</Href></td>
					{	props.hasActions && 
						<td><a>Actions</a></td>
					}
				</tr>
			</thead>
		)
}

export default ListHeader;

