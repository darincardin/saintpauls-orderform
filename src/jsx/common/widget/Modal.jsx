import React from "react";

class Modal extends React.Component{
	
	constructor(props){
		super(props);
	}

    render() {
		return (
		<div className="modal fade" id="basicModal" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">X</button>
						<h4 className="modal-title" id="myModalLabel">Edit</h4>
					</div>
					<div className="modal-body">
					   { this.props.children[0] }	
					</div>
					<div className="modal-footer">
					   { this.props.children[1] }	
				    </div>
			    </div>
		    </div>
		</div>
		);
	}
}
export default Modal;
