import React, { Component } from 'react';
import Header from '../Header';
import Navbar from '../side-navbar';
import axios from 'axios';
import './Teams.css';
import ReactTooltip from 'react-tooltip';

import funcs from '../../../utilities/functions';

import teamIcon from '../../../images/team-icon.png';

export default class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: [],
      input: '',
      email: ''
    };
  }

  componentDidMount() {
    axios.get('/api/team').then(res => {
      this.setState({
        team: res.data
      });
    });
  }

  handleInput(val) {
    this.setState({
      // input: funcs.handleInput(val)
      input: val
    });
  }

  handleEmail(val) {
    this.setState({
      email: val
    });
  }

  handleSubmit = async e => {
    await axios
      .post('http://localhost:3010/add-member')
      .then(function(response) {
        console.log(response);
        this.setState({
          email: ''
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

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
              <span className="email">{user.phone}</span>
              <a
                className="mail-icon"
                href={`mailto:${user.email}`}
                target="_top"
              >
                <i className="fa fa-envelope" />
              </a>
              <span className="location-icon" data-tip={user.location}>
                <i className="fa fa-map-marker" />
                <ReactTooltip />
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

            <i
              className="fa fa-bars team-search-bars"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
            />
            <div class="dropdown-menu">
              <span
                class="dropdown-item"
                data-toggle="modal"
                data-target="#addMemberModal"
              >
                Invite Team Member
              </span>
            </div>
          </div>

          <div className="spacer" />

          <div className="mapped">{mappedTeam}</div>
        </div>

        <div className="modal fade" id="addMemberModal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <i
                  className="fa fa-user envelope-icon mr-2"
                  style={{ fontSize: '20px' }}
                />
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Invite Team Member
                </h5>
                <button className="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h6 className="modal-h6">Enter one email address:</h6>
              <div className="modal-body">
                <input
                  type="text"
                  className="modal-input-box"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleEmail(e.target.value)}
                  required
                />
              </div>
              <div className="modal-footer">
                <button
                  onClick={this.handleSubmit}
                  className="btn btn-secondary invite-buttn"
                  data-dismiss="modal"
                >
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
