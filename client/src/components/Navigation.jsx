import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./styles/Navigation.css";

const Navigation = () => {

  return (
      <header className="header">
        <Navbar>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav">
              <Nav.Item className="nav-item">
                <Nav.Link href="#">Home</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Activities" id="navbarScrollingDropdown">
                <NavDropdown.Item className="nav-item" href="#action3">Services</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-item" href="#action4">
                  Events
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-item" href="#action5">
                  Education
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item className="nav-item" href="#action3">Gallery</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-item" href="#action4">
                  Live
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About Us" id="navbarScrollingDropdown">
                <NavDropdown.Item className="nav-item" href="#action3">Mission</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-item" href="#action4">
                  Priest
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-item" href="#action5">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item className="nav-item">
                <Nav.Link href="#">Donations</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link href="/Login">Login</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
  );
};

export default Navigation;
