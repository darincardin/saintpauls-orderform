import React, { useEffect } from 'react';
import ErrorBoundary from 'react-error-boundary';
import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';
import List from './List/List.jsx';
import Update from '/jsx/Admin/Update/Update.jsx';
import OrderAPI from '/js/orderAPI.js';


class Admin extends React.Component {

	state = { data:[] }
	
	getData = (page, sort, amount)=>{
		return OrderAPI.list(page, sort, amount).then(res=>{
			this.setState({ data:res.data })
			return res;
		})
	}

	shouldComponentUpdate(nextProps, nextState){
		return true;
		//return !_.isEqual(this.state.selected, nextState.selected);		
	}
	
	setSelected = (selected) => {
		this.setState({selected: selected})	
	}
	


	onEdit = obj =>{
		
		
		
		
		obj.fName = "David"
		return OrderAPI.update(obj)
	}
	
	onDelete = obj =>{
		
		if(confirm(`Delete order ${obj.id}?`))
			return OrderAPI.delete(obj.id)
		
	}
	

	
	
	render = () => {
		
		return (	
			<>
				<Header showLogout={true}/>	
				<main>	
					<ErrorBoundary  FallbackComponent={<Error />} >
						<div className="order-window"> 
							<List data={this.state.data} getData={this.getData} amount={5}  >	
								<a action={this.onEdit}>Edit</a> |  <a action={this.onDelete}>Delete</a> 
							</List>
						</div>
						
					
					</ErrorBoundary>
				</main>	
				<Footer />
			</>
		);	
	}
}

export default Admin;

/*



*/

// 	<Background /> ProgressBar
	//<Update selected={this.state.selected} setSelected={this.setSelected} />	
//