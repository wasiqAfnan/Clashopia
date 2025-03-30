import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Clash Royale Cards
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
