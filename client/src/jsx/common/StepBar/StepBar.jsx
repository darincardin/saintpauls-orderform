import React from "react";
import PropTypes from 'prop-types';

import './styles.scss';

class StepBar extends React.Component{
	
	constructor(props){
		super(props);

		var segments = this.props.array.length * 2;	
		this.segmentLength = 100 / segments;
	}
	
	className = i => this.props.index==i ? "active" : "";
	
    render() {
	
		var width  = (1 + this.props.index*2) * this.segmentLength;
		var width_li = this.segmentLength*2;

		return (
			<div ref={this.ref} className="step-bar" > 
				<div className="step-highlight" style={{'width': width + '%'}} ></div>
				<ul>
				{
					this.props.array.map((v,i)=>(
						<li  key={i} style={{'width': width_li + '%'}} className={ this.className(i) }>{v.label}</li>
					))
				}
			    </ul>
			</div> 
			)
	}
}


StepBar.propTypes = {
    index: PropTypes.number.isRequired,
    array: PropTypes.array.isRequired
};

export default StepBar;

