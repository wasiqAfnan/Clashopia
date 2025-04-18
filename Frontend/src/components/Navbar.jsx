import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Clash Royale Cards
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Navbar.Text className="text-light">
            Made with ❤️ by Wasiq Afnan
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
