import React from "react";
import {BrowserRouter as Router, Switch, withRouter, Route,Link} from "react-router-dom";

import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';

import MyBody from './MyBody.jsx';
import Header from './common/Header.jsx';
import Footer from './common/Footer.jsx';
import ProgressBar from './common/ProgressBar.jsx';
import Modal from './common/Modal.jsx';


import form from '../js/form.js';
import Order from '../js/order.js';

class AdminBody extends MyBody{
	
	constructor(props){
		super(props);
		this.openEdit = this.openEdit.bind(this);

		this.edit = this.edit.bind(this);
		this.getOrders = this.getOrders.bind(this);
		
		this.state.selected = form(new Order());
		this.state.array = []
		
		this.getOrders();
		
	
			
	}
		
	getOrders(){
	
	    fetch("data/list.json").then(res => res.json()).then(
		result => {
			var r = JSON.parse(result);
			this.setState({array: r });
		},
		error => {alert(error)})
	}
	
	openEdit(order){
		this.setState({selected: form(order)});
		$('#basicModal').modal('toggle');		
	}

	edit(order) {
		this.showOverlay();

	    fetch("data/edit.json", order).then(
		result => { 
		
			var i = this.state.array.findIndex( i => i.id == order.id );
		    this.state.array.splice(i, 1, order);
		
			this.hideOverlay(); 
			$('#basicModal').modal('toggle');
		},
		error => alert("An error occurred. Please try again later."))
	}

	delete(id){
		var result = confirm("Press a button!"); 
		
		if(result) {
			this.showOverlay();
			fetch("data/delete.json?" + id).then(res => res.json()).then(
			result =>{ 	
				var i = this.state.array.findIndex(i => i.id == id );
				this.state.array.splice(i, 1);
				this.hideOverlay(); 
			},
			error => alert("An error occurred. Please try again later."))				
		}
	}
	
    render() {
	
		return (
		<div>
			<Header />
			<main >	
				<div className="order-window">
					<div>
						<table className="mainGrid">
							<thead>
								<tr><td>First Name</td>
								<td>Last Name</td>
								<td>Quantity</td>
								<td>Phone</td>
								<td>Address</td>
								<td>Actions</td></tr>
							</thead>
							<tbody>
								{this.state.array.map( r =>  
									<tr key={r.id}>
									   <td>{r.fName}</td>
									   <td>{r.lName}</td>
									   <td>{r.quantity}</td>
									   <td>{r.phone}</td>
									   <td>{r.address}</td>
									   <td>
										   <a onClick={() => this.openEdit(r)}> Edit </a> | 
										   <a onClick={() =>  this.delete(r.id)}> Delete </a> 
									   </td>
									</tr>  
								)}
							</tbody>
						</table>
					</div>	
				</div>
			</main>	
			<Footer />
			<Modal order={this.state.selected} onSubmit={this.edit} />
			<ProgressBar show={this.state.showProgress} />
		</div>
	  );
	}


}

export default (AdminBody);