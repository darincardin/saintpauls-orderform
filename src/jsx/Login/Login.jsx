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
	
				this.props.progress.hide(); 
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
					
				
					<div className="panel panel-default">
						<div className="panel-body">
						
							<h2>Login Demo</h2>
								<sub>(use any username/password)</sub>
								<br />
								<div className="input-group">
									<span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
									<input  type="text" className="form-control" name="username" placeholder="User" onKeyUp={this.change} />
								</div>		
								<div className="spacer"/>
								<div className="input-group">
									<span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
									<input type="password" className="form-control" name="password" placeholder="Password" onKeyUp={this.change} />
								</div>		
		
							<br />
							<div className="text-left">
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


