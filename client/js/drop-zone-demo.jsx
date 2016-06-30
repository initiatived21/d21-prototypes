import React from 'react';
import Dropzone from 'react-dropzone';

export default React.createClass({
  getInitialState: function () {
      return {
        files: []
      };
  },

  onDrop: function (files) {
    this.setState({
      files: files
    });
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
        {this.state.files.length > 0 ? <div>
        <h2>Uploading {this.state.files.length} files...</h2>
        <div>{this.state.files.map((file) => <img src={file.preview} style={{ width: '150px' }} /> )}</div>
        </div> : null}
      </div>
    );
  }
});
