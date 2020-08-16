import React from 'react';
import ReactDOM from 'react-dom';

import {Provider, store} from 'reducer'

import MyBody from './jsx/Default/MyBody.jsx';

import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

import '/assets/css/index.scss';
import '/assets/css/slide.scss';



ReactDOM.render( <Provider store={store}><MyBody /></Provider>, document.getElementById('app'));


