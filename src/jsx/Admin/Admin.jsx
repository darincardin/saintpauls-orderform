import React, { useEffect } from 'react';
import ErrorBoundary from 'react-error-boundary';
import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import List from 'list';
import Update from '/jsx/Admin/Update/Update.jsx';
import OrderAPI, {Order} from '/js/orderAPI.js';

import { connect, actions } from 'reducer'


class Admin extends React.Component {

	state = { data:[] }
	
	getData = (page, sort, amount)=>{
		return OrderAPI.list(page, sort, amount).then(res=>{
			this.setState({ data:res.data })
			return res;
		}).catch(e =>{
			//window.location.href = '/login.html';
		})
	}

	shouldComponentUpdate(nextProps, nextState){
		return true;	
	}
	
	setSelected = order => {
		this.props.actions.setOrder(order)
	}
	
	clearSelect = callback=>{
		
		this.props.actions.setOrder(new Order())
		callback()
	}

	onEdit = obj =>{
		return OrderAPI.update(obj)
	}
	
	onDelete = obj =>{
		if(confirm(`Delete order ${obj.id}?`)) {		
			return OrderAPI.delete(obj.id)
		}		
	}
		
	render = () => {
		return (	
			<>
				<Router>
				<Header logout={true}/>	
				<main>	
					<Background />	
					<ErrorBoundary  FallbackComponent={<Error />} >

						<List labels={Order.display.columns} data={this.state.data} getData={this.getData}  >	
							<a onClick={this.setSelected}>Edit</a>&nbsp;|&nbsp;<a onClick={this.onDelete}>Delete</a> 
						</List>
						
						<Update />
					</ErrorBoundary>
				</main>	
				<Footer />
				</Router>
			</>
		);	
	}
}


const mapStateToProps = (state, ownProps) => {
	return{  }  
}


const mapDispatchToProps = (dispatch, getState) => ({
	actions: actions(dispatch, getState)
})


export default connect(mapStateToProps, mapDispatchToProps)(Admin) ;

