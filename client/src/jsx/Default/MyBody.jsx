import React, { Suspense } from 'react';
import ErrorBoundary from 'react-error-boundary';
import {BrowserRouter as Router, Switch, Redirect,Route, Link, withRouter} from "react-router-dom";
import {Header, Footer, ProgressBar, Error,  Background} from '/jsx/common';

import {StepBar} from 'react-widgets';


import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {Page1, Page2, Page3} from './Pages/';

import utils from '/js/utils.js'



var Main = withRouter( class Main extends React.Component { 
	
	ref = null;
	
	state = { loaded:false, step:1, className: '' }
		
	constructor(props){
		super(props)
		this.ref = React.createRef()	
		
		utils.thirdParty.then( () => {
			utils.ref = this.ref;
			this.setState( {loaded: true} );
		});		
				
		this.props.history.listen( loc => {	
			var step = this.map[loc.pathname];
			var className = step > this.state.step ? '':'reverse';
			this.setState({className, step})
		});	
	}	
	
	map = {	undefined:1, '/':1, '/page1':1, '/page2':2, '/page3':3 }

	loading = 	(<div>
					<br/><br/><br/>
					<div className="spinner">
						<img  src="preloader.gif" />
					</div>					
				</div>)	
				
	array = [
		{label:"Customer Info"},
		{label:"Order Info"},
		{label:"Done"}
	]
	
	render() {

		return (
			<main  ref={this.ref} >		
				
				<ErrorBoundary FallbackComponent={<Error />} >

					<div className="panel panel-default">
						<div className="panel-body">
							{this.state.loaded && 
							<div>
								<StepBar index={this.state.step} array={this.array} />
								

								<TransitionGroup className={'body ' + this.state.className}>
									<CSSTransition timeout={500} classNames="slide" key={this.props.location.key} >  
										<Suspense fallback={this.loading}>
											<Switch location={this.props.location}>
												<Route path="/page1"  component={Page1} />
												<Route path="/page2"  component={Page2} />
												<Route path="/page3"  component={Page3} />
												<Redirect from="/" to="/page1" />		
											</Switch>
										</Suspense>
									</CSSTransition>
								</TransitionGroup>		
							</div>
							}	
						</div>
					</div>			
				</ErrorBoundary >
			</main>		
		)
	}
})



/*






*/


class MyBody extends React.Component {

	render() {
		return (
			<div>
				<Router>
					<Background />		
					<Header title="Order Form" login={true} />
					<Main/>
					<Footer />
				 </Router>
			</div>
		);
	}
}


export default MyBody;
	