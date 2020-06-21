import React, { useState } from "react";
import Link from "next/link";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    console.log("netoru");
  };

  return (
    /**
     * ABOUT
     * SKILLS
     * RESUME
     * PORTFOLIO
     * CONTACT
     */
    <div>
      <Navbar className="fixed-top" bg="dark" expand="md">
        <Navbar.Brand href="#home">
          <img
            src="/logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-menu" className="text-light" />
        <Navbar.Collapse id="navbar-menu" className="navbar-controll">
          <Nav className="">
            <Nav.Link className="link-page" href="#home">
              HOME
            </Nav.Link>
            <Nav.Link className="link-page" href="#link">
              ABOUT
            </Nav.Link>
            <Nav.Link className="link-page" href="#link">
              SKILLS
            </Nav.Link>
            <Nav.Link className="link-page" href="#link">
              RESUME
            </Nav.Link>
            <Nav.Link className="link-page" href="#link">
              PORTFOLIO
            </Nav.Link>
            <Nav.Link className="link-page" href="#link">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
