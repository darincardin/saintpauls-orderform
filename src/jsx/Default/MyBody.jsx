import React from "react";
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import {BrowserRouter as Router, Switch, Redirect,Route, Link, withRouter} from "react-router-dom";
import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';
import {Page1, Page2, Page3} from '/jsx/Default/Pages/';

import {Order} from '/js/orderAPI.js';

class MyBody extends React.Component {

	render() {
		return (
			<div>
				<Router>
					<Header login={true} />
					
					<main>		
						<Background />			
						<ErrorBoundary  FallbackComponent={<Error />}  >
							<Switch>
								<Route path="/page1"  component={Page1}/ >
								<Route path="/page2"  component={Page2}  />
								<Route path="/page3"  component={Page3} />
								<Redirect from="/" to="/page1" />	
							</Switch>
						</ErrorBoundary >
					</main>	
					<Footer />
				 </Router>
			</div>
		);
	}
}

export default MyBody;
	
	
	
	