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
      input: ''
    };
  }

  promptInput() {
    var person = prompt('Please enter a todo:');
    this.setState({
      input: person
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
              <i class="fa fa-envelope" />
              <span className="inbox-span">Inbox</span>
            </Link>
            <Link to="/dashboard/teams">
              <i class="fa fa-users" />
              <span>Team</span>
            </Link>
          </div>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            tileContent={({ date, view }) =>
              view === 'month' && date.getDay() === 0 ? this.state.input : null
            }
            tileClassName={'days'}
            onClickDay={() => this.promptInput()}
          />
        </div>
      </div>
    );
  }
}
