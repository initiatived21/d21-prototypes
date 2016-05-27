import React from 'react';

const Input = React.createClass({
  getInitialState: function() {
    return {
      edit_mode: false
    };
  },
  enterEditMode: function() {
    this.setState({
      edit_mode: true
    });
  },

  render: function() {
    if (this.state.edit_mode) {
      return (
        <div>
          <input type="text" defaultValue={this.props.value} />
        </div>
      );
    }
    else {
      return (
        <div>
          <p onClick={this.enterEditMode()}>{this.props.value}</p>
          <input style={{ display: 'none' }} type="text" defaultValue={this.props.value} />
        </div>
      );
    }
  }
});

export default Input;
