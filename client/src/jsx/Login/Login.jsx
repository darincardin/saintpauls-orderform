import React from "react";
import {Header, Footer, ProgressBar, Background} from '/jsx/common';
import {OrderAPI, Order} from  '/js/order';

import utils from '/js/utils.js'

import './style.scss';

class Login extends React.Component{
	
	ref = null;
	state = {username:"", password:""}	
	
	constructor(props){
		super(props)
		this.ref = React.createRef();	
		
		utils.thirdParty.then( () => {
			utils.ref = this.ref;
			this.setState( {loaded: true} );
		});		
	}		
	
	submit = () =>{

		this.props.progress.show();

		OrderAPI.login(this.state).then(res =>{ 	
			if(res.success) window.location.href = '/admin.html';
			else throw new Error();
		})
		.catch( e=>{
			this.props.progress.hide(); 
			alert("Login was unsuccessful.");
		})
		
	}
	
	change = e=>{	
		this.setState({[e.target.name] :  e.target.value});
	}
	
    render() {
		return (
			<div ref={this.ref}> 
			    <Background />		
				<Header title="Login"/>
			
				<main >
				<div className="login">			
					<div className="panel panel-default">
						<div className="panel-body">
						
							<h2>Login Demo</h2>
							
		
								<br />
								<div className="sub-text">* Use any username/password to log in</div>
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

export default ProgressBar(Login);


