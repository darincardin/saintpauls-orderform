import React from "react";
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import { connect } from 'react-redux'

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
				{ReactDOM.createPortal(<ProgressBar show={showProgress} />, document.getElementById('progress-bar')) }
			</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return { showProgress: state.showProgress }
}

export default connect(mapStateToProps)(MyBody);
	