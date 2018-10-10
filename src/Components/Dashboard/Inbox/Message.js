import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      message: ''
    };
  }

  componentDidMount() {
    this.setState({
      message: this.props.message.message
    });
  }

  handleChange(val) {
    this.setState({
      message: val
    });
  }

  edit(event) {
    const { message } = this.state;
    const { id, updateMessage } = this.props;
    console.log(id);
    if (event.key === 'Enter' && message.length !== 0) {
      updateMessage(id, message);
      this.setState({ editing: false });
    }
  }

  render() {
    const { message } = this.props;
    return (
      <div>
        <div className="container" key={message.message_id}>
          <div className="message-container">
            <img className="message-sender" src={message.picture} alt="" />
            <span className="sender-name">{message.user_name}</span>

            {this.state.editing ? (
              <p>
                <input
                  className="bg-light text-dark form-control"
                  value={this.state.message}
                  onChange={e => this.handleChange(e.target.value)}
                  onKeyPress={event => this.edit(event)}
                />
              </p>
            ) : (
              <p className="message">{message.message}</p>
            )}

            <i
              className="fa fa-trash trash-icon"
              onClick={() => this.props.deleteMessage(message.message_id)}
            />
            <i
              className="fa fa-edit edit-icon"
              onClick={() => this.setState({ editing: !this.state.editing })}
            />

            <div className="message-right">
              <p className="date">{message.date}</p>
            </div>
            <i className="fa fa-check-square checkmark" />
          </div>
        </div>
      </div>
    );
  }
}
