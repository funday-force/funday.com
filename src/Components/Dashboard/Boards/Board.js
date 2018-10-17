import React from 'react';
import List from './List';

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="lists">
        <List title="Status" id={1} />
        <List title="Text" id={2} />
        <List title="Date" id={3} />
      </div>
    );
  }
}
