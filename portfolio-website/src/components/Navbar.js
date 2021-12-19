import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { LinkContainer } from "react-router-bootstrap";
import './Navbar.css';


function MainNavbar(){
    return (
        <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <div className="Navbar-linkitem">
                        <LinkContainer to="/home">
                            <Navbar.Brand href="#home">George Nassar</Navbar.Brand>
                        </LinkContainer>
                    </div>
                    
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <div className="Navbar-linkitem">
                            <LinkContainer to="/home">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                        </div>
                        <div className="Navbar-linkitem">
                            <LinkContainer to="/projects">
                                <Nav.Link>Projects</Nav.Link>
                            </LinkContainer>
                        </div>
                            <div className="Navbar-about">
                                <div className="Navbar-linkitem">
                                <LinkContainer to="/about">
                                    <Nav.Link>About</Nav.Link>
                                </LinkContainer>
                                </div>
                            </div>
                            <div className="Navbar-linkitem">
                                <LinkContainer to="/contact">
                                    <Nav.Link>Contact</Nav.Link>
                                </LinkContainer>
                            </div>
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}

export default MainNavbar;