import React from 'react';
import { Row, Col } from "react-bootstrap";
import Navbar from '../components/Navbar.jsx';
import Content from '../components/Content.jsx';
import Slider from '../components/Slider.jsx';
import '../styles/Layout.css';

const Layout = () => {
  return (
    <section>
      <div className="circle"></div>
      <header>
        <Navbar/>
      </header>
      <div className="exterior">
        <Row className="wrapper-content" >
          <Col className="right">
          <Content/>
          </Col>
          <Col className="left">
          <Slider/>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Layout
