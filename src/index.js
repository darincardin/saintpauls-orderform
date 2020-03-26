require('file-loader?name=[name].[ext]!./index.html');

import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import MyBody from './jsx/Default/MyBody.jsx';

import '/assets/css/bootstrap.min.css';
import '/assets/css/responsive.css';
import '/assets/css/main.css';

ReactDOM.render(<MyBody></MyBody>,    document.getElementById('app'));

