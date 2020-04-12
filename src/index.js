require('file-loader?name=[name].[ext]!./index.html');

import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';

import MyBody from './jsx/Default/MyBody.jsx';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '/js/reducer.js'

import '/assets/third-party/bootstrap.min.css';
import '/assets/css/index.css';
import '/assets/css/responsive.css';
import '/assets/css/form.css';
import '/assets/css/progress.css';



let store = createStore(reducer) 

ReactDOM.render( <Provider store={store}><MyBody /></Provider>, document.getElementById('app'));

