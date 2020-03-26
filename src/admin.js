require('file-loader?name=[name].[ext]!./admin.html');

import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import Admin from './jsx/Admin/Admin.jsx';



import '/assets/css/bootstrap.min.css';
import '/assets/css/responsive.css';
import '/assets/css/main.css';
import '/assets/css/admin.css';
import '/assets/css/table.css';

ReactDOM.render(<Admin></Admin>,    document.getElementById('app'));



