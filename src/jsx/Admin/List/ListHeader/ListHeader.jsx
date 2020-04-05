import React from 'react';
import ReactDOM from 'react-dom';
import TableLink from '../TableLink/TableLink.jsx';

var ListHeader = props =>{
	
	
	return (
		<thead>
			<tr><td>ID</td>
			<td>First Name</td>
			<td>Last Name</td>
			<td>Quantity</td>
			<td>Phone</td>
			<td>Address</td>
			<td>Actions</td></tr>
		</thead>
	)
}

export default ListHeader;
