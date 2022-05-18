import React from "react";

import './header.scss';

class Header extends React.Component{

    render() {
		return (
			<header>
				<div>
					<h1 className="text-center">{this.props.title}</h1>
				</div>	
				<span className="controls">
					{this.props.login && <a className="login" href="/login.html" > <i className="glyphicon glyphicon-lock"></i> Login</a>  }
					{this.props.logout && <a className="logout" href="/login.html">Logout</a> }
				</span>
			</header>
		);
	}
}

export default (Header);
