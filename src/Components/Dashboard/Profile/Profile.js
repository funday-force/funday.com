import React, { Component } from 'react';
import Header from '../Header';
import Navbar from '../side-navbar';
import './Profile.css';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <h1 id="profile">Profile</h1>
      </div>
    );
  }
}
