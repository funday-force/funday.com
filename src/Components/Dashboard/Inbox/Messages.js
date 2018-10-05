import React, { Component } from 'react';
import './Messages.css';

export default class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editting: false
    };
  }

  edit(event) {
    const { text } = this.state;
    const { id, edit } = this.props;
    console.log(id);
    if (event.key === 'Enter' && text.length !== 0) {
      edit(id, text);
      this.setState({ editting: false });
    }
  }

  render() {
    let mappedMessages = this.props.messages.map((message, i) => {
      return (
        <div className="container" key={message.message_id}>
          <div className="message-container">
            <img
              className="message-sender"
              src={this.props.user.picture}
              alt=""
            />
            <span className="sender-name">{this.props.user.user_name}</span>
            <p className="message">
              {this.state.editting ? (
                <input
                  className="bg-light text-dark"
                  value={this.props.message}
                  onChange={this.handleChange}
                  onKeyPress={this.edit}
                />
              ) : (
                <span>{message.message}</span>
              )}
            </p>
            <i
              className="fa fa-trash trash-icon"
              onClick={() => this.props.deleteMessage(message.message_id)}
            />
            <i
              className="fa fa-edit edit-icon"
              onClick={() => this.setState({ editting: !this.state.editting })}
            />

            <div className="message-right">
              <p className="date">{message.date}</p>
            </div>
            <i className="fa fa-check-square checkmark" />
          </div>
        </div>
      );
    });
    return <div>{mappedMessages}</div>;
  }
}
