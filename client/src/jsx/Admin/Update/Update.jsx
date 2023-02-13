import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'form';

import {connect, actions} from 'reducer'
import {ProgressBar, Modal} from '/jsx/common';

import {OrderAPI, Order} from  '/js/order';

class Update extends React.Component {

	fields = [ ...Order.display.inputs.customerInfo, ...Order.display.inputs.orderInfo ]



	constructor(props){
		super(props)
		this.elem = React.createRef();
	}

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
		this.props.actions.setOrder(new Order());
		this.elem.current.close();
	}
	
	render = () => {
	
		if(this.props?.selected?.id)	this.elem?.current?.open();		
		
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
	return { selected: state.order }  
}


const mapDispatchToProps = (dispatch, getState) => ({
	actions: actions(dispatch, getState)
})

export default connect(  mapStateToProps,  mapDispatchToProps)(ProgressBar(Update));
