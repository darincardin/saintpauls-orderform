


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '/js/reducer.js'

import Login from '/jsx/Login/Login.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import '/assets/css/index.scss';
import '/assets/css/login.scss';

let store = createStore(reducer) 
ReactDOM.render(<Provider store={store}><Login/></Provider>,    document.getElementById('app'));



