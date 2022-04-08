import React from 'react';

import './list.error.scss';

class ListError extends React.Component {
		

	render() {
	
		return (
			<div className={'error-msg ' +  (this.props.show?'show':'')} >
				<div className="alert alert-danger">
						<strong>Error:</strong> List could not be loaded
				</div>
			</div>			
		)	
	}
}		

export default ListError;
