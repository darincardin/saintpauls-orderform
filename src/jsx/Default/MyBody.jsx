import React from "react";
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";


import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';
import {Page1, Page2, Page3} from '/jsx/Default/Pages/';


var MyBody = ({ showProgress}) => {

	return (
		
			<div>
				<Header />
				<Background />
				<main>			
					<ErrorBoundary  FallbackComponent={<Error />}  >
						<Router>
						  <div>
							<Switch>
							  <Route path="/page2" >
								<Page2 />
							  </Route>
							  <Route path="/page3" >
								<Page3 />
							  </Route>
							  <Route path="/">
								<Page1 />
							  </Route>
							</Switch>
						  </div>
						</Router>
					</ErrorBoundary >
				</main>	
				<Footer />
			</div>
	);
}


export default (MyBody);
	