import React from "react";
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import {BrowserRouter as Router, Switch, Redirect,Route, Link, withRouter} from "react-router-dom";
import {Header, Footer, ProgressBar, Error,  Background} from '/jsx/common';
import {Page1, Page2, Page3} from '/jsx/Default/Pages';

import StepBar from 'stepbar';

import {Order} from '/js/order';


import { AnimateOnChange } from 'react-animation'


import { TransitionGroup, CSSTransition } from 'react-transition-group'

var Main = withRouter( class Main extends React.Component { 
	
	state = { step:0, className: '' }
		
	map = {
		undefined:0,
		'/page1':0,
		'/page2':1,
		'/page3':2
	}
	
	array = [
		{label:"Customer Info"},
		{label:"Order Info"},
		{label:"Done"}
	]
	
	constructor(props){
		super(props)
		
		this.props.history.listen( loc => {	
		
			var step = this.map[loc.pathname];
		
			var className = step > this.state.step ? '':'reverse';
			
			this.setState({className, step})
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
		
								<StepBar index={this.state.step} array={this.array} />
								
								<TransitionGroup className={'body ' + this.state.className}>
									<CSSTransition timeout={500} classNames="slide" key={this.props.location.key} >  
										<Switch location={this.props.location}>
											<Route path="/page1"  component={Page1} />
											<Route path="/page2"  component={Page2} />
											<Route path="/page3"  component={Page3} />
											<Redirect from="/" to="/page1" />			
										</Switch>
									</CSSTransition>
								</TransitionGroup>
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
	