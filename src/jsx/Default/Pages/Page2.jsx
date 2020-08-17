import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import Form from 'form';

import {ProgressBar} from '/jsx/common';
import {connect, actions} from 'reducer'
import {OrderAPI, Order} from  'order';


class Page2 extends React.Component {

	constructor(props){
		super(props)
		if(!props.order.fName) props.history.push('/')
	}
	
	state = { order: this.props.order }

	onSuccessBackup = order =>{
		this.props.actions.setOrder(order);
		this.props.history.push('/page3')
	}

	onSuccess = order =>{

		this.props.progress.show();	
		
		OrderAPI.create(order).then(res =>{
			this.props.actions.setOrder(res);
			this.props.history.push('/page3')
		})
		.finally( this.props.progress.hide )	
	}

	render = ()=> {
		return (
			<div className="page page2" >
				<div>
					<Form  onSuccess={this.onSuccess} object={this.state.order} fields={Order.display.inputs.orderInfo} >
						<Link to='/page1'><button className="btn btn-default">Back</button></Link>
						&nbsp;
						<button type="submit" className="btn btn-primary">Submit</button> 	
					</Form>			
				</div>
			</div>	
		)
	}
}


const mapStateToProps = (state, ownProps) => {
	return { order: state.order }
}

const mapDispatchToProps = (dispatch) => ({
	actions: actions(dispatch)
})

export default withRouter(ProgressBar(connect(  mapStateToProps,  mapDispatchToProps)(Page2)));
	
	
