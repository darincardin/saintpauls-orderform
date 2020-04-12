require('file-loader?name=[name].[ext]!./admin.html');

import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '/js/reducer.js'

import Admin from './jsx/Admin/Admin.jsx';


import '/assets/third-party/bootstrap.min.css';
import '/assets/css/index.css';
import '/assets/css/responsive.css';
import '/assets/css/form.css';
import '/assets/css/progress.css';

import '/assets/css/admin.css';
import '/assets/css/list.css';

let store = createStore(reducer) 
ReactDOM.render( <Provider store={store}><Admin/></Provider>, document.getElementById('app'));