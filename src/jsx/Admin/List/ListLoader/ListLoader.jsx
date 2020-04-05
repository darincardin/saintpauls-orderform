import React from 'react';
import ReactDOM from 'react-dom';



var ListLoader = props => {
	return (
		<>{props.show && <div className="table-loader"></div>}</>			
	)	
}		

export default ListLoader;