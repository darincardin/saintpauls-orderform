import React from 'react';
import {BrowserRouter as Router, Switch,  Route,Link} from "react-router-dom";
import tooltip from '../../../js/tooltip.js';
import form from '../../../js/form.js';
//
class Input extends React.Component {

	onWatch(){
		
		if(this.state.form.submitted) {
			
			if(this.state.form.errors[this.props.name]){
				if(this.state.form.errors[this.props.name] == "required") this.ttip.show("Required");
				if(this.state.form.errors[this.props.name] == "phone") this.ttip.show("Format is xxx-xxx-xxxx");		
			}
			else this.ttip.hide();
		}
	}

	constructor(props){
		super(props);
		
		this.onChange = this.onChange.bind(this);
		this.onWatch =  this.onWatch.bind(this);	
		this.validate = this.validate.bind(this);	
		this.props = props;
		
		this.state = {error: false, form: props.form};

	    this.elem = React.createRef();
	}
	
	
	onChange(event){

		var val = event.target.value.trim()
		
		var f = this.state.form;
		f[this.props.name] = val;

		this.setState({ form: f });
		this.validate(val);
	}
	
	componentWillReceiveProps(data){
		this.setState({form: data.form});
	}
	
	
	
	componentDidMount() {
	   this.validate();
	   this.ttip = tooltip(this.elem.current);
	   this.setState({form: this.state.form});
	}
		
	validate(val){
	
		if(this.props.required)  this.state.form.$required(this.props.name, val);
	}

	render(){
		var name = this.props.name;
		var submitted = this.state.form.submitted;
		var errors = this.state.form.errors[name];
		
		return (
		<div ref={this.elem} 
		     className={`form-group has-feedback ${ submitted && (!errors ? "has-success" : "has-error") } `} name={`my-${name}`} >
		   
			<input type="text" className="form-control" name={this.props.name} value={this.state.form[this.props.name]} onFocus={this.onWatch} onKeyUp={this.onWatch} onChange={this.onChange} />

			<span className="glyphicon glyphicon-ok form-control-feedback" ></span>
	        <span className="glyphicon glyphicon-remove form-control-feedback" ></span>
			<span id="inputSuccess4Status" className="sr-only">(success)</span>
		</div>
		)
	}
}			
export default Input;