import React from "react";
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";

import Header from '/jsx/common/layout/Header.jsx';
import Footer from '/jsx/common/layout/Footer.jsx';

import Page1 from '/jsx/pages/Page1.jsx';
import Page2 from '/jsx/pages/Page2.jsx';
import Page3 from '/jsx/pages/Page3.jsx';


import Error from '/jsx/common/widget/Error.jsx';
import ProgressBar from './common/widget/ProgressBar.jsx';

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