import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import routes from './routes';

class App extends Component {
  render() {
    return <div className="App">{routes}</div>;
  }
}

export default App;
