
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '/js/reducer.js'

import Admin from './jsx/Admin/Admin.jsx';


import '/assets/css/index.scss';
import '/assets/css/progress.scss';
import '/assets/css/admin.scss';

let store = createStore(reducer) 
ReactDOM.render( <Provider store={store}><Admin/></Provider>, document.getElementById('app'));