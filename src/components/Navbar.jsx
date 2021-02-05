import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import coca from "../images/coca.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <Row className="box-navbar">
      <Col>
        <div>
          <img src={coca} alt="cocacola" />
        </div>
      </Col>
      <Col className="item-menu">
        <Nav>
          <Nav.Link className="item-nav" href="#deets">
            Home
          </Nav.Link>
          <Nav.Link className="item-nav" href="#deets">
            Menu
          </Nav.Link>
          <Nav.Link className="item-nav" href="#deets">
            What's New
          </Nav.Link>
          <Nav.Link className="item-nav" href="#deets">
            Contact
          </Nav.Link>
        </Nav>
      </Col>
    </Row>
  );
};

export default Navbar;
