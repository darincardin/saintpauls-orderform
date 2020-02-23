import React from "react";

class ProgressBar extends React.Component{
	
    constructor(props){
		super(props);
	}
	
    render() {
		return (
		<div className={`order-progress ${this.props.show?"show":"hide"}`} > 
			<div>
				<div>
					<div className="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
					Processing...
					</div>
				</div>
			</div>
		</div>
		);
	}
}
export default ProgressBar;
