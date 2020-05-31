import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

// my components
import "./navBar.css";
import Logo from "../../logo.svg";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand className="nav-brand">
        <img
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{" "}
        samanthanicole
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link eventKey="1" as={Link} exact to="/" className="nav-link">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" as={Link} to="/about" className="nav-link">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" as={Link} to="/contact" className="nav-link">
              My Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" as={Link} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Language" id="basic-nav-dropdown">
            <NavDropdown.Item> English </NavDropdown.Item>
            <NavDropdown.Item> Croatian </NavDropdown.Item>
            <NavDropdown.Item> German </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
