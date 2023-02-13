import React from 'react';
import PropTypes from 'prop-types';

import ListHeader from './ListHeader/ListHeader.jsx';
import ListBody from './ListBody/ListBody.jsx';
import ListFooter from './ListFooter/ListFooter.jsx';
import ListLoader from './ListLoader/ListLoader.jsx';
import ListSearch from './ListSearch/ListSearch.jsx';
import ListState from './ListState/ListState.js';
import ListStore from './ListState/ListStore.js';

import MyError from '../widget/MyError/MyError.jsx';

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
			this.getOrders({ page: this.state.getCurrentPage() })		
		}, 300);
	}
	
	getOrders = (data = {}) => {
		this.setState( {loading:true, ...data}, ()=>{
			this.props.getData(this.state.page, this.state.sort.get(), this.state.getPageSize(), this.state.search).then(res=>{					
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
	
	handleError = () =>{	
		this.setState( {error:true, loading:false, page:0} )
	}
	
	render = () => {

		var height = this.state.getHeight();
		
	    return  (
			<div className="list" ref={this.ref} style={{height: height}}> 
			
				<MyError  error={this.state.error} complete={()=>this.setState({error: false})}  /> 
				<ListLoader show={this.state.loading} />	

				<ListSearch value={this.state.search} onChange={this.getOrders}  />

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
	action: PropTypes.func
};

export default List;
