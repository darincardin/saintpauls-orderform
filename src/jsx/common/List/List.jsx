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
		this.state = ListState.get(this.ref);	
	}

	componentDidMount = ()=>{	
		window.addEventListener('resize', this.handleEvent);
		this.getOrders();
	}
	
	handleEvent = () => {	
		if(this.cancel) clearTimeout(this.cancel);
		
		this.cancel = setTimeout( ()=>{ 				
			this.setState( {page: this.state.getCurrentPage()}, this.getOrders );	
		}, 300);
	}
	
	getOrders = () => {

		this.setState( {loading:true}, ()=>{
			this.props.getData(this.state.page, this.state.sort, this.state.getPageSize(), this.state.search).then(res=>{					
				this.setState({ total:res.total, loading:false }, ()=>{ 
					ListStore.save(this.state)
				})	
			})
			.catch(this.handleError)							
		});
	}	    
	
	onActionClick = (row, action) =>{
		action(row).then( res=>{
			if(res) this.getOrders();
		});
	}
	
	onSearch = search => {		
		this.setState( {search, page:0}, this.getOrders );	
	}	
		
	onSort = sort => {
		this.setState( {sort}, this.getOrders ); 
	}
	
	goToPage = page => {
		this.setState( {page}, this.getOrders ); 	
	}
	
	handleError = () =>{		
		this.setState( {error:true, loading:false, page:0} )
		setTimeout( ()=>{ this.setState({error:false}) }, 4000);			
	}
	
	render = () => {

		var height = this.state.getHeight();
		
	    return  (
			<div className="list" ref={this.ref} style={{height: height}}> 
			
				<ListError  show={this.state.error} />
				<ListLoader show={this.state.loading} />	
				<ListSearch value={this.state.search} onChange={this.onSearch}  />

				<table>
					<ListHeader labels={this.props.labels} update={this.onSort} sort={this.state.sort} hasActions={this.props.children!=null} />
					<ListBody   labels={this.props.labels} data={this.props.data} children={this.props.children} onClick={this.onActionClick}   />
				</table>
					
				<ListFooter update={this.goToPage} listState={this.state} />
			</div>
		)
	}
}		

List.propTypes = {
	labels: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    getData: PropTypes.func.isRequired,
	action: PropTypes.func
};

export default List;
