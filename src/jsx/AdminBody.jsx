import React from "react";
import ErrorBoundary from 'react-error-boundary';

import MyBody from './MyBody.jsx';
import Header from './common/layout/Header.jsx';
import Footer from './common/layout/Footer.jsx';
import * as Admin from './pages/';
import ProgressBar from './common/widget/ProgressBar.jsx';

import form from '../js/form.js';
import Order from '../js/order.js';
import Context from '../js/context.js';






class AdminBody extends MyBody{
	
	constructor(props){
		super(props);
		
		this.state = { 
			array: [],
			form: form(new Order()),
			clear: () =>{ this.setState( {form:  form(new Order())  } ) },
			change: (arg1, arg2)=>{
				
				var name = (arg1 instanceof Event) ? arg1.target.name  : arg1;
				var val =  (arg1 instanceof Event) ? arg1.target.value : arg2;

				this.state.form[name] =  val;
				this.setState({form : this.state.form});
			},
	
			submit: onSuccess =>{
				this.showOverlay();

				fetch('/php/orders/create.php', { method: 'post', body: JSON.stringify(this.state.form) })
				.then(res => res.json()).then(
				success => { 
					this.hideOverlay(); 
					this.state.form.id = success;
					onSuccess();
				},
				error => {
					alert("An error occurred. Please try again later.")
					this.hideOverlay(); 
				});	
			},
			openEdit: this.openEdit,
			edit: this.edit,
			delete: this.delete	
		}
	}
		
		
	errorMsg = function(){  return <h2 className="text-center" >An error occurred. </h2> }	
		
	componentDidMount = () =>{
	    fetch("/php/orders/list.php").then(res =>res.json()).then(
		success => { this.setState({array: success }); },
		error => {alert(error) })
	}
	
	openEdit = (row) => {
		this.setState({form:  form(row)});
		$('#basicModal').modal('toggle');		
	}

	edit = () => {
		this.showOverlay();

	    fetch("/php/orders/update.php", { method: 'post', body: JSON.stringify(this.state.form)} ).then(
		result => { 
			var i = this.state.array.findIndex( i => i.id == this.state.form.id );
		    this.state.array.splice(i, 1, this.state.form);
		
			this.hideOverlay(); 
			$('#basicModal').modal('toggle');
		},
		error => alert("An error occurred. Please try again later."))
	}

	logout = () =>{
		this.showOverlay(); 
		fetch(`/php/logout.php`).then(res => res.json()).then(
		result =>{ 	
			window.location.href = '/login.html';
		},
		error => {
			this.hideOverlay(); 
			alert("An error occurred. Please try again later.")
		})
	}


	delete = (id) =>{
		
		if(confirm(`Delete order ${id}?`) ) {
			this.showOverlay();
			fetch(`/php/orders/delete.php?id=${id}`).then(res => res.json()).then(
			success =>{ 	
				var i = this.state.array.findIndex(i => i.id == id );
				this.state.array.splice(i, 1);
				this.hideOverlay(); 
			},
			error => {
				this.hideOverlay(); 
				alert("An error occurred. Please try again later.")
			})
		}
	}
	

    render() {
		
		return (
		<Context.Provider value={{state: this.state}} > 
			<div>
				<Header />
					<a href="#" onClick={this.logout} className="logout">Logout</a>  
					<main>	
						<ErrorBoundary  FallbackComponent={this.errorMsg}  >
							<Admin.AdminList />
						</ErrorBoundary>
					</main>	
				<Footer />
				<Admin.AdminUpdate />
				<ProgressBar show={this.state.showProgress} />
			</div>
		</Context.Provider> 
	  );
	}


}

export default (AdminBody);

