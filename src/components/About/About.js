import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Services from "./Services";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              data-aos="fade-right"
            >
              <span className="primary-header">Who</span> Am I?
            </h1>
            <div data-aos="fade-up">
              <Aboutcard />
            </div>
          </Col>

        </Row>
        <h1 data-aos="fade-right">
          <span className="primary-header">My </span>Services
        </h1>

        <div data-aos="fade-up">
          <Services />
        </div>

        <h1 data-aos="fade-right">
          <span className="primary-header">Tools</span> I use
        </h1>
        <div data-aos="fade-up">
          <Toolstack data-aos="fade-up" />
        </div>

      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
