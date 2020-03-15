import React from "react";
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';

import MyBody from './MyBody.jsx';
import Header from './common/layout/Header.jsx';
import Footer from './common/layout/Footer.jsx';
import * as Admin from './pages/';
import ProgressBar from './common/widget/ProgressBar.jsx';

import OrderAPI from '../js/orderAPI.js';
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
			change: e=>{this.setState(state => state.form[ e.target.name] = e.target.value)},

			changeState: (name, value)=>{this.setState({[name]:value})},
			openEdit: this.openEdit,
			edit: this.edit,
			delete: this.delete,
			showModal: false
		}
	}	
	
	openEdit = (row) => {
		this.setState({form:  new Order(row) });
		this.setState({showModal:true});
	}

	edit = () => {
		this.showOverlay();
		var obj = this.state.form;

	    OrderAPI.update(obj).then(resp => { 
			this.state.array = this.state.array.map(i=>i.id==obj.id ? obj:i);
			this.hideOverlay(); 
			this.setState({showModal:false});
		})
		.catch(this.errorHandler)
	}

	logout = () =>{
		this.showOverlay(); 
		OrderAPI.logout().then(res =>window.location.href = '/login.html' )
		.catch(this.errorHandler)
	}

	delete = id=>{
		
		if(confirm(`Delete order ${id}?`) ) {
			this.showOverlay();
			
			OrderAPI.delete(id).then(res =>{ 
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

						<ErrorBoundary  FallbackComponent={()=><h1>An Error Occurred</h1>}  >
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

