import React, { useEffect } from 'react';
import ErrorBoundary from 'react-error-boundary';
import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';
import {BrowserRouter as Router} from "react-router-dom";
import List from 'list';
import Update from '/jsx/Admin/Update/Update.jsx';
import {OrderAPI, Order} from  '/js/order';

import { connect, actions } from 'reducer'


class Admin extends React.Component {

	state = { data:[] }
	
	getData = (page, sort, amount, search)=>{
		return OrderAPI.list(page, sort, amount, search).then(res=>{
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
		return Promise.resolve();
	}
	
	clearSelect = callback=>{	
		this.props.actions.setOrder(new Order())
		callback()
	}

	onEdit = obj =>{
		return OrderAPI.update(obj)
	}
	
	onDelete = obj =>{	
		return (confirm(`Delete order ${obj.id}?`)) ? OrderAPI.delete(obj.id) : Promise.resolve();
	}
		
	render = () => {
		return (	
			<div>
				<Router>
				<Header title="Admin" logout={true}/>	
				<main>	
					<Background />	
					<ErrorBoundary  FallbackComponent={<Error />} >
						<List labels={Order.display.columns} data={this.state.data} getData={this.getData}  >	
							<a className="edit" onClick={this.setSelected}>Edit</a>
							&nbsp;|&nbsp;
							<a className="delete" onClick={this.onDelete}>Delete</a> 
						</List>					
						<Update />
					</ErrorBoundary>
				</main>	
				<Footer />
				</Router>
			</div>
		);	
	}
}

//



const mapStateToProps = (state, ownProps) => {
	return{  }  
}


const mapDispatchToProps = (dispatch, getState) => ({
	actions: actions(dispatch, getState)
})


export default connect(mapStateToProps, mapDispatchToProps)(Admin) ;

