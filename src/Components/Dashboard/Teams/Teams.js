import React, { Component } from 'react';
import Header from '../Header';
import Navbar from '../side-navbar';

import './Teams.css';

export default class Teams extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <h1 className="team-div">Teams</h1>
      </div>
    );
  }
}
