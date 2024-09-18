import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import AirbnbClone from "../../Assets/Projects/AirbnbCLone.png";
import AmazonClone from "../../Assets/Projects/amazonclone.png";
import Crownwear from "../../Assets/Projects/crownwear.png";
import Muiaa from "../../Assets/Projects/muiaa.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Muiaa}
              isBlog={false}
              title="MUIAA Pesa"
              description="MUIAA Pesa is the financial arm of MUIAA Ltd. It is a digital lending platform that brings lenders and borrowers together to offer quality lead-generation services."
              link="https://pesa.muiaa.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AirbnbClone}
              isBlog={false}
              title="AirbnbClone"
              description="Airbnb Clone which I build the frontend part only using Reactjs, material ui, react-date-range picker and react-router-dom"
              link="https://github.com/zanderthuo/Airbnb-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AmazonClone}
              isBlog={false}
              title="Amazon Clone"
              description="Amazon clone which I build using Reactjs, material ui, stripe, firebase and axios"
              link="https://github.com/zanderthuo/amazon-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crownwear}
              isBlog={false}
              title="Crown Wear"
              description="Crown Wear is an ecommerce web app which I built using only Reactjs, firebase, react-redux, redux, react-router-dom and styled-components"
              link="https://github.com/zanderthuo/crown-wear"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
