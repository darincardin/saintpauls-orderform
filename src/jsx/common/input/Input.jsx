import React from 'react';
import {BrowserRouter as Router, Switch,  Route,Link} from "react-router-dom";
import tooltip from '../../../js/tooltip.js';
import form from '../../../js/form.js';

import Context from '../../../js/context.js';

class Input extends React.Component {
    static contextType = Context;

	onWatch = () =>{
		if(this.context.state.form.$submitted) {
		
			if(this.context.state.form.$errors[this.props.name]){
				if(this.context.state.form.$errors[this.props.name] == "required") this.ttip.show("Required");
				if(this.context.state.form.$errors[this.props.name] == "phone") this.ttip.show("Format is xxx-xxx-xxxx");		
			}
			else this.ttip.hide();
		}
	}

	constructor(props){
		super(props);
		this.props = props;
	    this.elem = React.createRef();
	}
	
	onChange = (e)=>{
		this.context.state.change(event)
		this.validate( event.target.value.trim());	
	}
	
	componentDidMount() {
	   this.validate();
	   this.ttip = tooltip(this.elem.current);
	}
		
	validate = (val) => {
		if(this.props.required)  this.context.state.form.$required(this.props.name, val);
	}

	render(){

		var name = this.props.name;
		var submitted = this.context.state.form.$submitted;
		var errors = this.context.state.form.$errors[name];

		return (
		<Context.Consumer>
		{ context => (
			
			<div ref={this.elem} 
				 className={`form-group has-feedback ${ submitted && (!errors ? "has-success" : "has-error") } `} name={`my-${name}`} >
				
				<input type="text" className="form-control" name={this.props.name} defaultValue={ context.state.form[name] } onFocus={this.onWatch} onKeyUp={this.onWatch}   onChange={this.onChange} />
				
				<span className="glyphicon glyphicon-ok form-control-feedback" ></span>
				<span className="glyphicon glyphicon-remove form-control-feedback" ></span>
				<span id="inputSuccess4Status" className="sr-only">(success)</span>
			</div>
		)}
		</Context.Consumer>
		)
	}
}			
export default Input;