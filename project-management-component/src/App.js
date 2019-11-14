import React from 'react';
import logo from './logo.svg';
import './App.css';

import PageHeader from './PageHeader';
import NavComponent from './NavComponent';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <header class = "App-header">
      <table border = "0">
      <tr>
        <td rowspan = "2" className="App-logo"><img src= "Final_logo.PNG" className="App-logo" alt="logo" align = "left"/></td>
        <td width = "1300px"><PageHeader /></td>
      </tr>
      <tr><NavComponent /></tr>
      </table>
      </header>
      <body class = "App-body">
        <table>
          <tr>
            <td><SideBar /></td>
          </tr>
        </table>
      </body>
    </div>
  );
}

export default App;
