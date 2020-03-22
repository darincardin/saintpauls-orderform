import React from "react";
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';

import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';

import List from '/jsx/Admin/List/List.jsx';

import {MyProvider} from '/js/context.js';

import OrderAPI from '/js/orderAPI.js';

class Admin extends React.Component{
	
	state = {array: [], showProgress:false}	
	
	shared = {
		showOverlay : () => { this.setState({showProgress:true})},
		
		hideOverlay : () => { this.setState({showProgress:false})},
		
		errorHandler : () => {
			this.shared.hideOverlay(); 
			alert("An error occurred. Please try again later.")
		}			
	}
	
	logout = () =>{
		this.shared.showOverlay(); 

		OrderAPI.logout().then(res =>{ 	
			window.location.href = '/login.html';
		})
		.catch(()=>{
			this.shared.hideOverlay(); 
			alert("An error occurred. Please try again later.")
		});
	}	
	
    render() {
		return (	
			<MyProvider value={{...this.shared}} > 
				<Header />
					<Background />
					<a href="#" onClick={this.logout} className="logout">Logout</a>  
						<main>	
							<ErrorBoundary  FallbackComponent={<Error />}  >
								<List />
							</ErrorBoundary>
						</main>	
				<Footer />
				{ReactDOM.createPortal(<ProgressBar show={this.state.showProgress} />, document.getElementById('progress-bar')) }
			</MyProvider> 
	    );
	}
}
export default Admin;