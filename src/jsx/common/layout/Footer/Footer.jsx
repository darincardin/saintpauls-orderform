import React from "react";
import {BrowserRouter as Router, Switch,  Route,Link} from "react-router-dom";

import './footer.scss';

class Footer extends React.Component{
	
    render() {return (
		<footer className="clearfix">
			<center className="hidden-xs">
				Placeholder
			</center> 
			<center className="copyright">COPYRIGHT &copy; 2016 <span></span>Placeholder</center>
		</footer>   
	  );
	}
}

export default Footer;
