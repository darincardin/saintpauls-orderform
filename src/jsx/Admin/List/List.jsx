import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import Footer from '/jsx/Admin/Footer/Footer.jsx';
import Update from '/jsx/Admin/Update/Update.jsx';
import ListLoader from './ListLoader.jsx';

import OrderAPI from '/js/orderAPI.js';



var List = ({ state, setState, progressbar, loader }) => {

	var cancel = null;

	useEffect(() => {
		OrderAPI.progressbar = progressbar;
		
		window.addEventListener('resize', () => {
			if(cancel) clearTimeout(cancel);
			cancel = setTimeout( getOrders , 300);
		});
		
		getOrders();
	}, []);

	var getOrders = (page=state.page) => {
		loader.show();

        return OrderAPI.list(page).then(res => { 	
			setState({...res, page});	
		})
		.finally(loader.hide);
	}
	
	var open = order => {
		setState({order, showEdit:true});
	}
	
	var close = obj =>{
		if(obj.id) {	
            progressbar.show()
			
			OrderAPI.update(obj).then(res => { 
			    setState({ showEdit:false});
				return getOrders(state.page)
			})
			.then(progressbar.hide)
		}
		else setState({ showEdit:false});
	}

	var deleteOrder = id => {
		
		if(confirm(`Delete order ${id}?`) ) {
			progressbar.show()
			OrderAPI.delete(id).then(res =>{ 
				return getOrders(state.page)
			})
			.then(progressbar.hide)
		}
	}
	
	return (
			<div className="order-window">
				<ListLoader />
				<table className="mainGrid">
					<thead>
						<tr><td>ID</td>
						<td>First Name</td>
						<td>Last Name</td>
						<td>Quantity</td>
						<td>Phone</td>
						<td>Address</td>
						<td>Actions</td></tr>
					</thead>
					<tbody>
						{state.data && state.data.map( r =>  
							<tr key={r.id}>
								<td>{r.id}</td>
								<td>{r.fName}</td>
								<td>{r.lName}</td>
								<td>{r.quantity}</td>
								<td>{r.phone}</td>
								<td>{r.address}</td>
								<td>
									<a onClick={() => open(r) } > Edit </a> | 
									<a onClick={() => deleteOrder(r.id)} > Delete </a> 
								</td>
							</tr>  
						)}
					</tbody>
				</table>
				<Footer update={getOrders} page={state.page} max={state.total} />
				<Update show={state.showEdit} object={state.order} callback={close} />	
			</div>
	)	
}		


const mapStateToProps = (state, ownProps) => {
	return	{ state:state }
}

const mapDispatchToProps = (dispatch) => ({
    save: order => { dispatch({type:"SAVE", order})},
	setState: state =>{dispatch({type:"SET_STATE", state})},
	progressbar:{
		show: () => { dispatch({type:"SHOW"})},
		hide: () => { dispatch({type:"HIDE"})}
	},
	loader: {
		show: () => { dispatch({type:"LOADING"})},
		hide: () => { dispatch({type:"FINISHED"})}		
	}
})
export default connect(  mapStateToProps,  mapDispatchToProps)(List);