require('../style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import PledgeForm from './pledge-form.jsx';
import SocialMedia from './social-media.jsx';
import DropzoneDemo from './drop-zone-demo.jsx';

const el_app = document.getElementById('app');
const el_social = document.getElementById('socialmedia');
const el_drop_zone = document.getElementById('drop-zone');

if (el_app) {
  ReactDOM.render(
    <PledgeForm />,
    el_app
  );
}

if (el_social) {
  ReactDOM.render(
    <SocialMedia url="http://www.example.com" />,
    el_social
  );
}

if (el_drop_zone) {
  ReactDOM.render(
    <DropzoneDemo />,
    el_drop_zone
  );
}
