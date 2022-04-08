import React from 'react';

import './list.loader.scss';

class ListLoader extends React.Component {
		

	render() {
		return (
		<>
			{this.props.show && 
				<div className="table-loader">
					<div> <i className="glyphicon glyphicon-cog spin" ></i></div>
				</div>
			}
		</>		
		)	
	}
}		

export default ListLoader;
