import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import { connect } from 'react-redux'
import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';
import axios from 'axios';


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
			{ReactDOM.createPortal(<ProgressBar show={showProgress} />, document.getElementById('progress-bar')) }
		</>
		
	);	
}

const mapStateToProps = (state, ownProps) => {
	return { showProgress: state.showProgress }
}

const mapDispatchToProps = (dispatch) => ({
	progressbar:{
		show: () => { dispatch({type:"SHOW"})},
		hide: () => { dispatch({type:"HIDE"})}
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
