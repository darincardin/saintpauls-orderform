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
						{React.Children.map(props.children, child => {
							if(child.props) return React.cloneElement(child, {onClick:()=>{ props.onClick(r, child.props.action)} }, child.props.children);
							else return React.cloneElement(<span/>, {}, child);
						})}
					</td>	
				</tr>  
			)}
		</tbody>
	)
}

export default ListBody;
