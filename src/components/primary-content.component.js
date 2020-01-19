import React, { Component } from 'react';
import QuizComponent from './primary-content/quiz.component';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

// import QuizStartup from './primary-content/quiz-startup-modal.component';

export default class PrimaryContent extends Component {
   render() {
      return (

         <div className="w-100">
            <Navbar bg="light" expand="lg">
               <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <Nav.Link href="#link">Link</Nav.Link>
                     <NavDropdown className="mr-sm-2" title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
                  {/* <Form inline>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button variant="outline-success">Search</Button>
                  </Form> */}
               </Navbar.Collapse>
            </Navbar>

            {/* <QuizStartup></QuizStartup> */}

            <div className="text-center"><h2>The Kuiz</h2></div>
            <div className="w-100 text-center">
               <QuizComponent></QuizComponent>
            </div>
         </div>
      );
   }
}

