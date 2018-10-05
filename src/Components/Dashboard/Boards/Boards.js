import React, { Component } from 'react';
import DragnDrop from './DragnDrop/DragnDrop';
import Header from '../Header';
import Navbar from '../side-navbar';

export default class Boards extends Component {
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
