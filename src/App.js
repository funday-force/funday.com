import React, { Component } from "react";
import Side_Navbar from "./side-navbar";
import Header from "./Header.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

// COMPONENTS
import Homepage from "./Components/Homepage/Homepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Funday</h1> */}
        <Header />
        <Side_Navbar />
        <Homepage />
      </div>
    );
  }
}

export default App;
