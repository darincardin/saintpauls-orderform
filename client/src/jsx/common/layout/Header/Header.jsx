import React from "react";

import './header.scss';

class Header extends React.Component{

    render() {
		return (
			<header>
			
					<h1 className="text-center">Lobster Roll Fundraiser</h1>
			
				<span className="controls">
					{this.props.login && <a className="login" href="/login.html" >Login</a>  }
					{this.props.logout && <a className="logout" href="/login.html">Logout</a> }
				</span>
			</header>
		);
	}
}

export default (Header);
