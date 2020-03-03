import React from "react";
import {BrowserRouter as Router, Switch, withRouter, Route,Link} from "react-router-dom";

import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';

import Header from './common/layout/Header.jsx';
import Footer from './common/layout/Footer.jsx';
import ProgressBar from './common/widget/ProgressBar.jsx';

import form from '../js/form.js';
import Order from '../js/order.js';

import Context from '../js/context.js';

class MyBody extends React.Component{
	
    constructor(){
		super();
		
		this.state = { 
			showProgress:false,  
			form: form(new Order()),
			clear: ()=>{
				this.setState({form:  form(new Order())  } );
			},
			change: (arg1, arg2)=>{
				
				var name = (arg1 instanceof Event) ? arg1.target.name  : arg1;
				var val =  (arg1 instanceof Event) ? arg1.target.value : arg2;

				this.state.form[name] =  val;
				this.setState({form : this.state.form});
			},
	
			submit: onSuccess =>{
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
		
			
		}
	}
	
	showOverlay = () =>{ this.setState({showProgress:true})}
	
	hideOverlay = () =>{ this.setState({showProgress:false})}

    render() {
		return (
		<div> 
			<Header />
			<main>	
				<Context.Provider value={{state: this.state}}> 
					<Router>
					  <div>
						<Switch>
						  <Route path="/page2">
							<Page2 />
						  </Route>
						  <Route path="/page3">
							<Page3 />
						  </Route>
						  <Route path="/">
							<Page1 />
						  </Route>
						</Switch>
					  </div>
					</Router>
				</Context.Provider> 
			</main>	
			
			<Footer />
		
			<ProgressBar show={this.state.showProgress} />
		</div>
	  );
	}


}

export default MyBody;

