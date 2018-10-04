import React, { Component } from 'react';
import Navbar from './side-navbar.js';
import Header from './Header.js';
import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        
      </div>
    );
  }
}
