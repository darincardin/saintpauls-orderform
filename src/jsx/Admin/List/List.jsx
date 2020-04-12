import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import {ListHeader ,ListBody, ListFooter, ListLoader }from '/jsx/Admin/List';
import {ProgressBar} from '/jsx/common';
import {actions} from '/js/actions.js';

class List extends React.Component {
	
	cancel = null;
	state = {page:0, total:0, loading:false}
	
	componentDidMount(){
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
			this.setState({ loading:false, page:page, total:res.total })
		})
		.catch( err =>{
			this.setState({ loading:false, page:0, total:0 })
		})
	}	
	
	edit = selected => {	
		this.props.setSelected(selected);
	}
	
	remove = (id,e) => {

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
			<div className="main-grid"> 
				<ListLoader show={this.state.loading}/>
				<table >
					<ListHeader />
					<ListBody data={this.props.data} edit={this.edit} remove={this.deleteOrder}/>
				</table>
				<ListFooter update={this.getOrders} page={this.state.page} max={this.state.total} />
			</ div>
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
