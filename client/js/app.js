require('../style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import PledgeForm from './pledge-form.jsx';

const el = document.getElementById('app');

if (el) {
  ReactDOM.render(<PledgeForm />, el);
}
