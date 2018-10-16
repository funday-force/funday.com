import React from 'react';

const Input = props => (
  <input
    autoFocus
    type="text"
    className="text"
    onChange={props.update.bind(this)}
    value={props.title}
  />
);

export default Input;
