import React from "react";
import logo from "../../images/headerlogo.png";
import "./Header.css";
import axios from "axios";
import { isType } from "graphql";
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},

    };
  }
  componentDidMount() {
    axios.get("/api/user-data").then(res => {
      console.log(res.data);
      this.setState({
        user: res.data
      });
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar header-bar">
          <img className="header-logo" src={logo} alt="headerlogo" />
        </nav>
        <header className="top-header ">
          <Link to="/dashboard">
            <i className="fa fa-bell bell-icon" />
          </Link>
          <Link to='/team'>
            <i className="fa fa-users users-icon" />
          </Link>
          <i className="fa fa-search search-icon" />
          <input
            className="search-bar"
            type="search"
            placeholder="Search Everything ..."
            aria-label="Search"
          />
          <div className="header-right float-right">
            <span className="invite-span">
              <i className="fa fa-plus-square" />
              <span type="button" className="invite" data-toggle="modal" data-target="#exampleModalCenter">Invite Team Members</span>
              <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <i className="fa fa-envelope envelope-icon"></i>
                      <h5 class="modal-title" id="exampleModalLongTitle">Invite Team Member</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <h6 className="modal-h6">Enter one email address:</h6>
                    <div class="modal-body">
                      <input type="text" className="modal-input-box" />
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary invite-buttn" data-dismiss="modal">Invite</button>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <div className="btn dropdown-toggle profile-div">
            
              <img
                src={this.state.user.picture}
                alt="profile pic"
                className="img-fluid profile-img"
              />
              <i className="fa fa-arrow-circle-down" />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
