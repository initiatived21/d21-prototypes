require('../style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import PledgeForm from './pledge-form.jsx';
import SocialMedia from './social-media.jsx';

const el_app = document.getElementById('app');

if (el_app) {
  ReactDOM.render(<PledgeForm />, el_app);
}

const el_social = document.getElementById('socialmedia');

if (el_social) {
  ReactDOM.render(<SocialMedia />, el_social);
}
