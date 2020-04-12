import React from "react";

class Modal extends React.Component{

	elem = null;
	
	constructor(props){
		super(props)
		this.myRef = React.createRef();
	}

	componentDidUpdate(a,b,c){
	
	}

	componentWillReceiveProps(props,a,b,c) {
	
	}

	componentDidMount(){
		this.elem = $(this.myRef.current);
	}

	open = () => {
		this.elem.modal('show');		
	}

	close = () =>{
		if(this.props.close) this.props.close();
		this.elem.modal('hide');	
	}
	
    render() {

		if(this.elem) this.props.show ? this.open() : this.close()
		
		return (
		
		<div className="modal fade"    ref={this.myRef}  id="basicModal" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" onClick={ this.close } aria-hidden="true">X</button>
						<h4 className="modal-title" id="myModalLabel">Edit</h4>
					</div>
					<div className="modal-body">
					    {this.props.children}	
					</div>
			    </div>
		    </div>
		</div>
			
		);
	}
}
export default Modal;

/*

					<div className="modal-footer text-right">
						<button type="button" onClick={this.close} className="btn btn-default">Cancel</button> &nbsp;
						<button type="submit"  className="btn btn-primary">Update</button> 
					</div>
*/
//$('#basicModal').modal('show');