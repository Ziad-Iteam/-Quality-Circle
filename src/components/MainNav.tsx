import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
      <Container className="d-flex">
        <Navbar.Brand className="flex-grow-1">Brand link</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  className="flex-grow-0">
          <Nav className="text-center">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
