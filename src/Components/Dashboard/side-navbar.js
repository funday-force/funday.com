import React from 'react';
import './side_navbar.css';
import $ from 'jquery';

class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  render() {
    $(document).ready(function() {
      $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
      });
    });
    return (
      <div>
        <div className="wrapper">
          <nav id="sidebar">
            <ul className="list-unstyled components">
              <li className="active">
                <a href="#">Inbox</a>
              </li>
              <li>
                <a href="#">Calendar</a>
              </li>

              <li>
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i
                    className="fa fa-bars"
                    style={{
                      marginRight: '10px',
                      fontSize: '14px',
                      position: 'relative',
                      bottom: '2px'
                    }}
                  />
                  Boards
                </a>
              </li>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#">Boards1</a>
                </li>
                <li>
                  <a href="#">Boards2</a>
                </li>
                <li>
                  <a href="#">Boards3</a>
                </li>
              </ul>
              <li>
                <a href="#">Team</a>
              </li>
            </ul>
          </nav>

          <div id="content">
            <button type="button" id="sidebarCollapse" className="navbar-btn">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default navbar;
