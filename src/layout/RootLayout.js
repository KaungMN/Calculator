import Signout from "pages/Signout";
import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import LoginStatus from "pages/Login/LoginStatus";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function RootLayout() {
  const location = useLocation();
  return (
    <>
      <header>
        <Navbar bg="white" expand="sm" variant="white">
          <Container>
            <Navbar.Brand className="fs-2" href="/">
              KMN's Blog
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className="justify-content-end" id="navbarScroll">
              <Nav className="nav-underline">
                <Nav.Link
                  className={`fs-5 ${
                    location.pathname === "/blog" ? "active" : ""
                  }`}
                  href="/blog"
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  className={`fs-5 ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  href="/about"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className={`fs-5 ${
                    location.pathname === "/link" ? "active" : ""
                  }`}
                  href="/link"
                >
                  Link
                </Nav.Link>
                <Nav.Link
                  className={`fs-5 ${
                    location.pathname === "/project" ? "active" : ""
                  }`}
                  href="/project"
                >
                  Project
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
