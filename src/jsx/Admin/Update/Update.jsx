import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'form';
import Modal from '/jsx/common/widget/Modal.jsx';
import { connect } from 'react-redux'
import {ProgressBar} from '/jsx/common';
import {actions} from '/js/actions.js';

import OrderAPI, {Order} from '/js/orderAPI.js';

class Update extends React.Component {

	constructor(props){
		super(props)
		this.elem = React.createRef();
	}
	

	fields = [ 
		{label:"Personal Info",  tag:"header"  },
		{label:"ID", name:"id",  tag:"label"},
		{label:"First Name", name:"fName",  tag:"text",  required:true},
		{label:"Last Name",  name:"lName",  tag:"text",  required:true},
		{label:"Phone",      name:"phone",  tag:"phone",  required:true},
		
		{label:"Order Info",  tag:"header"  },
		{label:"Quantity",   name:"quantity", tag:"number",  required:true},
		//{label:"Deliver",   name:"deliver", tag:"checkbox",  showIf:{name: "quantity", func:v=>v>5 }},
		
		{label:"Address",    name:"address", tag:"text", required:false },
		
		/*
		{label:"Time",       name:"time",    tag:"select",  options: [  
			{id:"1", label:"10:30 AM"},
			{id:"2", label:"11:00 AM"},
			{id:"3", label:"11:30 AM"}
		]}
		*/
	]	


	shouldComponentUpdate(props){
		return props.selected.id? true:false;
	}


	save = (obj)=>{
		this.props.progress.show();	

		OrderAPI.update(obj).then(()=>{
			this.close()
			window.dispatchEvent( new Event('resize') );
		})
		.finally( this.props.progress.hide )	
		
	}
	
	close = ()=>{
	    this.props.clearSelect( ()=>{
			this.elem.current.close();
		})
	}
	
	render = () => {
	
		if(this.props.selected.id)	this.elem?.current?.open();		
		
		var html = (
			<Modal ref={this.elem} show={true} close={this.close}>
					<Form object={this.props.selected} onSuccess={this.save} fields={this.fields}  >
						<div className="modal-footer text-right">
							<button type="button" onClick={this.close} className="btn btn-default">Cancel</button> &nbsp;
							<button type="submit"  className="btn btn-primary">Update</button> 
						</div>
					</Form>
			</Modal>
		)
		return (ReactDOM.createPortal(html, document.getElementsByTagName('body')  [0] ))
	}
}

const mapStateToProps = (state, ownProps) => {
	return{ data:state.data }  
}


const mapDispatchToProps = (dispatch, getState) => ({
	actions: actions(dispatch, getState)
})
export default ProgressBar(Update);
//export default connect(  mapStateToProps,  mapDispatchToProps)(ProgressBar(Update));
