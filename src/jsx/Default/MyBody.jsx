import React from "react";
import ReactDOM from 'react-dom';
import ErrorBoundary from 'react-error-boundary';
import {BrowserRouter as Router, Switch, Redirect,Route, Link, withRouter} from "react-router-dom";


import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';
import {Page1, Page2, Page3} from '/jsx/Default/Pages/';
import {Order} from '/js/orderAPI.js';

import { AnimatedSwitch } from 'react-router-transition';

var obj =  {fName:"Becky", lName:"Lee", quantity:"2", phone:"222-333-4444"}


import { spring, AnimatedRoute } from 'react-router-transition';

//import { TransitionGroup, CSSTransition } from "react-transition-group";

/*
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {
  atEnter: { opacity: 0, scale: 1.2 },
  atLeave: { opacity: bounce(0),  scale: bounce(0.8) },
  atActive: { opacity: bounce(1),  scale: bounce(1)},
};

										atEnter={bounceTransition.atEnter}
										atLeave={bounceTransition.atLeave}
										atActive={bounceTransition.atActive}
*/




function mapStyles(styles) {
	console.log(styles)
  return {
    opacity: .5,
   //transform: `scale(${styles.scale})`,
  };
}

//	mapStyles={mapStyles}

class MyBody extends React.Component {

	state = {order: new Order()}
	
	update = obj =>{
		this.setState({order: obj})	
	}
	
	render() {
		return (
			
			<div>
				<Header />
				
				<main>		
					<Background />			
					<ErrorBoundary  FallbackComponent={<Error />}  >

								
								  <Router>
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
								  </Router>

					</ErrorBoundary >
				</main>	
				<Footer />
			</div>
		);
	}
}


export default (MyBody);
	/*
	
	
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
	*/