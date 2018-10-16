import React from 'react';
import Input from './Input';

export default class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      txt: props.title,
      inEdition: false
    };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({ txt: e.target.value });
  }
  editionOn() {
    this.setState({ inEdition: true });
  }
  editionOff() {
    if (this.state.txt == '') {
      this.setState({ txt: 'Title' });
    }
    this.setState({ inEdition: false });
  }
  render() {
    return (
      <header
        onClick={this.editionOn.bind(this)}
        onBlur={this.editionOff.bind(this)}
      >
        {this.state.inEdition ? (
          <Input
            className="inputTitle"
            update={this.update.bind(this)}
            title={this.state.txt}
          />
        ) : (
          this.state.txt
        )}
      </header>
    );
  }
}
