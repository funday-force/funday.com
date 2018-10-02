import React from 'react';
import './side_navbar.css'
import $ from 'jquery'


class navbar extends React.Component {
   render(){
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });
       return(
        <div>
            <div class="wrapper">
            <nav id="sidebar">
    {/* <div class="sidebar-header">
        <h3>Collapsible Sidebar</h3>
    </div> */}
    <ul className="list-unstyled components">
        <li className="active"><a href="#">Inbox</a></li>
        <li><a href="#">Calendar</a></li>
            {/* <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <li><a href="#">Page</a></li>
                <li><a href="#">Page</a></li>
                <li><a href="#">Page</a></li>
            </ul> */}
        <li><a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Boards</a></li>
            <ul className="collapse list-unstyled" id="homeSubmenu">
                <li><a href="#">Boards1</a></li>
                <li><a href="#">Boards2</a></li>
                <li><a href="#">Boards3</a></li>

            </ul>
        <li><a href="#">Team</a></li>
    </ul>
</nav>

<div id="content">
    <button type="button" id="sidebarCollapse" className="navbar-btn">
        <span></span>
        <span></span>
        <span></span>
    </button>
</div>
    </div>
        </div>
       )
   }
}
export default navbar