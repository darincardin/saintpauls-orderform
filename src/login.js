require('file-loader?name=[name].[ext]!./login.html');

import 'bootstrap';


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '/js/reducer.js'

import Login from '/jsx/Login/Login.jsx';

import '/assets/third-party/bootstrap.min.css';
import '/assets/css/index.css';
import '/assets/css/responsive.css';
import '/assets/css/form.css';
import '/assets/css/progress.css';
import '/assets/css/form.css';

import '/assets/css/login.css';

let store = createStore(reducer) 
ReactDOM.render(<Provider store={store}><Login/></Provider>,    document.getElementById('app'));



