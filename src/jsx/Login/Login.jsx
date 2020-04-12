import React from "react";
import ReactDOM from 'react-dom';

import {Header, Footer, ProgressBar, Background} from '/jsx/common';

import OrderAPI from '/js/orderAPI.js';



class Login extends React.Component{
	
	state = {username:"", password:""}
	
	submit = () =>{

		this.props.progress.show();

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
										<td><label className="control-label">Username</label></td>
										<td> <input type="text"  name="username" onKeyUp={this.change} className="form-control" /> </td>
									</tr>
									<tr>
										<td><label className="control-label">Password</label></td>
										<td> <input type="password"  name="password" onKeyUp={this.change} className="form-control"/> </td>
									</tr>
								</tbody>
							</table>	
							<hr/>
							<div className="text-right">
								<input type="submit" value="Login"  onClick={this.submit} className="btn btn-primary" /> 
							</div>
							
						</div>
					</div>
				</div>	
				</main>
						
				<Footer />
	
			</div>
	    );
	}


}
/*
const mapStateToProps = (state, ownProps) => {	
	return { showProgress: state.showProgress }
}

const mapDispatchToProps = (dispatch) => ({
	progressbar:progressbar(dispatch)
})
*/
export default ProgressBar(Login);


