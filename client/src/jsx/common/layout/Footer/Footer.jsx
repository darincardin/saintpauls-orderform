import React from "react";
import {BrowserRouter as Router, Switch,  Route,Link} from "react-router-dom";

import './footer.scss';

class Footer extends React.Component{
	
    render() {return (
		<footer className="clearfix">

			<center className="copyright">Copyright &copy; 2021 <span></span></center>
		</footer>   
	  );
	}
}

export default Footer;
