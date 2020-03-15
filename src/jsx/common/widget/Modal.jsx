import React from "react";

class Modal extends React.Component{
	
	body = "";
	footer = <div>
				<button type="button" className="btn btn-primary" onClick={ this.props.onSubmit} >Save</button>
				<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			</div>

	open = () => {
		$('#basicModal').modal('show');	
	}

	close = () =>{
		$('#basicModal').modal('hide');			
	}
	
	
	componentDidUpdate = (a,b,c)=>{
		this.props.open ? this.open() : this.close();
	}
	
    render() {
		
		if(Array.isArray(this.props.children)) [this.body, this.footer] = this.props.children;	
		else this.body = this.props.children;
		
		return (
		<div className="modal fade"    id="basicModal" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">X</button>
						<h4 className="modal-title" id="myModalLabel">Edit</h4>
					</div>
					<div className="modal-body">
					    {this.body}	
					</div>
					<div className="modal-footer">
						{this.footer}	
				    </div>
			    </div>
		    </div>
		</div>
		);
	}
}
export default Modal;
