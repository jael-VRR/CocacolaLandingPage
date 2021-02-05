import React from 'react';
import { Row, Col } from "react-bootstrap";
import Navbar from '../components/Navbar.jsx';
import Content from '../components/Content.jsx';
import Slider from '../styles/Slider.css';
import '../styles/Layout.css';

const Layout = () => {
  return (
    <section>
      <div className="circle"></div>
      <header>
        <Navbar/>
      </header>
      <div>
      <Content/>
      </div>
      <div>
        <Slider/>
      </div>
    </section>
  )
}

export default Layout
