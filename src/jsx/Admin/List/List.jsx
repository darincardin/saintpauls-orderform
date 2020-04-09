import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import {ListHeader ,ListBody, ListFooter, ListLoader }from '/jsx/Admin/List';

import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';

import Update from '/jsx/Admin/Update/Update.jsx';

import {actions} from '/js/actions.js';
import OrderAPI from '/js/orderAPI.js';

class List extends React.Component {

	state = {showEdit:false, selected:null, page:0, total:0, loading:false}
	cancel = null;
	
	constructor(props){
		super(props);
	
		window.addEventListener('resize', this.handleEvent);
		this.getOrders();
	}
	
	handleEvent = () => {
		if(this.cancel) clearTimeout(this.cancel);
		this.cancel = setTimeout( ()=>{ this.getOrders() }, 300);
	}
	
	getOrders = (page = this.state.page) => {
			
		this.setState({loading:true});
	
		this.props.actions.list(page).then(res=>{
			this.setState( {loading:false, page:page, total:res.total})
		})
		.catch( err =>{
			this.setState( {loading:false, page:0, total:0 })
		})
	}
	
	open = selected => {	
		this.setState({showEdit:true, selected });
	}
	
	close = () =>{
		this.setState({showEdit:false});
	}

	save = obj =>{
		this.props.progress.show();

		this.props.actions.update(obj).then(()=>{
			this.setState({ showEdit:false });
			return this.getOrders()
		})
		.finally(
			this.props.progress.hide
		)
	}

	deleteOrder = (id,e) => {

		if(confirm(`Delete order ${id}?`) ) {

			this.props.progress.show();
			
			this.props.actions.remove(id).then(res =>{
				return this.getOrders()
			})
			.finally(
				this.props.progress.hide
			)	
		}	
	}	
	
	render = () => {
	    return  (
			<> 
				<ListLoader show={this.state.loading}/>

				<table className="mainGrid">
					<ListHeader />
					<ListBody data={this.props.data} open={this.open} deleteOrder={this.deleteOrder}/>
				</table>

				<ListFooter update={this.getOrders} page={this.state.page} max={this.state.total} />
	
				<Update show={this.state.showEdit} object={this.state.selected} save={this.save} close={this.close}  />	
			</>
		)
	}
}		

const mapStateToProps = (state, ownProps) => {
	return{ data:state.data }  
}


const mapDispatchToProps = (dispatch, getState) => ({
	actions: actions(dispatch, getState)
})

export default connect(  mapStateToProps,  mapDispatchToProps)(ProgressBar(List));
