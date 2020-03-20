import React from "react";
import ReactDOM from 'react-dom';

import Header from './common/layout/Header.jsx';
import Footer from './common/layout/Footer.jsx';
import ProgressBar from './common/widget/ProgressBar.jsx';

import OrderAPI from '/js/orderAPI.js';


class MyLogin extends React.Component{
	
	state = {showProgress:false, username:"", password:""}
	
	submit = () =>{
		this.showOverlay(); 

		OrderAPI.login(this.state.username, this.state.password).then(res =>{ 	
			if(res.success) window.location.href = '/admin.html';
			else {
				this.hideOverlay(); 
				alert("Login was unsuccessful.");
			}
		})
		.catch(()=>{
			this.hideOverlay(); 
			alert("An error occurred. Please try again later.")
		});
	}
	
	change = e=>{this.setState({[e.target.name] :  e.target.value});}
	
	showOverlay = () =>{ this.setState({showProgress:true})}
	
	hideOverlay = () =>{ this.setState({showProgress:false})}


    render() {
		return (
		<div> 
			<Header />
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
		    {ReactDOM.createPortal(<ProgressBar show={this.state.showProgress} />, document.getElementById('progress-bar')) }
		</div>
	  );
	}


}


export default (MyLogin) ;
