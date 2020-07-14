import React from "react";
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import {BrowserRouter as Router, Switch, Redirect,Route, Link, withRouter} from "react-router-dom";


import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';
import {Page1, Page2, Page3} from '/jsx/Default/Pages/';
import {Order} from '/js/orderAPI.js';



var obj =  {fName:"Becky", lName:"Lee", quantity:"2", phone:"222-333-4444"}




class MyBody extends React.Component {

	state = {order: new Order()}
	
	update = obj =>{
		this.setState({order: obj})	
	}
	
	render() {
		return (
			
			<div>
				<Router>
					<Header login={true} />
					
					<main>		
						<Background />			
						<ErrorBoundary  FallbackComponent={<Error />}  >

									
									  
										<Switch >
											<Route path="/page1"  >
												<Page1 order={this.state.order} update={this.update}/>
											</Route>
											
											<Route path="/page2"  >
												<Page2 order={this.state.order} update={this.update}/>
											</Route>
											
											<Route path="/page3"  >
												<Page3 order={this.state.order} update={this.update} />
											</Route>
											
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


export default (MyBody);
	
	
	
	