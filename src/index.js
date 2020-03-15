
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";

import MyBody from './jsx/MyBody.jsx';

var html = <MyBody></MyBody>;

ReactDOM.render(html,    document.getElementById('app'));


