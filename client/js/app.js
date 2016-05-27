require('../style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input.jsx';


const el = document.getElementById('app');

if (el) {
  ReactDOM.render(
    <form>
      <p>Wir versprechen,</p>
      <Input placeholder="20 Laptops zu spenden" tabindex="1" />
      <p>, wenn mindestens 20 Freiwillige</p>
      <Input placeholder="die Laptops transportieren" tabindex="2" />
      <p>.</p>
    </form>,
    el);
}
