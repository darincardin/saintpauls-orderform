import React from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch,  Route,Link, withRouter} from "react-router-dom";


import OrderAPI from '/js/orderAPI.js';


let Page2 = ({ order, save, progress, props }) => {

	if(!order.fName) props.history.push('/page1')

	var data = [
		{label: "First Name", value: order.fName },
		{label: "Last Name", value: order.lName },
		{label: "Quantity", value: order.quantity },
		{label: "Phone", value: order.phone },
		{label: "Address", value: order.address }
	]

	var submitHandler = () => {
		progress.show()
		OrderAPI.create(order).then(res => { 
			progress.hide()       	
			save({...order, id: res});
			props.history.push('/page3')
		})
	}

	return (
			<div className="page2" >
				<h2>Confirm Order </h2>
				<div className="panel panel-default form-horizontal">
					<div className="panel-body">

						<table >  
							<tbody>
							{data.map(i=>(
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
							<button className="btn btn-primary" type='button' onClick={submitHandler} >Confirm</button> 	  
						</div>
					</div>
				</div>
			</div>		
	)

}

const mapStateToProps = (state, ownProps) => (
	{ order: state.order, props: ownProps }
)

const mapDispatchToProps = (dispatch) => ({
    save: order => { dispatch({type:"SAVE", order})},
	progress:{
		show: () => { dispatch({type:"SHOW"})},
		hide: () => { dispatch({type:"HIDE"})}
	}
})
export default withRouter(connect( mapStateToProps,  mapDispatchToProps)(Page2));
								