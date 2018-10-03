import React from "react";
import Logo from "./Logo/Monday_Logo.jpg";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar header-bar">
          <a className=" funday-header">Funday</a>
          <form class="form-inline">
            <input
              className="form-control mr-sm-2 search-bar"
              type="search"
              placeholder="Search Everything ..."
              aria-label="Search"
            />
            <i className="fa fa-bell" />
          </form>
        </nav>
      </div>
    );
  }
}

export default Header;
