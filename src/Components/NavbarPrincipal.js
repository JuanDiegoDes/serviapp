import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home';
import About from './About';
import ListarEmpleados from '../API/ListarEmpleador'
import {LinkContainer} from 'react-router-bootstrap'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';


function BasicExample() {
    return (

        <Router>
      <Navbar bg="light" expand="lg">
        <Container>
        <LinkContainer to="/"><Navbar.Brand>Homee</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                <NavDropdown.Item href="/tecnico">
                  Tecnico
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/tecnico' element={< ListarEmpleados />}></Route>
        </Routes>

      </Router>
    );
  }

  export default BasicExample;