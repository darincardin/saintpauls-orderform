import React from "react";

import './styles.scss';


class StepBar extends React.Component{
	
	
	
	array = [
		{label:"Customer Info"},
		{label:"Order Info"},
		{label:"Done"}
	]
	
    render() {
		return (
			<div className="step-bar" > 
				<ul>
				{
					this.array.map((v,i)=>
						<li className={this.props.step==i?'active':''}>{v.label}</li>
					)
				}
			    </ul>
			</div> )
	}
}
export default StepBar;
