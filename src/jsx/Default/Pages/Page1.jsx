import React from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import Form from '/jsx/common/input/Form.jsx';

import {actions} from '/js/actions.js';

var Page1 = ({ order, actions, props }) => {

	var onSuccess = (object)=>{
		actions.save(object);
		props.history.push('/page2')
	}

	return (
		<div className="page1">
			<div>
				<h2> Order Form </h2>
				<div className="panel panel-default">
					<div className="panel-body">
						<Form  onSuccess={onSuccess} object={order}>
							<hr/>
							<button type="submit" className="btn btn-primary">Submit</button> 	
						</Form>
					</div>
				</div>
			</div>
		</div>	
	)
}
const mapStateToProps = (state, ownProps) => {
	return{ order: state.order, props: ownProps }
}

const mapDispatchToProps = (dispatch) => ({
	actions: actions(dispatch)
})
export default withRouter(connect(  mapStateToProps,  mapDispatchToProps)(Page1));
	