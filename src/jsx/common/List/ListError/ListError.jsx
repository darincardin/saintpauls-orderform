import React from 'react';

import './list.error.scss';

class HTML extends React.Component{
		
	constructor(){
		super();
		console.log("here")
	}
	
    render(){ 
		return (
			<div className={'error-msg show'} >
				<div className="alert alert-danger">
						<strong>Error:</strong> List could not be loaded
				</div>
			</div>
		)
	}
}
 



class ListError extends React.Component {
		
	constructor(props){
		super()
		
		setTimeout(()=>{

			this.props.complete()
		},4000)
	}


	render() {
	

	
		return (
		
	
			<div className={'error-msg show'} >
				<div className="alert alert-danger">
						<strong>Error:</strong> List could not be loaded
				</div>
			</div>
			
		
		)	
	}
}		

export default ListError;
