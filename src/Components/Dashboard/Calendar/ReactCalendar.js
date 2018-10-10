import React, { Component } from "react";
import Calendar from "react-calendar/dist/entry.nostyle";
import Navbar from "../side-navbar.js";
import Header from "../Header.js";
import "./ReactCalendar.css";

import { Link } from "react-router-dom";

export default class ReactCalendar extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
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
            <Link to="/team">
              <i class="fa fa-users" />
              <span>Team</span>
            </Link>
          </div>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            onClick={value => alert("New date is: ", value)}
            tileClassName={"days"}
          />
        </div>
      </div>
    );
  }
}
