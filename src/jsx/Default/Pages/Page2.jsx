import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch,  Route,Link, withRouter} from "react-router-dom";
import { ProgressBar, Error, Background} from '/jsx/common';
import {connect, actions} from 'reducer'

import OrderAPI from '/js/orderAPI.js';


class Page2 extends React.Component {

	constructor(props){
		super(props)
		if(!this.props.order.fName) props.history.push('/')
	}

	data = [
		{name:'fName', label: "First Name" },
		{name:'lName', label: "Last Name" },
		{name:'quantity', label: "Quantity" },
		{name:'phone', label: "Phone" },
		{name:'address', label: "Address" }	
	]

	submitHandler = () => {
		
		this.props.progress.show();
		
		OrderAPI.create(this.props.order).then(res =>{
			this.props.actions.setOrder(res);
			this.props.history.push('/page3')
		})
		.finally( this.props.progress.hide )
	}

    render() {
		return (
				<div className="page2" >
					<h3 style={{'font-weight':'600'}}>Confirm Order </h3>

							<table>  
								<tbody>
								{this.data.map(i=>(
									<tr> 
										<td><label className='control-label' htmlFor='inputSuccess4'>{i.label}</label></td>
										<td>{ this.props.order[i.name]}</td>
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
		)
	}
}

	
const mapStateToProps = (state, ownProps) => {
	return { order: state.order }
}

const mapDispatchToProps = (dispatch) => ({
	actions: actions(dispatch)
})

export default ProgressBar(withRouter(connect(  mapStateToProps,  mapDispatchToProps)(Page2)));
	
	