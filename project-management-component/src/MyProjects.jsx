import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './MyProjects.css';

class MyProjects extends React.Component{
    render() {
        return (
            <div>
            <Link to="/NewProject">Create new Project</Link>
            <br/>
              <ul class = "MyProjects">
                <li><a href="#">Project A</a></li>
                <li><a href="#">Project B</a></li>
                <li><a href="#">Project C</a></li>
                <li><a href="#">Project D</a></li>
                <li><a href="#">Project E</a></li>
              </ul>
            </div>
        );
    }
}

export default MyProjects;
