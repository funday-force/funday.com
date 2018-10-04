import React from 'react';
import logo from '../../images/headerlogo.png';
import './Header.css';
import axios from 'axios';

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
          <i className="fa fa-bell bell-icon" />

          <i className="fa fa-users users-icon" />
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
              <span className="invite">Invite Team Members</span>
            </span>
            <div className="profile-div">
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
