import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";

import MyLogin from './jsx/MyLogin.jsx';

var html = <MyLogin></MyLogin>;

ReactDOM.render(html,    document.getElementById('app'));



