import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import Navbar from '../side-navbar.js';
import Header from '../Header.js';
import './ReactCalendar.css';

import { Link } from 'react-router-dom';

export default class ReactCalendar extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      input: '',
      day: ''
    };
  }

  promptInput(value) {
    console.log(value);
    var person = prompt('Please enter a todo:');
    this.setState({
      input: person,
      day: value
    });
  }

  handleInput(val) {
    this.setState({
      input: val
    });
  }

  onChange = date => this.setState({ date });

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="calendar-container">
          <input
            className="calendar-search"
            type="search"
            placeholder="Search / Filter Board"
            aria-label="Search"
          />

          <div className="calendar-right">
            <Link to="/dashboard">
              <i className="fa fa-envelope" />
              <span className="inbox-span">Inbox</span>
            </Link>
            <Link to="/dashboard/teams">
              <i className="fa fa-users" />
              <span>Team</span>
            </Link>
          </div>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            tileContent={({ date, view }) => {
              return view === 'month' && date.getDate() === this.state.day ? (
                <span className="position-absolute">
                  {' '}
                  <br />
                  <br />{' '}
                  {this.state.input === '' ? null : (
                    <p className="calendar-input">{this.state.input}</p>
                  )}
                </span>
              ) : null;
            }}
            tileClassName={'days'}
            onClickDay={value => this.promptInput(value.getDate())}
          />
        </div>
      </div>
    );
  }
}
