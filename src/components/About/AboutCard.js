import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alexander Thuo </span>
            a dedicated Software Developer based in <span className="purple"> Nairobi, Kenya.</span>
            <br />With a passion for crafting visually appealing and high-performing web applications, I strive to deliver exceptional user experiences.
            <br />
            <br />
            Beyond my professional endeavors in coding, I find joy in engaging in various activities. I am an avid gamer, appreciating the immersive worlds
            and challenges they offer. Additionally, I actively participate in football matches, enjoying the camaraderie and excitement of the sport.
            Exploring the wonders of nature through hiking is yet another passion that brings me fulfillment.
          </p>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Alexander Thuo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
