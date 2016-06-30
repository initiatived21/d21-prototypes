import React from 'react';
import Dropzone from 'react-dropzone';

export default React.createClass({
  onDrop: function(files) {
    console.log('Received files: ', files);
  },
  render: function() {
    return (
      <div>
        <Dropzone
          className="c-drop-zone"
          activeClassName="c-drop-zone--active"
          onDrop={this.onDrop}
          multiple={false}
          accept="image/jpeg,image/png"
        >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    );
  }
});
