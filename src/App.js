import React, { Component } from 'react';
import Side_Navbar from './side-navbar'
import Header from './Header.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <h1>Funday</h1> */}
      <Header />
      <Side_Navbar />
      </div>
    );
  }
}

export default App;
