import React from 'react';

import './style.scss';

class HTML extends React.Component{
		
	constructor(){
		super();
		
		setTimeout(()=>{
			this.props.complete();
		},4000)
	}
	
    render(){ 
		return (
			<div className="my-error " >
				<div className="alert alert-danger">
					<strong>Error:</strong> Server not responding. Try again later.
				</div>
			</div>
		)
	}
}
 



class MyError extends React.Component {
		
	render() {
		return (
			<>
				{ this.props.error && <HTML complete={this.props.complete} /> }
			</>
		)	
	}
}		

export default MyError;
