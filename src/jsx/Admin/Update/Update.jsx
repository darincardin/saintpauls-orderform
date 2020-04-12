import React from 'react';
import ReactDOM from 'react-dom';
import Form from '/jsx/common/input/Form.jsx';
import Modal from '/jsx/common/widget/Modal.jsx';
import { connect } from 'react-redux'
import {ProgressBar} from '/jsx/common';
import {actions} from '/js/actions.js';

class Update extends React.Component {

	save = (obj)=>{
		
		this.props.progress.show();

		this.props.actions.update(obj).then(()=>{
			this.close()
			window.dispatchEvent( new Event('resize') );
		})
		.finally( this.props.progress.hide )		
	}
	
	close = ()=>{
		this.props.setSelected(null);
	}
	
	render = () => {

		var html = (
			<Modal show={this.props.selected != null} close={this.close}>
				<div>
				{
					<Form object={this.props.selected} onSuccess={this.save} showID={true} >
						<div className="modal-footer text-right">
							<button type="button" onClick={this.close} className="btn btn-default">Cancel</button> &nbsp;
							<button type="submit"  className="btn btn-primary">Update</button> 
						</div>
					</Form>
				}			
				</div>
			</Modal>
		)
		return (ReactDOM.createPortal(html, document.getElementById('modal')))
	}
}

const mapStateToProps = (state, ownProps) => {
	return{ data:state.data }  
}


const mapDispatchToProps = (dispatch, getState) => ({
	actions: actions(dispatch, getState)
})

export default connect(  mapStateToProps,  mapDispatchToProps)(ProgressBar(Update));
