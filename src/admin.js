import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";

import AdminBody from './jsx/AdminBody.jsx';

var html = <AdminBody></AdminBody>;

ReactDOM.render(html,    document.getElementById('app'));



