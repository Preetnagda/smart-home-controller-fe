import React from 'react';
import LedController from './views/led_controller/led_controller';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
      return <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Smart Home Controller</Navbar.Brand>
              <Nav className="me-auto">
              </Nav>
              <Nav className="">
                <Nav.Link active href="#home">Led Controller</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Container>
            <LedController/>
          </Container>
      </>
    }
  }

  export default App;