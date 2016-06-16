import React from 'react';
import FacebookButton from './facebook-button.jsx';
import TwitterButton from './twitter-button.jsx';
import GoogleplusButton from './googleplus-button.jsx';
import XingButton from './xing-button.jsx';
import LinkedinButton from './linkedin-button.jsx';

const SocialMedia = React.createClass({
  render: function() {
    return (
      <ul className="c-social-media o-list-inline">
        <FacebookButton />
        <TwitterButton />
        <GoogleplusButton />
        <XingButton />
        <LinkedinButton />
      </ul>
    );
  }
});

export default SocialMedia;
