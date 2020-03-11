import React from "react";
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';

import MyBody from './MyBody.jsx';
import Header from './common/layout/Header.jsx';
import Footer from './common/layout/Footer.jsx';
import * as Admin from './pages/';
import ProgressBar from './common/widget/ProgressBar.jsx';


import Order from '../js/order.js';
import Context from '../js/context.js';

var _ = require('lodash');

class AdminBody extends MyBody{
	
	constructor(props){
		super(props);
		
		this.state = { 
			array: [],
			form: new Order(),
			clear: () =>{ this.setState( {form: new Order()  } ) },
			change: e=>{
				this.setState(state => state.form[ e.target.name] = e.target.value)
			},
			openEdit: this.openEdit,
			edit: this.edit,
			delete: this.delete	
		}
	}	
		
	componentDidMount = () =>{
		this.showOverlay();
		
	    fetch("/php/orders/list.php").then(res =>res.json()).then(
		res => { 
			this.hideOverlay(); 
			this.setState({array: res }); 
		})
		.catch(this.errorHandler)
	}
	
	openEdit = (row) => {
		this.setState({form:  new Order(row) });
		$('#basicModal').modal('toggle');		
	}

	edit = () => {
		this.showOverlay();
		var obj = this.state.form;

	    fetch("/php/orders/update.php", { method:'post', body:JSON.stringify(obj)} ).then(res =>res.json()).then(
		resp => { 
			this.state.array = this.state.array.map(i=>i.id==obj.id ? obj:i);
			this.hideOverlay(); 
			$('#basicModal').modal('toggle');
		})
		.catch(this.errorHandler)
	}

	logout = () =>{
		this.showOverlay(); 
		fetch(`/php/logout.php`).then(res => res.json())
		.then(res =>window.location.href = '/login.html' )
		.catch(this.errorHandler)
	}

	delete = id=>{
		
		if(confirm(`Delete order ${id}?`) ) {
			this.showOverlay();
			fetch(`/php/orders/delete.php?id=${id}`).then(res => res.json())
			.then(res =>{ 
			    _.remove(this.state.array, {id: id})
				this.hideOverlay(); 
			})
			.catch(this.errorHandler)
		}
	}

    render() {
		
		return (
		<Context.Provider value={{state: this.state}} > 
			<div>
				<Header />
					<a href="#" onClick={this.logout} className="logout">Logout</a>  
					<main>	
						<ErrorBoundary  FallbackComponent={()=>"Error"}  >
							<Admin.AdminList />
						</ErrorBoundary>
					</main>	
				<Footer />
				<Admin.AdminUpdate />
			</div>
			{ReactDOM.createPortal(<ProgressBar show={this.state.showProgress} />, document.getElementById('progress-bar')) }
		</Context.Provider> 
	    );
	}
}
export default (AdminBody);

