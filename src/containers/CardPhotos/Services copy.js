import React from "react";
import {Fade} from "react-reveal";
import { Tabs, Tab } from "react-bootstrap";
// reactstrap components
import {
  Container,
} from "reactstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
export default function Services() {
  const Demo = () => {
    return <div>Tab 4 using component screen readers</div>;
  };
  return (
    <Fade bottom duration={1000} distance="40px">
    <div  className="greet-main" >
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>        
          <Nav.Link eventKey="first">
          Tab 1 
          <img src="https://lh3.googleusercontent.com/-pxzt5JSmq3o/AAAAAAAAAAI/AAAAAAAAARw/oSQ00wYMa9g/photo.jpg?sz=32"></img>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container></div>
  </Fade>
  );
}
