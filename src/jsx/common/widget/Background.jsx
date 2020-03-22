import React from "react";

class Background extends React.Component{
	
	componentDidMount() {
		
		setTimeout( ()=>{
			$('.bg img').attr("src", "assets/images/background.jpg");
			$('.bg img').addClass('fadeIn')
		}, 500);
	}
	
    render() {
		return (<div className="bg"> <img  /> </div> );
	}
}
export default Background;
