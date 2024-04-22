import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./styles/Navigation.css";

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    setShowDropdown(!showDropdown);
    setDropdownIndex(index);
  };

  return (
    <Container className="container">
      <header className="header">
        <Navbar bg="body-tertiary" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav">
              <Nav.Item>
                <Nav.Link href="#">Home</Nav.Link>
              </Nav.Item>
              <NavDropdown
                title="Activities"
                id="basic-nav-dropdown"
                show={showDropdown && dropdownIndex === 1}
                onToggle={() => handleDropdownToggle(1)}
              >
                <Nav.Item>
                  <Nav.Link href="#">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Events</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Education</Nav.Link>
                </Nav.Item>
              </NavDropdown>
              <NavDropdown
                title="Resources"
                id="basic-nav-dropdown"
                show={showDropdown && dropdownIndex === 2}
                onToggle={() => handleDropdownToggle(2)}
              >
                <Nav.Item>
                  <Nav.Link href="#">Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Live</Nav.Link>
                </Nav.Item>
              </NavDropdown>
              <NavDropdown
                title="About Us"
                id="basic-nav-dropdown"
                show={showDropdown && dropdownIndex === 3}
                onToggle={() => handleDropdownToggle(3)}
              >
                <Nav.Item>
                  <Nav.Link href="#">Mission</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/preist">Priest</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Contact Us</Nav.Link>
                </Nav.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="#">Donations</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Login" className="active">Login</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </Container>
  );
};

export default Navigation;
