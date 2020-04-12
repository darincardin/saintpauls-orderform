import React, { useEffect } from 'react';
import ErrorBoundary from 'react-error-boundary';
import {Header, Footer, ProgressBar, Error, Background} from '/jsx/common';
import List from '/jsx/Admin/List/List.jsx';
import Update from '/jsx/Admin/Update/Update.jsx';

class Admin extends React.Component {

	state = { selected:null }
	
	shouldComponentUpdate(nextProps, nextState){
		return !_.isEqual(this.state.selected, nextState.selected);		
	}
	
	setSelected = (selected) => {
		this.setState({selected: selected})	
	}
	
	render = () => {
		return (	
			<React.Fragment>
				<Header showLogout={true}/>
				<Background />
				<main>	
					<ErrorBoundary  FallbackComponent={<Error />} >
						<div className="order-window"> 
							<List setSelected={this.setSelected} />
						</div>
					</ErrorBoundary>
				</main>	
				<Footer />
				<Update selected={this.state.selected} setSelected={this.setSelected} />	

			</React.Fragment>
		);	
	}
}

export default ProgressBar(Admin);

