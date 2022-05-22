import React from "react";

import utils from '/js/utils.js'

import './styles.scss';

class Background extends React.Component{
	
	componentDidMount() {	
		
		
		setTimeout( ()=>{				
			
			
			$('.bg img').attr("src", "background.jpg").addClass('fadeIn');
		}, 500);
		
		
	}
	
    render() {
		return (<div className="bg" > <img className={this.props.className} /> </div> );
	}
}
export default Background;
