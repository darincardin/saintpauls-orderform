import React from 'react';
import PropTypes from 'prop-types';

import ListHeader from './ListHeader/ListHeader.jsx';
import ListBody from './ListBody/ListBody.jsx';
import ListFooter from './ListFooter/ListFooter.jsx';
import ListLoader from './ListLoader/ListLoader.jsx';
import ListState from './ListState/ListState.js';


import './list.scss';


const ROW_SIZE = 40;


class List extends React.Component {
		
	AMOUNT = 0;   
	state = { ...new ListState() }

	constructor(props){
		super(props)
		this.ref = React.createRef()	
	}

	setHeight = ()=>{
		this.height = ((this.AMOUNT + 2) * ROW_SIZE) + "px" ;		
	}

	generateAmount = () => {	
		var height = this.ref.current.parentElement.offsetHeight;
		this.AMOUNT = Math.floor((height/ROW_SIZE) - 2);
		this.setHeight();
	}
	
	componentDidMount = ()=>{

		window.addEventListener('list.update', this.handleEvent);

		if(this.props.amount) this.AMOUNT = this.props.amount;
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
	
	getOrders = (page = this.state.page, sort = this.state.sort) => {
	
		this.setState({loading:true})

		this.props.getData(page, sort, this.AMOUNT).then(res=>{
			this.setState({ page, total:res.total,  sort:sort, loading:false },
				()=>{  ListState.set(this.state)  }
			)	
		})
		.catch( err =>{
			this.setState({...ListState.DEFAULT_STATE})
		})	
	}	    
	
	onActionClick = (row, action) =>{
		var promise = action(row);
		
		if(promise)
			promise.then( res=>{
				this.getOrders()
			});
	}
	
	render = () => {
	    return  (
			<div ref={this.ref} className="list" style={{height: this.height}}> 
				<ListLoader show={this.state.loading} />
				
				<table>
					<ListHeader labels={this.props.labels} update={this.getOrders} sort={this.state.sort} hasActions={this.props.children!=null} />
					<ListBody   labels={this.props.labels} data={this.props.data} children={this.props.children} onClick={this.onActionClick}   />
				</table>
				
				<ListFooter update={this.getOrders} page={this.state.page} max={this.state.total} />
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
