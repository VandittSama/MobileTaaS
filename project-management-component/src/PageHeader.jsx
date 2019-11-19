import React from 'react';
import './PageHeader.css';

const PageHeader = (props) =>(
  <div class = "Header">
      <h2 class = "Header">{props.text}</h2>
  </div>
);

export default PageHeader;
