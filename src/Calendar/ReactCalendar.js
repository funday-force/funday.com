import React, { Component } from "react";
import Calendar from "react-calendar/dist/entry.nostyle";

import "./ReactCalendar.css";

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
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClick={value => alert("New date is: ", value)}
          tileClassName={"days"}
        />
      </div>
    );
  }
}
