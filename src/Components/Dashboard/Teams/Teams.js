import React, { Component } from "react";
import Header from "../Header";
import Navbar from "../side-navbar";
import axios from "axios";
import "./Teams.css";

import funcs from "../../../utilities/functions";

import teamIcon from "../../../images/team-icon.png";

export default class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: [],
      input: ""
    };
  }

  componentDidMount() {
    axios.get("/api/team").then(res => {
      this.setState({
        team: res.data
      });
    });
  }

  handleInput(val) {
    this.setState({
      input: funcs.handleInput(val)
    });
  }

  render() {
    let mappedTeam = this.state.team
      .filter(user => user.user_name.includes(this.state.input))
      .map((user, i) => {
        return (
          <div className="team-mapped" key={user.user_id}>
            <span className="team-left">
              <img src={user.picture} />
              <span className="name">{user.user_name}</span>
            </span>
            <div className="team-right">
              <span className="email">{user.email}</span>
              <span className="mail-icon">
                <a href={`mailto:${user.email}`} target="_top">
                  <i className="fa fa-envelope" />
                </a>
              </span>
              <span className="location-icon">
                <i className="fa fa-map-marker" />
              </span>
              <span className="teams-name">
                <span>Teams: Funday Force</span>
              </span>
            </div>
          </div>
        );
      });
    return (
      <div>
        <Header />
        <Navbar />
        <div className="team-div">
          <div className="team-top">
            <img src={teamIcon} className="mr-3" />
            <span>Everyone at Funday</span>

            <div className="team-search-div">
              <i className="fa fa-search team-search-icon" />
              <input
                onChange={e => this.handleInput(e.target.value)}
                className="search-bar test-search"
                type="search"
                placeholder="Search by name"
              />
            </div>
            <i className="fa fa-bars team-search-bars" />
          </div>

          <div className="spacer" />

          <div className="mapped">{mappedTeam}</div>
        </div>
      </div>
    );
  }
}
