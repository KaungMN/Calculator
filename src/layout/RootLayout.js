import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function RootLayout() {
  const location = useLocation();
  return (
    <>
      <header>
        <Navbar bg="white" expand="sm" variant="white">
          <Container>
            <Navbar.Brand className="fs-2 fw-bold" href="/">
              KMN'S BLOG
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className="justify-content-end" id="navbarScroll">
              <Nav className="nav-underline">
                <Nav.Link
                  className={`fs-5 ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  href="/"
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
