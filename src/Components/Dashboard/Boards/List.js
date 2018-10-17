import React from 'react';
import Header from './Header';
import Items from './Items';

export default class List extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <div className="list">
        <button className="dots">
          <span />
          <span />
          <span />
        </button>
        <Header title={this.props.title} />
        <Items title={this.props.title} id={this.props.id} />
      </div>
    );
  }
}
