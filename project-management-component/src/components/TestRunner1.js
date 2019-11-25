import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {Link} from 'react-router-dom';
import "./link.css"
import classnames from 'classnames';

const TestRunner1 = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }



  return (
    <div valign="top" align="center"
	 >

	<MDBContainer fluid>
	<MDBRow>

	
            <MDBCol>
			 <Card body>
			 <CardTitle>Automated Testing</CardTitle>
                <CardText>Automated testing will allow you to execute built-in 
			  tests or your own scripts on selected device, generating a detailed report .
			  </CardText>
                <Button tag={Link} to="/components/Automated">Start Execution</Button>
              </Card>
            </MDBCol>
            <MDBCol >
              <Card body>
			  <CardTitle>Interactive Testing</CardTitle>
                <CardText>Live or interactive testing allows you to interact with a device through your web browser in real time in order to perform manual testing.
				</CardText>
                <Button block ><a href="https://cloud.geny.io/app/default-devices">Start Session</a></Button>
              </Card>
            </MDBCol>
          </MDBRow>
		  </MDBContainer >
		  
    </div>
  );
}

export default TestRunner1;