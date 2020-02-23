import React from "react";
import {BrowserRouter as Router, Switch,  Route,Link} from "react-router-dom";


class Header extends React.Component{
	
    render() {return (
		<header>
    		<div>
    		    <a className="center-block" href="http://stpaulsumcnb.org/"></a>
    		</div>	
		</header>
	  );
	}
}

export default Header;
