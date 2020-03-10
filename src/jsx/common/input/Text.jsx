
import React from 'react';

import tooltip from '../../../js/tooltip.js';
import form from '../../../js/form.js';
import Context from '../../../js/context.js';

class Text extends React.Component {
    static contextType = Context;

	constructor(props){
		super(props);
		this.props = props;
	    this.elem = React.createRef();
	}
	
	onWatch = () =>{
		
		var form = this.context.state.form;
		
		if(form.$submitted) {
		
			if(form.$errors[this.props.name]){
				
				if(form.$errors[this.props.name] == "required") this.ttip.show("Required");
				if(form.$errors[this.props.name] == "phone") this.ttip.show("Format is xxx-xxx-xxxx");		
			}
			else this.ttip.hide();
		}
	}
	
	onChange = (e)=>{
		this.context.state.change(event);
		
		this.validate( event.target.value.trim());	
	}
	
	componentDidMount() {
	   this.validate(this.context.state.form[this.props.name]);
	   this.ttip = tooltip(this.elem.current);
	}
		
	validate = val => {

		var result = false;

		if(this.props.validate) result = this.props.validate(val);

		if(!result && this.props.required)  this.context.state.form.$required(this.props.name, val);
	}

	render(){ 
		var submitted = this.context.state.form.$submitted;
		var errors = this.context.state.form.$errors[this.props.name];
		
		var attribs = {
			type: this.props.type || "text",
			name: this.props.name,
			value: this.context.state.form[this.props.name],
			onFocus:this.onWatch,
			onKeyUp:this.onWatch,
			onChange:this.onChange,
		}

		return (
		<Context.Consumer>
		{ context => (
			
			<div ref={this.elem} className={`form-group has-feedback ${ submitted && (!errors ? "has-success" : "has-error") } `} name={`my-${this.props.name}`} >
				
				<input className="form-control" {...attribs} />
				<span className="glyphicon glyphicon-ok form-control-feedback" ></span>
				<span className="glyphicon glyphicon-remove form-control-feedback" ></span>
				<span id="inputSuccess4Status" className="sr-only">(success)</span>
			</div>
		)}
		</Context.Consumer>
		)
	}
}			
export default Text;

