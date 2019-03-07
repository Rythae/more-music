import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Navigationbar extends React.Component {
    render() {
        return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">more-music</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Help</Nav.Link>
            <Nav.Link href="#link">Support</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sign up</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Log In</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Download</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default Navigationbar;
