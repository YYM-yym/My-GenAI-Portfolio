// Experiences.js
import React from 'react';
import './experiences.css';
import { Container, Row, Col } from "react-bootstrap";

const experiencesData = [
    {
        company: 'SAP',
        location: 'Singapore',
        position: 'AI Engineer Intern',
        period: 'May 2023 – Now',
        summary: 'Contributed to knowledge graph development, contract data retrieval and analysis, and prompt engineering. Managed projects using Agile, Scrum, and Kanban.'
    },
    {
        company: 'ParkRoyal on Beach Road',
        location: 'Singapore',
        position: 'Data Analyst',
        period: 'December 2022 – February 2023',
        summary: 'Streamlined occupancy reporting with auto-updated visualizations and analyzed flight records for customer insights.'
    },
    {
        company: 'Shanghai Disney Resort',
        location: 'Shanghai, China',
        position: 'Intern, Revenue Management & Analytics',
        period: 'May 2021 – August 2021',
        summary: 'Developed a revenue prediction model and automatized data processes, leading to significant workflow improvements.'
    },
    {
        company: 'Sinolink Investment Services Co., Ltd.',
        location: 'Shanghai, China',
        position: 'Data Analyst Intern',
        period: 'May 2020 – August 2020',
        summary: 'Maintained financial database and managed company assets.'
    }
];

function Experiences() {
    return (
        <Container className="experiences-section">
            <Row className="justify-content-center mb-5">
                <Col md={7} className="text-center">
                    <h1 className="experience-title">
                        <span className="primary-header">My</span> Experiences
                    </h1>
                </Col>
            </Row>
            
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="timeline">
                        {experiencesData.map((exp, idx) => (
                            <div key={exp.company} className="experience-container">
                                <div className={`experience-block ${idx % 2 === 0 ? 'left' : 'right'}`}>
                                    <h3 className="experience-position">{exp.position}</h3>
                                    <h4 className="experience-company">{exp.company} </h4>
                                    <p className="experience-summary">{exp.summary}</p>
                                </div>
                                <div className={`exp-info ${idx % 2 !== 0 ? 'right' : 'left'}`}>
                                    <p className='experience-period'>{exp.period}</p>
                                    <p className="experience-location">{exp.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


export default Experiences;
