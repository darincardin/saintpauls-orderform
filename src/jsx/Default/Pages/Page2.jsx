import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch,  Route,Link, withRouter} from "react-router-dom";
import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';
import {actions} from '/js/actions.js';

import OrderAPI from '/js/orderAPI.js';


class Page2 extends React.Component {

	constructor(props){
		super(props)
		if(!this.props.order.fName) props.history.push('/')
	}

	data = [
		{label: "First Name", value: this.props.order.fName },
		{label: "Last Name", value: this.props.order.lName },
		{label: "Quantity", value: this.props.order.quantity },
		{label: "Phone", value: this.props.order.phone },
		{label: "Address", value: this.props.order.address }
	]

	submitHandler = () => {
		
		this.props.progress.show();
		
		this.props.actions.create(this.props.order).then(res =>{
			this.props.history.push('/page3')
		})
		.finally(
			this.props.progress.hide
		)
	}

    render() {
		return (
				<div className="page2" >
					<h2>Confirm Order </h2>
					<div className="panel panel-default form-horizontal">
						<div className="panel-body">
							<table>  
								<tbody>
								{this.data.map(i=>(
									<tr> 
										<td><label className='control-label' htmlFor='inputSuccess4'>{i.label}</label></td>
										<td>{i.value}</td>
									</tr>
								))}
								</tbody>
							</table>
							<hr/>
							<div className="text-right">
								<Link to='/'><button className="btn btn-default">Back</button></Link>
								&nbsp;
								<button className="btn btn-primary" type='button' onClick={this.submitHandler} >Confirm</button> 	  
							</div>
						</div>
					</div>
				</div>		
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return{ order: state.order, props: ownProps }
}

const mapDispatchToProps = (dispatch) => {	
	return { 
		actions: actions(dispatch)
	}		
}

export default withRouter(connect( mapStateToProps,  mapDispatchToProps)(ProgressBar(Page2)));
		

