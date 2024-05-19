import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <Navbar
      className={navbar ? 'navbar active' : 'navbar'}
      expand="lg"
      fixed="top"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand onClick={() => scroll.scrollToTop()}>Malik Murtaza</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="active"
            >
              Home
            </ScrollLink>
          </Nav.Item>
          <Nav.Item>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="active"
            >
              Skills
            </ScrollLink>
          </Nav.Item>
          <Nav.Item>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="active"
            >
              Projects
            </ScrollLink>
          </Nav.Item>
          <Nav.Item>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="active"
            >
              Contact
            </ScrollLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;