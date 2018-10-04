import React, { Component } from 'react';
import Navbar from './side-navbar.js';
import Header from './Header.js';
import './Dashboard.css';

import Inbox from './Inbox/Inbox';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="bg-light">
        <Header />
        <Navbar />
        <Inbox />
      </div>
    );
  }
}
