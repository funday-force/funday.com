import React from 'react';
import logo from '../../images/headerlogo.png';
import './Header.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    axios.get('/api/user-data').then(res => {
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
          <Link to="/dashboard/teams">
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
              <span
                className="invite"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Invite Team Members
              </span>
              <div className="modal fade" id="exampleModalCenter" role="dialog">
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <i className="fa fa-envelope envelope-icon" />
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Invite Team Member
                      </h5>
                      <button className="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <h6 className="modal-h6">Enter one email address:</h6>
                    <div className="modal-body">
                      <input type="text" className="modal-input-box" />
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-secondary invite-buttn"
                        data-dismiss="modal"
                      >
                        Invite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <div className="btn profile-div">
              <Link to="/dashboard/profile">
                <img
                  src={this.state.user.picture}
                  alt="profile pic"
                  className="img-fluid profile-img"
                />
                <i className="fa fa-arrow-circle-down" />
              </Link>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
