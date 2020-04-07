import React from 'react';

var ProgressBar = (WrappedComponent) => {
	class Overlay extends React.Component {
		  
		state = {show:false}  
		  
		attribs = {
			'className': 'progress-bar progress-bar-info progress-bar-striped active',
			'role': 'progressbar', 
			'aria-valuenow': '100',
			'aria-valuemin': '0',
			'aria-valuemax': '100' 
		}
		  
		functions = {
			show: ()=>{ 
				this.setState({show:true }) 
			},
			hide: ()=>{ 
				this.setState({show:false}) 
			}
		}			
		  
		render() {
			return(
				<> 
					<div className={`order-progress ${this.state.show?"show":"hide"}`} > 
						<div>
							<div {...this.attribs} >Processing...</div>
						</div>
					</div>  
					<WrappedComponent {...this.props} progress={this.functions} /> 
				</>
		)}	
	}
    
	return Overlay;
};

export default ProgressBar;