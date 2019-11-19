import React, { Component } from 'react';

class About extends Component {
  componentDidMount(){
    document.title = "MobileTaas";
  }
    render()
    {return(
  <div>
      <h3>MobileTaaS is an online crowd sourced testing platform which allows its users to sign up to either work as a part of a testing team within a project, or to create your own project and execute testing phase with the help of skillful testers available on the platform. It takes the advantage of Software as a Service (SaaS) cloud architecture to allow easy access to the system via a web browser.</h3>
  </div>);
  }
}

export default About;
