import React from 'react';

import Context from '../../js/context.js';
import form from '../../js/form.js';



var TableLink = props =>{
	if( props.page > props.min || props.page < (props.max-1) )	return <a onClick={props.onClick}> {props.children} </a>
	return <span class="disabled">{props.children}</span> ;
}


class AdminList extends React.Component {
	static contextType = Context;
	cancel = null;
	
	constructor(props){
		super(props)
		
		window.addEventListener('resize', this.handleResize)
	}
	
	handleResize = () => {

		if(this.cancel) clearTimeout(this.cancel);
		
		this.cancel = setTimeout(()=>{
			this.context.state.getOrders(this.page);
		}, 300);
	}
	
	
	page = 0;
	
	next = ()=>{this.context.state.getOrders(++this.page);}

	prev = ()=>{this.context.state.getOrders(--this.page);}

	render(){
	  return (
		<Context.Consumer>
		{ context => (
				<div className="order-window">
				
					<div>
						<table className="mainGrid">
							<thead>
								<tr><td>ID</td>
								<td>First Name</td>
								<td>Last Name</td>
								<td>Quantity</td>
								<td>Phone</td>
								<td>Address</td>
								<td>Actions</td></tr>
							</thead>
							<tbody>
								{this.context.state.array.map( r =>  
									<tr key={r.id}>
									   <td>{r.id}</td>
									   <td>{r.fName}</td>
									   <td>{r.lName}</td>
									   <td>{r.quantity}</td>
									   <td>{r.phone}</td>
									   <td>{r.address}</td>
									   <td>
										   <a onClick={() => this.context.state.openEdit(r) } > Edit </a> | 
										   <a onClick={() => this.context.state.delete(r.id)} > Delete </a> 
									   </td>
									</tr>  
								)}
							</tbody>
						</table>
						
						<div className="foot text-center">
							<TableLink onClick={this.prev} page={this.page} min={0}> &lt; Prev </TableLink>

							&nbsp;&nbsp;&nbsp;
							
							<TableLink onClick={this.next} page={this.page} max={this.context.state.total}> Next  &gt; </TableLink>
							
							
			
						</div>
			
						
					</div>	
				</div>
		)}	
		</Context.Consumer>	
	  )
	}
}
//   {this.page < this.context.state.total ? : <span /> }     <Prev page={this.page}/>
					
export default AdminList;


