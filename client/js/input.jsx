import React from 'react';

const Input = React.createClass({
  getInitialState: function() {
    return {
      edit_mode: true,
      value: ''
    };
  },
  is_valid: function() {
    return (this.state.value.length >= this.props.minLength)
  },
  modifierClassName: function() {
    if (this.state.value === '') {
      return 'c-input--empty';
    }
    else {
      return (this.is_valid() ? 'c-input--valid' : 'c-input--invalid')
    }
  },
  handleSpanClick: function() {
    this.setState({
      edit_mode: true
    });
  },
  handleSpanKeyPress: function(event) {
    if (event.charCode === 13) {
      this.setState({
        edit_mode: true
      });
    }
  },
  handleInputFocus: function() {
    this.setState({
      edit_mode: true
    });
  },
  handleInputBlur: function() {
    if (this.state.value !== '' && this.is_valid()) {
      this.setState({
        edit_mode: false
      });
    }
  },
  handleInputChange: function(event) {
    this.setState({
      value: event.target.value
    })
  },
  handleInputKeyPress: function(event) {
    if (event.charCode === 13) {
      this.handleInputBlur()
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.myTextInput !== null) {
      this.myTextInput.focus();
    }
  },

  render: function() {
    const { placeholder, tabindex, className, numberInput } = this.props;
    const { edit_mode, value } = this.state;

    return (
      <div className={`c-input ${className} ${this.modifierClassName()}`}>
        <span
          tabIndex={ tabindex }
          style={{ display: edit_mode === true ? 'none' : 'inline' }}
          onClick={this.handleSpanClick}
          onKeyPress={this.handleSpanKeyPress}
        >
          {value ? value : placeholder }
        </span>
        <input
          type={ numberInput ? 'number' : 'text'}
          placeholder={ placeholder }
          tabIndex={ tabindex }
          ref={(ref) => this.myTextInput = ref}
          onBlur={this.handleInputBlur}
          onFocus={this.handleInputFocus}
          onChange={this.handleInputChange}
          onKeyPress={this.handleInputKeyPress}
          style={{ display: edit_mode === true ? 'inline' : 'none' }}
          value={value}
        />
      </div>
    );
  }
});

export default Input;
