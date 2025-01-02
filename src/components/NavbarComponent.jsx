import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark"> 
            <Container className="w-75 m-auto">
                <Navbar.Brand as={Link} to="/" >Star Wars</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/films">Films</Nav.Link>
                        <Nav.Link as={Link} to="/species">Species</Nav.Link>
                        <Nav.Link as={Link} to="/organizations">Organizations</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
