import React from 'react';
import ReactDOM from 'react-dom';
import Form from '/jsx/common/input/Form.jsx';
import Modal from '/jsx/common/widget/Modal.jsx';

var Update = props => {

	var html = (
		<Modal open={props.show} onClose={props.close} >
			<div>
			{props.show && 
				<Form object={props.object} onSuccess={props.save} showID={true} >
					<button type="button" onClick={props.close} className="btn btn-default">Cancel</button> &nbsp;
					<button type="submit" className="btn btn-primary">Update</button> 
				</Form>
			}
			</div>
		</Modal>
	)
	
	return (ReactDOM.createPortal(html, document.getElementById('modal')))
}
export default Update;
