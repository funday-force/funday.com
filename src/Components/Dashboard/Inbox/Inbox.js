import React, { Component } from 'react';
import './Inbox.css';
import axios from 'axios';
import Messages from './Messages';

export default class Inbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      messages: [],
      message: ''
    };

    this.deleteMessage = this.deleteMessage.bind(this);
  }

  handleInput(val) {
    this.setState({
      message: val
    });
  }

  componentDidMount() {
    axios.get('/api/user-data').then(res => {
      console.log(res.data);
      this.setState({
        user: res.data
      });
    });

    axios.get('/api/messages').then(res => {
      console.log(res.data);
      this.setState({
        messages: res.data
      });
    });
  }

  addMessage() {
    var date = new Date();
    date =
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    const user_id = this.state.user.user_id;
    const { message } = this.state;
    axios.post('/api/messages', { user_id, message, date }).then(res => {
      console.log(res.data);
      this.setState({
        messages: res.data,
        message: ''
      });
    });
  }

  deleteMessage(id) {
    console.log(id);
    axios.delete(`/api/messages/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        messages: res.data
      });
    });
  }

  updateMessage(id) {
    const { message } = this.state;

    axios.put(`/api/messages/${id}`, { message }).then(res => {
      this.setState({
        messages: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary new-message-btn"
          data-toggle="modal"
          data-target="#newMessageModal"
        >
          <i className="fa fa-plus pr-2" />
          New Message
        </button>
        <div id="inbox" className="container">
          <div className="row">
            <div className="col-md-8 mr-auto">
              <h2 className="inbox-title">Inbox</h2>

              <div className="message-count">
                <p>
                  <strong>Open ({this.state.messages.length})</strong> / All
                  Updates
                </p>
              </div>

              {this.state.messages.length !== 0 ? (
                <Messages
                  deleteMessage={this.deleteMessage}
                  user={this.state.user}
                  messages={this.state.messages}
                  updateMessage={this.updateMessage}
                />
              ) : (
                <div className="inbox-hero">
                  <img
                    src="https://cdn.monday.com/assets/macarons.png"
                    alt="inbox"
                  />
                  <h4>Wooohoo!</h4>
                  <p>You've reached the holy state of Inbox Zero.</p>
                  <p>Go ahead and treat yourself.</p>
                </div>
              )}
            </div>
          </div>

          <div
            className="modal fade"
            id="newMessageModal"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <i className="fa fa-envelope pr-2" /> New message
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label className="col-form-label">Message:</label>
                      <textarea
                        onChange={e => this.handleInput(e.target.value)}
                        className="form-control"
                        id="message-text"
                        value={this.state.message}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => this.addMessage()}
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
