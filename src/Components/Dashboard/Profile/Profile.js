import React, { Component } from "react";
import Header from "../Header";
import Navbar from "../side-navbar";
import axios from "axios";
import "./Profile.css";

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      editing: false,
      title: "",
      phone: "",
      location: "",
      email: ""
    };
  }

  componentDidMount() {
    axios.get("/api/user-data").then(res => {
      this.setState({
        user: res.data
      });
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  updateProfile() {
    const { title, email, phone, location, user } = this.state;
    axios
      .put(`/api/users/${user.user_id}`, { title, email, phone, location })
      .then(res => {
        this.setState({ user: res.data[0] });
      });
  }

  render() {
    console.log(this.state.user.title);
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
        <div className="modal fade" id="editProfile" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered profile-modal-dialog"
            role="document"
          >
            <div className="modal-content p-2 profile-modal-content">
              <div className="modal-header profile-modal-header">
                <i
                  className="fa fa-user envelope-icon mr-2"
                  style={{ fontSize: "20px" }}
                />
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Edit Profile
                </h5>
                <button className="close profile-close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="modal-input-box profile-input"
                  name="title"
                  onChange={this.onChange}
                  defaultValue={this.state.user.title}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="modal-input-box profile-input"
                  name="email"
                  onChange={this.onChange}
                  defaultValue={this.state.user.email}
                />
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="modal-input-box profile-input"
                  name="phone"
                  onChange={this.onChange}
                  defaultValue={this.state.user.phone}
                />
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="modal-input-box profile-input"
                  name="location"
                  onChange={this.onChange}
                  defaultValue={this.state.user.location}
                />
              </div>
              <div className="modal-footer profile-modal-footer">
                <button
                  className="btn btn-secondary invite-buttn profile-save-btn"
                  data-dismiss="modal"
                  onClick={() => this.updateProfile()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
