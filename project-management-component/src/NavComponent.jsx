import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './NavComponent.css';

class NavComponent extends React.Component{
    render() {
        return (
            <div>
              <ul class="nav">
                <li><Link to="/BugTracker">Bug Tracker</Link></li>
                <li><Link to="/ProjectHome">Project Home</Link></li>
                <li><Link to="/TestRunner">Test Runner</Link></li>
                <li><Link to="/About">About</Link></li>
              </ul>
            </div>
        );
    }
}

export default NavComponent;
