import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import { connect } from 'react-redux'
import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';


import List from '/jsx/Admin/List/List.jsx';

import OrderAPI from '/js/orderAPI.js';


class Admin extends React.Component {

	logout = () =>{
		debugger;
		//progressbar.show(); 

		this.props.progress.show();
			

/*
		OrderAPI.logout().then(res =>{ 	 
			window.location.href = '/login.html';
		})
		*/
	}	

	render = () => {
		return (	
			<>
				<Header />
					<Background />
					<a href="#" onClick={this.logout} className="logout">Logout</a>  
					<main>	
						<ErrorBoundary  FallbackComponent={<Error />}  >
							<List />
						</ErrorBoundary>
					</main>	
				<Footer />
			</>
		);	
	}
}

/*
const mapStateToProps = (state, ownProps) => {
	debugger;
	return { showProgress: state.showProgress }
}

const mapDispatchToProps = (dispatch) => {

	return {

	}
}
*/
export default ProgressBar(Admin);

