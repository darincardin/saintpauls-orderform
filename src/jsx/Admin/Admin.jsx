import React, { useEffect } from 'react';
import ErrorBoundary from 'react-error-boundary';
import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import List from 'list';
import Update from '/jsx/Admin/Update/Update.jsx';
import OrderAPI from '/js/orderAPI.js';


class Admin extends React.Component {

	state = { data:[], selected:{}}
	//state = { data:[], selected:{id:'1', fName:'AAA', lName:'bbb', quantity:'1', phone:'', address:''}}
	labels = [
		{name:'ID',id:'id'},
		{name:'First Name',id:'fName'},
		{name:'Last Name',id:'lName'},
		{name:'Qty',id:'quantity'},
		{name:'Phone',id:'phone'},
		{name:'Address',id:'address'}
	]
	
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
		//return !_.isEqual(this.state.selected, nextState.selected);		
	}
	
	setSelected = (selected) => {
	
		this.setState({selected: selected})	
	}
	
	clearSelect = callback=>{
	
		
		this.setState({selected:{}}, callback)
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

						<List labels={this.labels} data={this.state.data} getData={this.getData}   >	
							<a onClick={this.setSelected}>Edit</a> |  <a onClick={this.onDelete}>Delete</a> 
						</List>
						
						<Update selected={this.state.selected} clearSelect={this.clearSelect} />
					</ErrorBoundary>
				</main>	
				<Footer />
				</Router>
			</>
		);	
	}
}

export default Admin;

