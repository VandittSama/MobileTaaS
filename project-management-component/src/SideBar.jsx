import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css';

class SideBar extends React.Component{
    render() {
        return (
            <div>
              <ul class="SideBar">
                <li><Link to="/MyProjects">My Projects</Link></li>
                <li><Link to="/TesterCommunity">Tester Community</Link></li>
                <li><Link to="/EditProfile">Edit Profile</Link></li>
                <li><Link to="/MyAccount">My Account</Link></li>
                <li><Link to="/">Logout</Link></li>
              </ul>
            </div>
        );
    }
}

export default SideBar;
