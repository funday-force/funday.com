import React from "react";
import Logo from './Logo/Monday_Logo.jpg'

class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src={Logo} className="logo" alt="" />
        </a>
      </nav>
    );
  }
}

export default Header;
