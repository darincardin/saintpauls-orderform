import React from 'react';

var ListBody = props =>{
	
	return (
		<tbody>
			{props.data  && props.data.map( r =>  
				<tr key={r.id}>
					<td>{r.id}</td>
					<td>{r.fName}</td>
					<td>{r.lName}</td>
					<td>{r.quantity}</td>
					<td>{r.phone}</td>
					<td>{r.address}</td>
					<td>
						<a onClick={() => props.edit(r) } > Edit </a> | 
						<a onClick={(e) => props.remove(r.id, e)} > Delete </a> 
					</td>
				</tr>  
			)}
		</tbody>
	)
}

export default ListBody;
