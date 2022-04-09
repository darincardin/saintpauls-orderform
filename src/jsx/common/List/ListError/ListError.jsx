import React from 'react';

import './list.error.scss';

class HTML extends React.Component{
		
	constructor(){
		super();
		
		setTimeout(()=>{
			this.props.complete()
		},4000)
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
		
	render() {
		return (
			<>
				{ this.props.error && <HTML complete={this.props.complete} /> }
			</>
		)	
	}
}		

export default ListError;
