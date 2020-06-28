import React from 'react';
import ReactDOM from 'react-dom';

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
			
			var html = (
					<div className={`order-progress ${this.state.show?"show":"hide"}`} > 
						<div>
							<div {...this.attribs} >Processing...</div>
						</div>
					</div>  
			)	
			
			return(
				<> 
					{ReactDOM.createPortal(html, document.getElementsByTagName('body')[0]   )   }
					 <WrappedComponent {...this.props} progress={this.functions} /> 
				</>
				)
		}	
	}
    
	return Overlay;
};

export default ProgressBar;			
			/*
			return(
				<> 
				  (ReactDOM.createPortal(html, document.getElementById('progress-bar')))
				  <WrappedComponent {...this.props} progress={this.functions} /> 
				</>
				*/