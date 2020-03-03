import React from "react";
import {BrowserRouter as Router, Redirect ,Switch, withRouter, Route,Link} from "react-router-dom";
import { useHistory } from "react-router-dom";


import Header from './common/layout/Header.jsx';
import Footer from './common/layout/Footer.jsx';
import ProgressBar from './common/widget/ProgressBar.jsx';

import form from '../js/form.js';
import Order from '../js/order.js';

import Context from '../js/context.js';

class MyLogin extends React.Component{
	
    constructor(props){
		super(props);
		this.props = props;
		this.state = {showProgress:false, username:"", password:""}
	}
	
	submit =()=>{
		this.showOverlay(); 
		var obj = {username:this.state.username, password: this.state.password}
		
		fetch(`/php/login.php`, {method:'post',  body: JSON.stringify(obj)} ).then(res => res.json()).then(
		result =>{ 	
			if(result.success) window.location.href = '/admin.html';
			else {
				this.hideOverlay(); 
				alert("Login was unsuccessful.");
			}
		},
		error => {
			this.hideOverlay(); 
			alert("An error occurred. Please try again later.")
		})
	}
	
	change = e=>{this.setState({[e.target.name] :  e.target.value});}
	
	showOverlay = () =>{ this.setState({showProgress:true})}
	
	hideOverlay = () =>{ this.setState({showProgress:false})}


    render() {
		return (
		<div> 
			<Header />
			<div className="bg"> <img src="/assets/images/lobster1.jpg" /></div>
			<main >
			<div className="login">
				<h2>Login Demo</h2>
				<h3>* use any password to login</h3>
				<div className="panel panel-default">
					<div className="panel-body">
			

					<table>
						<tbody>
							<tr><td>Username</td>
							<td> <input type="text"  name="username" onKeyUp={this.change} className="form-control" /> </td></tr>
							<tr><td>Password</td>
							<td> <input type="password"  name="password" onKeyUp={this.change} className="form-control"/> </td></tr>
							<tr><td> <br /> </td></tr>
							<tr><td><input type="submit" value="Login"  onClick={this.submit} className="btn btn-primary" /></td><td></td></tr>
						</tbody>
					</table>	
				
					</div>
				</div>
			</div>	
			</main>
					
			<Footer />
		
			<ProgressBar show={this.state.showProgress} />
		</div>
	  );
	}


}


export default (MyLogin) ;
