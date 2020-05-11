import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Fourntech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;