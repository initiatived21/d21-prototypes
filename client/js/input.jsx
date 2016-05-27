import React from 'react';

const Input = React.createClass({
  getInitialState: function() {
    return {
      edit_mode: false,
      value: 'Test'
    };
  },
  enterEditMode: function() {
    this.setState({
      edit_mode: true
    });
  },
  enterDisplayMode: function() {
    this.setState({
      edit_mode: false
    })
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.myTextInput !== null) {
      this.myTextInput.focus();
    }
  },

  render: function() {
    if (this.state.edit_mode) {
      return (
        <div>
          <input ref={(ref) => this.myTextInput = ref} onBlur={this.enterDisplayMode} type="text" value={this.state.value} />
        </div>
      );
    }
    else {
      return (
        <div className="c-input">
          <p onClick={this.enterEditMode}>{this.state.value}</p>
          <input style={{ display: 'none' }} type="text" value={this.state.value} />
        </div>
      );
    }
  }
});

export default Input;
