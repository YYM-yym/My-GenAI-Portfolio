import React from "react";  // <-- Import useState
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Type from "./Type";
import "./home.css";

function Home() {


  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello World!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'm
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Yumo Yao</strong>
              </h1>


              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>
            </Col>


          </Row>
        </Container>
      </Container>
      <ScrollToTop />
    </section>
  );
}

export default Home;
