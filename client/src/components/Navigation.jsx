import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faBookOpen, faImages, faBroadcastTower, faUser, faHandsHelping, faInfoCircle, faDonate, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./styles/Navigation.css";

const Navigation = () => {
  return (
    <header className="header">
      <Navbar>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            <Nav.Item className="nav-item">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </Nav.Item>
            <NavDropdown title={<><FontAwesomeIcon icon={faCalendarAlt} /> Activities</>} id="navbarScrollingDropdown">
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
            <NavDropdown title={<><FontAwesomeIcon icon={faImages} /> Resources</>} id="navbarScrollingDropdown">
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
            <NavDropdown title={<><FontAwesomeIcon icon={faInfoCircle} /> About Us</>} id="navbarScrollingDropdown">
              <NavDropdown.Item className="nav-item">
                <Link to="/mission" className="dropdown-item">Mission</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-item">
                <Link to="/contact" className="dropdown-item">Contact Us</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-item">
                <Link to="/Priest" className="dropdown-item">Priest</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="nav-item">
              <Link to="/Donations" className="nav-link">
                <FontAwesomeIcon icon={faDonate} /> Donations
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link to="/login" className="nav-link">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Navigation;
