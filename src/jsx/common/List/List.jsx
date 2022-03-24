import React from 'react';
import PropTypes from 'prop-types';

import ListHeader from './ListHeader/ListHeader.jsx';
import ListBody from './ListBody/ListBody.jsx';
import ListFooter from './ListFooter/ListFooter.jsx';
import ListLoader from './ListLoader/ListLoader.jsx';
import ListState from './ListState/ListState.js';


import './list.scss';
import './list.header.scss';
import './list.spinner.scss';
import './list.media.scss';

const ROW_SIZE = 40;


class List extends React.Component {
		
	//pageSize = 0;   
	state = { ...new ListState() }

	constructor(props){
		super(props)
		this.ref = React.createRef()	
	}

	setHeight = ()=>{
		this.height = ((this.state.pageSize + 3 ) * ROW_SIZE ) + "px" ;		
	}

	generateAmount = () => {			
		this.setAmount();
		this.setHeight();
	}
	
	setAmount(){
		var height = this.ref.current.parentElement.offsetHeight - 10 ;
		var amount =  Math.floor((height/ROW_SIZE)) -3;
		this.state.pageSize = amount >= 2 ? amount : 2;
		
	}
	
	componentDidMount = ()=>{

		window.addEventListener('list.update', this.handleEvent);

		if(this.props.amount) this.state.pageSize = this.props.amount;
		else {
			this.generateAmount();
			window.addEventListener('resize', this.handleEvent);
		}
		
		this.setHeight();
			
		this.getOrders();
	}
	
	handleEvent = () => {
		if(this.cancel) clearTimeout(this.cancel);
		
		this.cancel = setTimeout( ()=>{ 
			this.generateAmount();
			this.getOrders() 
		}, 300);
	}
	
	getOrders = (page = this.state.page, sort = this.state.sort, search = this.state.search) => {
	
		var obj = {loading:true };
			debugger;
		var totalPages = Math.ceil(this.state.total /  this.state.pageSize);
		
		if(this.state.page > totalPages-1) obj['page'] = page = totalPages-1;

	
		this.setState(obj, ()=>{
			
			this.props.getData(page, sort, this.state.pageSize, search).then(res=>{			
				this.setState({ page, total:res.total, search, sort, loading:false }, ()=>{ ListState.set(this.state) })	
			})
			.catch( ()=>{
				this.setState({...ListState.DEFAULT_STATE})
			})							
		});
	}	    
	
	onActionClick = (row, action) =>{
		var promise = action(row);
		
		if(promise)
			promise.then( res=>{
				this.getOrders()
			});
	}
	
	onSearch = ($event)=>{		
		var value =  $event.currentTarget.value;
		this.setState({search: value})	
		
		if(this.cancel) clearTimeout(this.cancel);
		
		this.cancel = setTimeout( ()=>{ 
			this.getOrders(this.state.page, this.state.sort, value) 
		}, 300);	
		
	}
	
	render = () => {
	    return  (
			<div  className="list" ref={this.ref} style={{height: this.height}}> 
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
