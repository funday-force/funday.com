import React, { Component } from 'react';
import Navbar from './side-navbar.js';
import Header from './Header.js';
import './Dashboard.css';
import DragnDrop from '../DragnDrop/DragnDrop';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <DragnDrop />
      </div>
    );
  }
}
