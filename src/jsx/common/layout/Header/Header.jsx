import React from "react";
import {BrowserRouter as Router, Switch,  Route, Link, withRouter} from "react-router-dom";
import './header.scss';

class Header extends React.Component{

    render() {
		return (
			<header>
				<div>
					<h1 className="text-center">Placeholder</h1>
				</div>	
				<span className="controls">
					{this.props.login && <a className="login" href="/login.html" >Login</a>  }
					{this.props.logout && <a className="logout" href="/login.html">Logout</a> }
				</span>
			</header>
		);
	}
}

export default (Header);
