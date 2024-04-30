import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/Navigation.css";

const Navigation = () => {
  return (
    <header className="header">
      <Navbar>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            <Nav.Item className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </Nav.Item>
            <NavDropdown title="Activities" id="navbarScrollingDropdown">
              <NavDropdown.Item className="nav-item">
                <Link to="/services" className="dropdown-item">Services</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-item">
                <Link to="/events" className="dropdown-item">Events</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-item">
                <Link to="/edu" className="dropdown-item">Education</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item className="nav-item">
                <Link to="/gallery" className="dropdown-item">Gallery</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-item">
                <Link to="/live" className="dropdown-item">Live</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-item">
                <Link to="#" className="dropdown-item">Priest</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item className="nav-item">
                <Link to="/mission" className="dropdown-item">Mission</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-item">
                <Link to="/contact" className="dropdown-item">Contact Us</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-item">
                <Link to="#" className="dropdown-item">Priest</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="nav-item">
              <Link to="/donations" className="nav-link">Donations</Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Navigation;
