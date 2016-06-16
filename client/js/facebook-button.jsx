import React from 'react';

const FacebookButton = React.createClass({
  render: function() {
    const { url, handleClick } = this.props;

    return (
      <li>
        <a
          className="c-social-media__button c-social-media__button--facebook"
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          onClick={handleClick}
        >
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/>
          </svg>
        </a>
      </li>
    );
  }
});

export default FacebookButton;