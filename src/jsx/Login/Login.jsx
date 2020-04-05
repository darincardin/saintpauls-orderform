import React from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import {Header, Footer, ProgressBar, Background} from '/jsx/common';

import OrderAPI from '/js/orderAPI.js';

import { progressbar} from '/js/actions.js';

class Login extends React.Component{
	
	state = {username:"", password:""}
	
	submit = () =>{

		this.props.progressbar.show();

		OrderAPI.login(this.state).then(res =>{ 	
			if(res.success) window.location.href = '/admin.html';
			else {
				this.props.progressbar.show(); 
				alert("Login was unsuccessful.");
			}
		})
	}
	
	change = e=>{	
		this.setState({[e.target.name] :  e.target.value});
	}
	
    render() {
		return (
			<div> 
				<Header />
				<Background />
				<main >
				<div className="login">
					<h2>Login Demo</h2>
					<h3>* use any password to login</h3>
					<div className="panel panel-default">
						<div className="panel-body">
							<table>
								<tbody>
									<tr>
										<td>Username</td>
										<td> <input type="text"  name="username" onKeyUp={this.change} className="form-control" /> </td>
									</tr>
									<tr>
										<td>Password</td>
										<td> <input type="password"  name="password" onKeyUp={this.change} className="form-control"/> </td>
									</tr>
									<tr><td> <br /> </td></tr>
									<tr>
										<td><input type="submit" value="Login"  onClick={this.submit} className="btn btn-primary" /></td><td></td>
									</tr>
								</tbody>
							</table>	
						</div>
					</div>
				</div>	
				</main>
						
				<Footer />
				{ReactDOM.createPortal(<ProgressBar show={this.props.state.showProgress} />, document.getElementById('progress-bar')) }
			</div>
	    );
	}


}
const mapStateToProps = (state, ownProps) => {
	return	{ state:state }
}

const mapDispatchToProps = (dispatch) => ({
	progressbar:progressbar(dispatch)
})
export default connect(  mapStateToProps,  mapDispatchToProps)(Login);


