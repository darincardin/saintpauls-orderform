import React from "react";
import {BrowserRouter as Router, Switch,  Route,Link} from "react-router-dom";


class Footer extends React.Component{
	
    render() {return (
		<footer className="clearfix">
			<center className="hidden-xs">
				WE ARE A COMMUNITY OF BELIEVERS THAT GATHER TO WORSHIP CORPORATELY AND GROW SPIRITUALLY.
			</center> 
			<center className="copyright">COPYRIGHT &copy; 2016 <span></span>ST. PAUL'S UNITED METHODIST CHURCH</center>
		</footer>   
	  );
	}
}

export default Footer;
