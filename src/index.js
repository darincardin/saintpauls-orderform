
import React from 'react';
import ReactDOM from 'react-dom';



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';




import MyBody from './jsx/Default/MyBody.jsx';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '/js/reducer.js'

import '/assets/css/index.scss';
import '/assets/css/progress.scss';



let store = createStore(reducer) 

ReactDOM.render( <Provider store={store}><MyBody /></Provider>, document.getElementById('app'));


