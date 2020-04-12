import React from "react";
import ProgressBar from '/jsx/common/widget/ProgressBar.jsx';

import OrderAPI from '/js/orderAPI.js';


class Header extends React.Component{
	
	logout = () =>{

		this.props.progress.show();

		OrderAPI.logout().then(res =>{ 	 
			window.location.href = '/login.html';
		})
	}		
	
	
    render() {return (
		<header>
    		<div>
				<h1 class="text-center">Placeholder</h1>
    		</div>	
			{this.props.showLogout &&
				<a href="#" onClick={this.logout} className="logout">Logout</a>  
			}
		</header>
	  );
	}
}

export default ProgressBar(Header);
