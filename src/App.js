import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// COMPONENTS
import Homepage from './Components/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
