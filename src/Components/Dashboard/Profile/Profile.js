import React, { Component } from "react";
import Header from "../Header";
import Navbar from "../side-navbar";
import axios from "axios";
import "./Profile.css";

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    axios.get("/api/user-data").then(res => {
      this.setState({
        user: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        {/* <h1 id="profile">Profile</h1> */}
        <div className="img-username-container">
          <img
            src={this.state.user.picture}
            alt=""
            className="img-fluid profile-header-img"
          />
          <div className="user-name">
            <p>{this.state.user.user_name}</p>
          </div>
        </div>

        <div className="overview-container">
          <span className="overview">
            <p>Overview</p>
          </span>
          <div className="title">
            <div className="user-icon">
              <i className="fa fa-user" />
            </div>
            <p>Title: </p>
            <p>{this.state.user.title}</p>
          </div>
          <div className="email">
            <div className="email-icon">
              <i class="fa fa-envelope" />
            </div>
            <p>Email: </p>
            <span className="user-email-span">
              <p>{this.state.user.email}</p>
            </span>
          </div>
          <div className="phone">
            <div className="phone-icon">
              <i className="fa fa-phone" />
            </div>
            <p>Phone: </p>
            <p>{this.state.user.phone}</p>
          </div>
          <div className="location">
            <div className="location-icon">
              <i class="fa fa-map-marker" />
            </div>
            <p>Location: </p>
            <p>{this.state.user.location}</p>
          </div>
        </div>
      </div>
    );
  }
}
