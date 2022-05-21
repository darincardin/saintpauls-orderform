import React from "react";


import './styles.scss';

class Background extends React.Component{
	
	ref = null;
	
	constructor(props){
		super(props)
		this.ref = React.createRef()		
	}	
		
	componentDidMount() {
		
		setTimeout( ()=>{		
			var img = this.ref.current.clientWidth>700?"background.jpg":"background-sm.jpg";
			
			$('.bg img').attr("src", img);
			$('.bg img').addClass('fadeIn')
		}, 500);
	}
	
    render() {
		return (<div  ref={this.ref} className="bg" > <img className={this.props.className}/> </div> );
	}
}
export default Background;
