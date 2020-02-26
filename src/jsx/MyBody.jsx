import React from "react";
import {BrowserRouter as Router, Switch, withRouter, Route,Link} from "react-router-dom";

import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';

import Header from './common/Header.jsx';
import Footer from './common/Footer.jsx';
import ProgressBar from './common/ProgressBar.jsx';

import form from '../js/form.js';
import Order from '../js/order.js';


class MyBody extends React.Component{
	
    constructor(){
		super();
		
		this.state = { showProgress:false,  form: form(new Order())}
		
	    this.showOverlay = this.showOverlay.bind(this);
	    this.hideOverlay = this.hideOverlay.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);
	}
	
	onSubmit(onSuccess) {

		this.showOverlay();

		fetch('/php/orders/create.php', { method: 'post', body: JSON.stringify(this.state.form) })
		.then(res => res.json()).then(
		success => { 
			this.hideOverlay(); 
			this.state.form.id = success;
			onSuccess();
		},
		error => {
			alert("An error occurred. Please try again later.")
			this.hideOverlay(); 
		});
	}
	
	showOverlay(){ this.setState({showProgress:true})}
	
	hideOverlay(){ this.setState({showProgress:false})}
	
    render() {return (
		<div>
			<Header />
			<main>	
				<Router>
				  <div>
					<Switch>
					  <Route path="/page2">
						<Page2 form={this.state.form}  onSubmit={this.onSubmit}/>
					  </Route>
					  <Route path="/page3">
						<Page3 form={this.state.form}/>
					  </Route>
					  <Route path="/">
						<Page1 form={this.state.form} />
					  </Route>
					</Switch>
				  </div>
				</Router>
			</main>	
			
			<Footer />
		
			<ProgressBar show={this.state.showProgress} />
		</div>
	  );
	}


}

export default MyBody;

