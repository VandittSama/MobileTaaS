import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';

import PageHeader from './PageHeader';
import NavComponent from './NavComponent';
import SideBar from './SideBar';
import MyProjects from './MyProjects';

function App() {
  return (
    <Router>
    <div className="App">
      <header class = "App-header">
      <table border = "0">
      <tr>
        <td rowspan = "2" className="App-logo"><Link to = "/"><img src= "Final_logo.PNG" className="App-logo" alt="logo" align = "left"/></Link></td>
        <td width = "100%"><PageHeader /></td>
      </tr>
      <tr><NavComponent /></tr>
      </table>
      </header>
      <body  background = "Page_background.jpeg" class = "App-body">
        <table>
          <tr>
            <td><SideBar /></td>
            <td width = "100%">
            <div>
            <Switch>
              <Route path = "/" exact component ={PageHeader} />
              <Route path = "/MyProjects" component ={MyProjects} />
              </Switch>
              </div>
            </td>
          </tr>
        </table>
      </body>
    </div>
    </Router>
  );
}

export default App;
