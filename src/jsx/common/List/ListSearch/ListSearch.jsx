import React from 'react';


class ListSearch extends React.Component {
	state = {value:""}
		//this.props.onChange
	onSearch = $event => {		
		debugger;
		this.setState({value: $event.currentTarget.value})	
		
		if(this.cancel) clearTimeout(this.cancel);
		
		this.cancel = setTimeout( ()=>{ 
			
			this.props.onChange({search:this.state.value});
			
		}, 300);	
	}			
		

	render() {
		return (
			<div className="input-group search">
				<span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
				<input  type="text" className="form-control"  name="search" placeholder="Search" value={this.state.value} onChange={this.onSearch} />
			</div>		
		)	
	}
}		

export default ListSearch;
