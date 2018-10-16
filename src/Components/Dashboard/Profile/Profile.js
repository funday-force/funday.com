import React, { Component } from "react";
import Header from "../Header";
import Navbar from "../side-navbar";
import axios from "axios";
import "./Profile.css";
import Modal from "./Modal";

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      editing: false,
      input: ""
    };
  }

  componentDidMount() {
    axios.get("/api/user-data").then(res => {
      this.setState({
        user: res.data
      });
    });
  }

  handleInput(val) {
    this.setState({
      input: val
    });
  }

  updateUserProfile(field, profileInfo) {}

  sendUpdatesToDb() {}

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
            <p className="overview-text">Overview</p>
          </span>
          <div className="title">
            <div className="user-icon">
              <i className="fa fa-user user-i" />
            </div>
            <p>Title: </p>
            <p
              className="edit-title user-title"
              data-toggle="modal"
              data-target="#editProfile"
            >
              {this.state.user.title}
            </p>
          </div>
          <div className="profile-email">
            <div className="email-icon">
              <i class="fa fa-envelope email-i" />
            </div>
            <p>Email: </p>
            <p
              className="edit-email user-email"
              data-toggle="modal"
              data-target="#editProfile"
            >
              {this.state.user.email}
            </p>
          </div>
          <div className="phone">
            <div className="phone-icon">
              <i className="fa fa-phone phone-i" />
            </div>
            <p>Phone: </p>
            <p
              className="edit-phone user-phone"
              data-toggle="modal"
              data-target="#editProfile"
            >
              {this.state.user.phone}
            </p>
          </div>
          <div className="location">
            <div className="profile-location-icon">
              <i class="fa fa-map-marker marker-i" />
            </div>
            <p>Location: </p>
            <p
              className="edit-location user-location"
              data-toggle="modal"
              data-target="#editProfile"
            >
              {this.state.user.location}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
