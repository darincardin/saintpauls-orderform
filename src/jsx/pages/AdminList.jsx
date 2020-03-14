import React from 'react';
import Context from '../../js/context.js';

var TableLink = props =>{
	if( props.page > props.min || props.page < (props.max-1) )	return <a onClick={props.onClick}> {props.children} </a>
	return <span class="disabled">{props.children}</span> ;
}


class AdminList extends React.Component {
	static contextType = Context;
	cancel = null;
	state = { array:[], totalPages:0, page:0 }

	componentDidMount = () =>{
		window.addEventListener('resize', this.handleResize)
		this.getOrders(0);
	}

	getOrders = page => {
		
		var amount =  Math.floor((window.innerHeight - 215) / 43);
		
	    fetch(`/php/orders/list.php?amount=${amount}&page=${page}`).then(res =>res.json()).then(
		res => { 
			if(page > res.totalPages  ) page = res.totalPages;
			
			this.setState({page: page, totalPages: res.totalPages, array: res.data })
		})
		.catch(this.errorHandler)	
		
	}

	handleResize = () => {
		if(this.cancel) clearTimeout(this.cancel);
		
		this.cancel = setTimeout(()=>{ this.getOrders(this.state.page) }, 300);
	}
	
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
								{this.state.array.map( r =>  
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
							<TableLink onClick={()=>{this.getOrders(this.state.page-1)}} page={this.state.page} min={0}>&lt; Prev</TableLink>
							&nbsp;&nbsp;&nbsp;
							<TableLink onClick={()=>{this.getOrders(this.state.page+1)}} page={this.state.page} max={this.state.totalPages}>Next  &gt;</TableLink>
						</div>
					</div>	
				</div>
		)}	
		</Context.Consumer>	
	  )
	}
}			
export default AdminList;
