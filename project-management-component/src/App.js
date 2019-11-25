import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';

import PageHeader from './PageHeader';
import NavComponent from './NavComponent';
import SideBar from './SideBar';
import MyProjects from './MyProjects';
import NewProject from './NewProject';
import About from './About';
import ViewProject from './ViewProject';
import Login from './Login';
import TestRunner1 from './components/TestRunner1';
import Automated from './components/Automated';
import RunResults from './components/RunResults';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

function App() {
  let HText = "MobileTaas";
  document.title = "MobileTaas";
  return (
    <Router>
    <div className="App">
      <header class = "App-header">
      <table border = "0">
      <tr>
        <td rowspan = "2" className="App-logo"><Link to = "/About"><img src= "Final_logo.PNG" className="App-logo" alt="logo" align = "left"/></Link></td>
        <td width = "100%"><PageHeader text = {HText}/></td>
      </tr>
      <tr><NavComponent /></tr>
      </table>
      </header>
      <body  background = "Page_background.jpeg">
        <table>
          <tr>
            <td valign = "top" height = "100%"><SideBar /></td>
            <td width = "100%" height = "100%" valign = "top">
            <div>
            <br/><br/>
            <Switch>
              <Route path = "/" exact component ={Login}  />
              <Route path = "/NewProject" component ={NewProject}  />
              <Route path = "/About" component ={About}  />
              <Route path = "/MyProjects" component ={MyProjects} />
              <Route path = "/ViewProject" component ={ViewProject} />
              <Route path = "/components/TestRunner1" component ={TestRunner1} />
			  <Route path = "/components/Automated" component ={Automated} />
        <Route path = "/components/RunResults" component ={RunResults} />
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
