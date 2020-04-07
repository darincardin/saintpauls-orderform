


 

import React from 'react';

var ProgressBar = (WrappedComponent) => {
	class Overlay extends React.Component {
		  
		attribs = {
			'className': 'progress-bar progress-bar-info progress-bar-striped active',
			'role': 'progressbar', 
			'aria-valuenow': '100',
			'aria-valuemin': '0',
			'aria-valuemax': '100' 
		}
		  
		

		render() {
			debugger;
			return(
			<div> 
				<div className={`order-progress ${this.props.showProgress?"show":"hide"}`} > 
					<div>
						<div>
							<div {...this.attribs} >
							Processing...
							</div>
						</div>
					</div>
				</div>
			  
				<WrappedComponent {...this.props} /> 
			</div>
		)}	
	}
    
	return Overlay;
};

export default ProgressBar;