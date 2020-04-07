import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import { connect } from 'react-redux'
import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';

import { progressbar } from '/js/actions.js';

import List from '/jsx/Admin/List/List.jsx';

import OrderAPI from '/js/orderAPI.js';


var Admin = ({ showProgress, progressbar }) => {

	var logout = () =>{
		
		progressbar.show(); 

		OrderAPI.logout().then(res =>{ 	 
			window.location.href = '/login.html';
		})
	}	

	return (	
		<>
			<Header />
				<Background />
				<a href="#" onClick={logout} className="logout">Logout</a>  
				<main>	
					<ErrorBoundary  FallbackComponent={<Error />}  >
						<List />
					</ErrorBoundary>
				</main>	
			<Footer />
		</>
	);	
}

const mapStateToProps = (state, ownProps) => {
	
	return { showProgress: state.showProgress }
}

const mapDispatchToProps = (dispatch) => {

	return {
	    progressbar:progressbar(dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar(Admin));

