import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import {ListHeader ,ListBody, ListFooter, ListLoader }from '/jsx/Admin/List';

import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';

import Update from '/jsx/Admin/Update/Update.jsx';

import {actions} from '/js/actions.js';
import OrderAPI from '/js/orderAPI.js';

class List extends React.Component {

	state = {showEdit:false, loading:false, selected:null}
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
	
	getOrders = (p = this.props.page) => {
			
		this.setState({loading:true});
		
		this.props.actions.list(p)
		.finally( ()=>{
			this.setState( {loading:false} )
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

				<ListFooter update={this.getOrders} page={this.props.page} max={this.props.total} />
	
				<Update show={this.state.showEdit} object={this.state.selected} save={this.save} close={this.close}  />	
			</>
		)
	}
}		



const mapStateToProps = (state, ownProps) => {
	return{ page:state.page, total:state.total, data:state.data }  
}


const mapDispatchToProps = (dispatch, getState) => ({
	actions: actions(dispatch, getState)
})

export default connect(  mapStateToProps,  mapDispatchToProps)(ProgressBar(List));
