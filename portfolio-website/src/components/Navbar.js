import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { LinkContainer } from "react-router-bootstrap";


function MainNavbar(){
    return (
        <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <LinkContainer to="/home" style={{ textDecoration: 'none' }}>
                        <Navbar.Brand href="#home">George Nassar</Navbar.Brand>
                    </LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/home" style={{ textDecoration: 'none' }}>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/projects" style={{ textDecoration: 'none' }}>
                                <Nav.Link>Projects</Nav.Link>
                            </LinkContainer>
                            <div style={{marginLeft: '300%'}}>
                                <LinkContainer to="/about" style={{ textDecoration: 'none' }}>
                                    <Nav.Link>About</Nav.Link>
                                </LinkContainer>
                            </div>
                                <LinkContainer to="/contact" style={{ textDecoration: 'none' }}>
                                    <Nav.Link>Contact</Nav.Link>
                                </LinkContainer>
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}

export default MainNavbar;