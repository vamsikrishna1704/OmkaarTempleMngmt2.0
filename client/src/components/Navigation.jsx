import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt,  faImages, faInfoCircle, faDonate, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./styles/Navigation.css";

const Navigation = ({ onLogout }) => {
  const role = localStorage.getItem('role');
  return (
    <header className="header">
      <Navbar>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            {(role === 'Devotee' || role === 'Priest'|| role === '')&&(
              <Nav.Item className="nav-item">
                <Link to="/" className="nav-link"><FontAwesomeIcon icon={faHome} />Home</Link>
              </Nav.Item>
            )}
            {role === 'Admin'&&(
              <Nav.Item className="nav-item">
                <Link to="/admin-home" className="nav-link"><FontAwesomeIcon icon={faHome} />Home</Link>
              </Nav.Item>
            )}
            <NavDropdown title={<><FontAwesomeIcon icon={faCalendarAlt} /> Activities</>} id="navbarScrollingDropdown">
            {(role === 'Devotee' || role==='')&&(
              <><NavDropdown.Item className="nav-item">
              <Link to="/services" className="dropdown-item">Services</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider /></>
            )}
            {(role === 'Admin')&&(
              <><NavDropdown.Item className="nav-item">
              <Link to="/admin-service" className="dropdown-item">Services</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider /></>
            )}
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
              {(role === 'Devotee' || role === 'Priest')&&(
              <><NavDropdown.Divider />
              <NavDropdown.Item className="nav-item">
                <Link to="/appointments" className="dropdown-item">MyAppointments</Link>
               </NavDropdown.Item></>
              )}
              {role === 'Admin'&&(
              <>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-item">
                <Link to="/add-priest" className="dropdown-item">Add Priest</Link>
              </NavDropdown.Item>
              </>
            )} 
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
                <Link to="/priest" className="dropdown-item">Priest</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="nav-item">
              <Link to="/donations" className="nav-link"><FontAwesomeIcon icon={faDonate} />Donations</Link>
            </Nav.Item>
            {role === ''&&(
              <Nav.Item className="nav-item">
                <Link to="/login" className="nav-link"><FontAwesomeIcon icon={faSignInAlt} />Login</Link>
              </Nav.Item>
            )}
            {(role === 'Priest'|| role==='Admin'||role==='Devotee' ) &&(
              <Button variant="danger" onClick={onLogout}>Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Navigation;
