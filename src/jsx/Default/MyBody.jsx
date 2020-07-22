import React from "react";
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import {BrowserRouter as Router, Switch, Redirect,Route, Link, withRouter} from "react-router-dom";
import {Header, Footer, ProgressBar, Error,StepBar, Background} from '/jsx/common';
import {Page1, Page2, Page3} from '/jsx/Default/Pages/';

import {Order} from '/js/orderAPI.js';

var Main = withRouter( class Main extends React.Component { 
	
	state = { step:0 }
	
	
	map = {
		undefined:0,
		'/page1':0,
		'/page2':1,
		'/page3':2
	}
	
	
	constructor(props){
		super(props)
		
		this.props.history.listen( loc => {
			var result = this.map[loc.pathname];		
			this.setState({step: result})
		});	
	}
	
	
	render() {
		return (
			<main>		
				<Background />			
				<ErrorBoundary FallbackComponent={<Error />} >
					<br />
					<div className="panel panel-default">
							<div className="panel-body">
											
								<StepBar step={this.state.step} />
								<br /><br />
								<Switch >		
									<Route path="/page1"  component={Page1} />
									<Route path="/page2"  component={Page2} />
									<Route path="/page3"  component={Page3} />
									<Redirect from="/" to="/page1" />						
								</Switch>
							</div>
					</div>	
				</ErrorBoundary >
			</main>		
		)
	}
	
})



class MyBody extends React.Component {

	render() {
		return (
			<div>
				<Router>
					<Header title="Order Form" login={true} />
					<Main/>
					<Footer />
				 </Router>
			</div>
		);
	}
}


export default MyBody;
	