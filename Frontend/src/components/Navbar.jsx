import React from "react";
import { Navbar, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Clash Royale Cards</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
