import React from "react";
import { Col, Row } from "react-bootstrap";
<<<<<<< HEAD
import { CgCPlusPlus } from "react-icons/cg";
=======
>>>>>>> ffab9099c6da21b57ba96ea8513477de04028957
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiGit,
} from "react-icons/di";
<<<<<<< HEAD
import { SiPytorch, SiTensorflow, SiFirebase } from "react-icons/si";
=======
import { SiFirebase } from "react-icons/si";
>>>>>>> ffab9099c6da21b57ba96ea8513477de04028957

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
