import React from 'react';

var ListBody = props =>{

	return (	
		<tbody>
			{props.data  && props.data.map( (obj,i) =>  
				<tr key={i}>
				{
					props.labels.map( (label,j) =>  (
						<td key={j}>{ obj[label.id]} </td>
					))
				}
				
				{React.Children &&
					<td>
						{React.Children.map(props.children, child => {
							if(child.props){
								if(child.props.onClick) return React.cloneElement(child, {onClick:()=>{ 
									props.onClick(obj, child.props.onClick)
								}}, child.props.children);
								else return  React.cloneElement(child);
							}
							else return React.cloneElement(<span/>, {}, child);
						})}
					</td>	
				}

				</tr>  
			)}
		</tbody>
	)
}

export default ListBody;

