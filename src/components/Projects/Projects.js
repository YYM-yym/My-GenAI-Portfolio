import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath="🔐"
              title="Paymo – E-wallet for Safe Transaction Empowered by Blockchain"
              description="This project revolved around creating a secure e-wallet named Paymo. It's a blockchain-based initiative that integrated deep learning to enhance transaction security, leading to higher user trust."
              // ghLink="#"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath="🧠"
              title="Neural Multi-task Learning for Disaster Detection and Sentiment Classification"
              description="This initiative focused on processing and analyzing sentiment and disaster data using neural networks. It achieved an F1 score of 0.77 by leveraging techniques like LSTM and weighted loss."
              ghLink="https://github.com/YYM-yym/Neural-Multi-task-Learning-for-Disaster-Detection-and-Sentiment-Classification"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath="🤖"
              title="Explainable AI Analysis on Employee Attrition"
              description="This project utilized explainable AI (XAI) tools to interpret employee attrition data, refining model performance to achieve a 0.9 F1 score by enhancing feature selection."
              ghLink="https://github.com/YYM-yym/explainable-AI-on-employee-attrition"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath="🌐"
              title="Operations Research Analytics on Traveling Salesman Problem"
              description="Aimed at optimizing delivery routes using the traveling salesman problem, this operational research project employed Python's Gurobi package for efficient solutions."
              // ghLink="#"
              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath="💹"
              title="Impact of Volcker Rule on Banks: A Statistical Analysis"
              description="This finance-focused study analyzed the effects of the Volcker Rule on banks using regression models and propensity score matching."
              // ghLink="#"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath="🎓"
              title="Customer Retention at HSBC | New York University Capstone Project"
              description="This data analytics project achieved a 96% accuracy rate in predicting customer churn at HSBC by examining behavior patterns."
              ghLink="https://github.com/YYM-yym/Customer-Retention-at-HSBC"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath="✈️"
              title="Online Air Ticket Reservation System"
              description="An integrated reservation system combining JavaScript, HTML, and Python's PyMySQL package to facilitate online air ticket bookings."
              ghLink="https://github.com/YYM-yym/Air-Ticket-Purchace-Database-System"
              // demoLink="#"
            />
          </Col>

        </Row>



      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
