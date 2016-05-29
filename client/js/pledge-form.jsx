import React from 'react';
import Input from './input.jsx';

const PledgeForm = React.createClass({
  render: function() {
    return (
      <form className="c-pledge-form u-3/4@l">
        <span>„Wir versprechen,</span>
        {' '}
        <Input
          className="c-input--pledge"
          placeholder="eine Flüchtlingsfamilie als Paten zu unterstützen"
          tabindex="1"
          minLength={10}
        />
        <span>, wenn</span>
        {' '}
        <Input
          className="c-input--howmany"
          placeholder="10"
          tabindex="2"
          numberInput={true}
          minLength={1}
        />
        {' '}
        <Input
          className="c-input--who"
          placeholder="andere Personen"
          tabindex="3"
          minLength={6}
        />
        {' '}
        <Input
          className="c-input--what"
          placeholder="das Gleiche tun"
          tabindex="4"
          minLength={6}
        />
        <span>.“</span>
      </form>
    );
  }
});

export default PledgeForm;
