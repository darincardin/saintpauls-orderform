import React from 'react';
import ReactDOM from 'react-dom';

import Footer from '/jsx/pages/Admin/Footer/Footer.jsx';
import Update from '/jsx/pages/Admin/Update/Update.jsx';

import Context from '/js/context.js';
import OrderAPI from '/js/orderAPI.js';

class List extends React.Component {
    static contextType = Context;
	
	cancel = null;
	state = { total:0, page:0 , data:[], showEdit: false, loading:false, selected: {}}

	componentDidMount = () =>{
		window.addEventListener('resize', this.handleResize)
		this.getOrders(0);
	}

	getOrders = (page, onSuccess) => {
		
		var amount =  Math.floor((window.innerHeight - 215) / 43);
		this.setState({loading:true})
	    OrderAPI.list(amount, page).then(res => { 
			var {total, data} = res;
			if(page > total  ) page = total;
			this.setState({ page, total, data, loading:false})
			if(onSuccess) onSuccess();
		})
		.catch(this.context.errorHandler)
	}

	orderOpen = (row) => {
		this.setState({selected: row, showEdit:true});
	}
	
	orderClose = obj =>{
		if(obj.id) {
			this.context.showOverlay()
		    OrderAPI.update(obj).then(res => { 
				this.state.data = this.state.data.map(i=>i.id==obj.id ? obj:i);
				this.context.hideOverlay()
				this.setState(this.state);
			})
			.catch(this.context.errorHandler)	
		}

		this.setState({ showEdit:false});
	}

	orderDelete = id=>{
		
		if(confirm(`Delete order ${id}?`) ) {
			this.context.showOverlay()
			
			OrderAPI.delete(id).then(res =>{ this.getOrders(this.state.page, this.context.hideOverlay())})
			.catch(this.context.errorHandler)
		}
	}

	handleResize = () => {
		if(this.cancel) clearTimeout(this.cancel);
		this.cancel = setTimeout(()=>{ this.getOrders(this.state.page) }, 300);
	}
	
	render(){
	  return (
				<div className="order-window">
		
					{this.state.loading && <div className="table-loader"></div>	}
	
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
							{ this.state.data.map( r =>  
								<tr key={r.id}>
									<td>{r.id}</td>
									<td>{r.fName}</td>
									<td>{r.lName}</td>
									<td>{r.quantity}</td>
									<td>{r.phone}</td>
									<td>{r.address}</td>
									<td>
										<a onClick={() => this.orderOpen(r) } > Edit </a> | 
										<a onClick={() => this.orderDelete(r.id)} > Delete </a> 
									</td>
								</tr>  
							)}
						</tbody>
					</table>


					<Footer update={this.getOrders} page={this.state.page} max={this.state.total} />

						
					<Update show={this.state.showEdit} object={this.state.selected} callback={this.orderClose} />						
				
				</div>
	  )
	}
}			
export default List;