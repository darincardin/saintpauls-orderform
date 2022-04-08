import React from 'react';


class ListSearch extends React.Component {
		

	render() {
		return (
			<div className="input-group search">
				<span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
				<input  type="text" className="form-control"  name="search" placeholder="Search" value={this.props.value} onChange={this.props.onChange} />
			</div>		
		)	
	}
}		

export default ListSearch;
