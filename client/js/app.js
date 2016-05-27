require('../style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input.jsx';


const el = document.getElementById('app');

if (el) {
  ReactDOM.render(<Input />, el);
}
