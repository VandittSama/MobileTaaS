import React, {Component} from 'react';

import './NavComponent.css';

class NavComponent extends React.Component{
    render() {
        return (
            <div>
              <ul class="nav">
                <li><a href="#">Bug Tracker</a></li>
                <li><a href="#">Project Files</a></li>
                <li><a href="#">Test Runner</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
        );
    }
}

export default NavComponent;
