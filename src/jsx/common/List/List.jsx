import React from 'react';
import PropTypes from 'prop-types';

import ListHeader from './ListHeader/ListHeader.jsx';
import ListBody from './ListBody/ListBody.jsx';
import ListFooter from './ListFooter/ListFooter.jsx';
import ListLoader from './ListLoader/ListLoader.jsx';
import ListState from './ListState/ListState.js';
import ListHeight from './list.height.js';

import './list.scss';
import './list.header.scss';
import './list.spinner.scss';
import './list.media.scss';




class List extends React.Component {
		
	state = null;

	
	
	constructor(props){
		super(props)
		this.ref = React.createRef()	
		this.state = new ListState(this.ref);
	}

	updateList = () => {
		this.setState({pageSize:ListHeight.updatePageSize(this.ref)})		
		this.getOrders();
	}	

	componentDidMount = ()=>{	
		window.addEventListener('resize', this.handleEvent);
		this.updateList();
	}
	
	handleEvent = () => {
		
		if(this.cancel) clearTimeout(this.cancel);
		
		this.cancel = setTimeout( ()=>{ 
			this.updateList();
		}, 300);
	}
	
	getOrders = (page = this.state.page, sort = this.state.sort, search = this.state.search) => {
		
		var obj = {loading:true };

		var totalPages = Math.ceil(this.state.total /  this.state.pageSize);
		
		if(this.state.page > totalPages-1) {
			obj['page'] = page =   (totalPages>0) ? totalPages-1 : 0  ;	
		}

		this.setState(obj, ()=>{
			
			this.props.getData(page, sort, this.state.pageSize, search).then(res=>{			
				this.setState({ page, total:res.total, search, sort, loading:false }, ()=>{ //ListState.set(this.state)
				
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
		
		var promise = action(row);
		
		if(promise)
			action(row).then( res=>{
				this.getOrders()
			});
	}
	
	onSearch = $event=>{		
		var value =  $event.currentTarget.value;
		this.setState({search: value})	
		
		if(this.cancel) clearTimeout(this.cancel);
		
		this.cancel = setTimeout( ()=>{ 
			this.getOrders(this.state.page, this.state.sort, value) 
		}, 300);	
	}
	
	
	showError = () =>{
		this.setState({error:true})
		setTimeout( ()=>{ 
			this.setState({error:false})
		}, 4000);		
		
	}
	
	render = () => {
		var errorMsg = 'error-msg ' +  (this.state.error?'show':'');
		
	    return  (
			<div  className="list" ref={this.ref}  style={{height: this.state.height}}> 
			
				<div className={errorMsg} >
					<div className="alert alert-danger">
						<strong>Error:</strong> List could not be loaded
					</div>
				</div>		

				<ListLoader show={this.state.loading} />
	
				<div className="input-group search">
						<span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
						<input  type="text" className="form-control"  name="search" placeholder="Search" value={this.state.search} onChange={this.onSearch} />
				</div>					
		
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
