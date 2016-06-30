import React from 'react';
import FacebookButton from './facebook-button.jsx';
import TwitterButton from './twitter-button.jsx';
import GoogleplusButton from './googleplus-button.jsx';
import XingButton from './xing-button.jsx';
import LinkedinButton from './linkedin-button.jsx';

export default React.createClass({
  propTypes: {
    url: React.PropTypes.string,
    twitterText: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      url: global.document.location.href,
      twitterText: 'Wir versprechen:'
    };
  },

  handleClick: function(e) {
    e.preventDefault();

    const anchor = e.currentTarget;
    const url = anchor.href;

    const windowName = '_blank';
    const windowSizeX = '600';
    const windowSizeY = '460';
    const windowSize = `width=${windowSizeX},height=${windowSizeY}`;

    global.window.open(url, windowName, windowSize);
  },

  render: function() {
    const url = this.props.url;
    const twitterText = encodeURIComponent(this.props.twitterText);

    return (
      <ul className="c-social-media o-list-inline">
        <FacebookButton url={url} handleClick={this.handleClick} />
        <TwitterButton url={url} handleClick={this.handleClick} text={twitterText} />
        <GoogleplusButton url={url} handleClick={this.handleClick} />
        <XingButton url={url} handleClick={this.handleClick} />
        <LinkedinButton url={url} handleClick={this.handleClick} />
      </ul>
    );
  }
});
