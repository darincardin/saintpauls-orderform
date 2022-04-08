import React from 'react';
import PropTypes from 'prop-types';

import ListHeader from './ListHeader/ListHeader.jsx';
import ListBody from './ListBody/ListBody.jsx';
import ListFooter from './ListFooter/ListFooter.jsx';
import ListLoader from './ListLoader/ListLoader.jsx';
import ListError from './ListError/ListError.jsx';
import ListSearch from './ListSearch/ListSearch.jsx';
import {ListState, ListStore} from './ListState/ListState.js';


import './list.scss';
import './list.media.scss';




class List extends React.Component {
		
	state = null;
	constructor(props){
		super(props)
		this.ref = React.createRef()	
		debugger;
		this.state = ListState.get(this.ref);	
	}

	componentDidMount = ()=>{	
		
		ListStore.save(this.state)
		window.addEventListener('resize', this.handleEvent);
		this.getOrders();
	}
	
	handleEvent = () => {
		
		if(this.cancel) clearTimeout(this.cancel);
		
		this.cancel = setTimeout( ()=>{ 
			
			var page = this.state.getCurrentPage();
			
			this.getOrders(page);
		}, 300);
	}
	
	
	getOrders = (page = this.state.page, sort = this.state.sort, search = this.state.search) => {

		this.setState({loading:true }, ()=>{
			
			this.props.getData(page, sort, this.state.getPageSize(), search).then(res=>{		
				
				this.setState({ page, total:res.total, search, sort, loading:false }, ()=>{ 
					ListStore.save(this.state)
				
				 })	
			})
			.catch( ()=>{
				this.showError();
				this.setState({ loading:false, page:0})
				//this.setState({...ListState.DEFAULT_STATE})
			})							
		});
	}	    
	
	onActionClick = (row, action) =>{
		action(row).then( res=>{
			if(res) this.getOrders();
		});
	}
	
	onSearch = $event=>{		
		var search =  $event.currentTarget.value;
		this.setState({search})	
		
		if(this.cancel) clearTimeout(this.cancel);
		
		this.cancel = setTimeout( ()=>{ 
			this.getOrders(this.state.page, this.state.sort, search) 
		}, 300);	
	}
	
	
	showError = () =>{
		this.setState({error:true})
		setTimeout( ()=>{ 
			this.setState({error:false})
		}, 4000);			
	}
	
	render = () => {

		var height = this.state.getHeight();
		
		
		
	    return  (
			<div className="list" ref={this.ref} style={{height: height}}> 
			
				<ListError show={this.state.error} />

				<ListLoader show={this.state.loading} />
	
	
				<ListSearch value={this.state.search} onChange={this.onSearch}  />
	

		
				<table>
					<ListHeader labels={this.props.labels} update={this.getOrders} sort={this.state.sort} hasActions={this.props.children!=null} />
					<ListBody   labels={this.props.labels} data={this.props.data} children={this.props.children} onClick={this.onActionClick}   />
				</table>
					
				<ListFooter update={this.getOrders} listState={this.state} />
			</div>
		)
	}
}		

List.propTypes = {
	labels: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    getData: PropTypes.func.isRequired,
	action: PropTypes.func,
	amount: PropTypes.number,
};

export default List;
