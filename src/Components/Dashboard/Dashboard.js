import React, { Component } from "react";
import axios from "axios";
import Navbar from "../../side-navbar.js";
import Header from '../../Header.js';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  async componentDidMount() {
    let userData = await axios.get("/api/user-data");

    this.props.updateUser(userData.data);
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />
      </div>
    );
  }
}
