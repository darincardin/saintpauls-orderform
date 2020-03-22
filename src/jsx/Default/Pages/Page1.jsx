import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import Form from '/jsx/common/input/Form.jsx';


var Page1 = props =>{
	
	var onSuccess = (object)=>{
		props.storeObject(object) ;
		props.history.push('/page2')
	}

	return (
		<div className="page1">
			<div>
				<h2> Order Form </h2>
				<div className="panel panel-default">
					<div className="panel-body">
						<Form object={props.object} onSuccess={onSuccess}>
							<button type="submit" className="btn btn-primary">Submit</button> 	
						</Form>
					</div>
				</div>
			</div>
		</div>	
	)
}
export default withRouter(Page1);
