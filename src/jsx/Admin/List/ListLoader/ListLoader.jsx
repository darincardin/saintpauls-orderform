import React from 'react';
import ReactDOM from 'react-dom';



var ListLoader = props => {
	return (
		<>{props.show && <div className="table-loader">
		
			<div> <i class="glyphicon glyphicon-cog spin" ></i></div>
		</div>}</>			
	)	
}		

export default ListLoader;