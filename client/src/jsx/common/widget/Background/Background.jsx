import React from "react";

//import utils from '/js/utils.js'

import './styles.scss';

import 'jquery-plugins/dist/loadimage.js';
import 'jquery-plugins/dist/loadimage.css';


class Background extends React.Component{
	
	componentDidMount() {	
		
		
		
		/*
		setTimeout( ()=>{				
			
			
			$('.bg img').attr("src", "background.jpg").addClass('fadeIn');
		}, 500);
		*/
		
		var style ={
			height:'100%',
			width: '100%',
			'min-width':'900px',
			'min-height':'800px',
			transition: `opacity 4s`
		}		
		
		
		
		$('.bg').loadimage( style ); 
	}
	
	//<div className="bg" > <img className={this.props.className} /> </div>
    render() {
		return ( <div  className="bg" src="/background-xxx.jpg"  > </div>);
	}
}
export default Background;
