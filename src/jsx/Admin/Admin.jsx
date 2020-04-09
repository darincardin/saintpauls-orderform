import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import { connect } from 'react-redux'
import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';

import List from '/jsx/Admin/List/List.jsx';
import OrderAPI from '/js/orderAPI.js';


class Admin extends React.Component {

	logout = () =>{

		this.props.progress.show();

		OrderAPI.logout().then(res =>{ 	 
			window.location.href = '/login.html';
		})
		
	}	

	render = () => {
		return (	
			<>
				<Header />
					<Background />
					<a href="#" onClick={this.logout} className="logout">Logout</a>  
					<main>	
						<ErrorBoundary  FallbackComponent={<Error />}  >
							<div className="order-window"> 
								<List />
							</div>
						</ErrorBoundary>
					</main>	
				<Footer />
			</>
		);	
	}
}

export default ProgressBar(Admin);

