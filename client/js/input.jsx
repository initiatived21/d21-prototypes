import React from 'react';

const Input = React.createClass({
  getInitialState: function() {
    return {
      edit_mode: false,
      value: ''
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
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    })
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.myTextInput !== null) {
      this.myTextInput.focus();
    }
  },

  render: function() {
    const { placeholder, tabindex } = this.props;
    const { edit_mode, value } = this.state;

    return (
      <div className={`c-input ${value ? 'c-input--valid' : 'c-input--empty'} u-1/3`}>
        <p
          tabIndex={ tabindex }
          style={{ display: edit_mode === true ? 'none' : 'block' }}
          onClick={this.enterEditMode}
          title={value}
        >
          {value ? value : placeholder }
        </p>
        <input
          type="text"
          placeholder={ placeholder }
          tabIndex={ tabindex }
          ref={(ref) => this.myTextInput = ref}
          onBlur={this.enterDisplayMode}
          onFocus={this.enterEditMode}
          onChange={this.handleChange}
          style={{ display: edit_mode === true ? 'block' : 'none' }}
          value={value}
        />
      </div>
    );
  }
});

export default Input;
