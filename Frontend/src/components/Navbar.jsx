import React from "react";
import { Navbar, Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/download.svg"

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Row className="w-100 align-items-center text-center ">
          {/* Left - Brand */}
          <Col xs={4} className="text-start fw-bold" style={{ fontSize: "1.1rem" }}>
            <Navbar.Brand as={Link} to="/">
              Clash-O-Pia
            </Navbar.Brand>
          </Col>

          {/* Center - Logo */}
          <Col xs={4}>
            <Image
              src={logo}
              alt="Logo"
              height="70"
              className="d-inline-block align-top"
              rounded
            />
          </Col>

          {/* Right - Signature */}
          <Col xs={4} className="text-end">
            <Navbar.Text className="text-light" style={{ fontSize: "1.2rem" }}>
              Made with ❤️ by Wasiq Afnan
            </Navbar.Text>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
