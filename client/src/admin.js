import React from 'react';
import ReactDOM from 'react-dom';

import {Provider, store} from 'reducer'

 window.jQuery = window.$ = require('jquery');	

import Admin from './jsx/Admin/Admin.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import '/assets/css/index.scss';
import '/assets/css/admin.scss';


ReactDOM.render( <Provider store={store}><Admin/></Provider>, document.getElementById('app'));