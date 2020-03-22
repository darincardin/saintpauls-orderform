import React from "react";
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";

import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';
import {Page1, Page2, Page3} from '/jsx/Default/Pages/';

import {MyProvider} from '/js/context.js';


const newOrder = {fName:"", lName:"", quantity:"", phone:"", address:""}


	

class MyBody extends React.Component{
			
	state = { object: {...newOrder}, showProgress:false }
	
	storeObject = (o = {...newOrder} )=>{
		this.setState({object: o})
	}
	
	shared = {
		showOverlay : () => { this.setState({showProgress:true})},
		
		hideOverlay : () => { this.setState({showProgress:false})},
		
		errorHandler : () => {
			this.shared.hideOverlay(); 
			alert("An error occurred. Please try again later.")
		}			
	}
		
    render() {
		return (
		<MyProvider value={{...this.shared}} > 
			<Header />
			<Background />
			<main>			
				<ErrorBoundary  FallbackComponent={<Error />}  >
					<Router>
					  <div>
						<Switch>
						  <Route path="/page2" >
							<Page2 object={this.state.object}/>
						  </Route>
						  <Route path="/page3" >
							<Page3 object={this.state.object}  storeObject={this.storeObject} />
						  </Route>
						  <Route path="/">
							<Page1  object={this.state.object} storeObject={this.storeObject} />
						  </Route>
						</Switch>
					  </div>
					</Router>
				</ErrorBoundary >
			</main>	
			<Footer />
			{ReactDOM.createPortal(<ProgressBar show={this.state.showProgress} />, document.getElementById('progress-bar')) }
		</MyProvider> 
	
	  );
	}
}

export default MyBody;

/*
			  <LazyLoad height={200}>
					<img src="/assets/images/background2.jpg" /> 
			  </LazyLoad>
*/