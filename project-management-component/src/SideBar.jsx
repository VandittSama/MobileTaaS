import React, {Component} from 'react';

import './SideBar.css';

class SideBar extends React.Component{
    render() {
        return (
            <div>
              <ul class="SideBar">
                <li><a href="#">My Projects</a></li>
                <li><a href="#">Tester Community</a></li>
                <li><a href="#">Edit Profile</a></li>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </div>
        );
    }
}

export default SideBar;
