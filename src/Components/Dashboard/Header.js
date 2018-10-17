import React from "react";
import logo from "../../images/headerlogo.png";
import "./Header.css";
import axios from "axios";
import { Link } from "react-router-dom";
import funcs from "../../utilities/functions";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      email: ''
    };
  }
  componentDidMount() {
    // let results = funcs.getUsersRequest();
    // results.then(res => {
    //   console.log(res);
    //   this.setState({
    //     user: res
    //   });
    // });
    axios.get("/api/user-data").then(res => {
      this.setState({
        user: res.data
      });
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
    return (
      <div className="header-nav">
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
                data-target="#addMemberModal"
              >
                Invite Team Members
              </span>
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

        <div className="modal fade" id="addMemberModal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <i
                  className="fa fa-user envelope-icon mr-2"
                  style={{ fontSize: "20px" }}
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

export default Header;
