import React from 'react';

const GoogleplusButton = React.createClass({
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
    return (
      <li>
        <a
          className="c-social-media__button c-social-media__button--googleplus"
          href="https://plus.google.com/share?url=http://www.example.com"
          onClick={this.handleClick}
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <g>
              <path d="M5.09 7.273v1.745H7.98c-.116.75-.873 2.197-2.887 2.197-1.737 0-3.155-1.44-3.155-3.215S3.353 4.785 5.09 4.785c.99 0 1.652.422 2.03.786l1.382-1.33c-.887-.83-2.037-1.33-3.41-1.33C2.275 2.91 0 5.184 0 8s2.276 5.09 5.09 5.09c2.94 0 4.888-2.065 4.888-4.974 0-.334-.036-.59-.08-.843H5.09zM16 7.273h-1.455V5.818H13.09v1.455h-1.454v1.454h1.455v1.455h1.455V8.727H16"/>
            </g>
          </svg>
        </a>
      </li>
    );
  }
});

export default GoogleplusButton;
