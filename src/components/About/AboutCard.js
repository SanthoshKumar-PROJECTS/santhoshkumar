import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Santhosh Kumar </span>
            from <span className="purple">Chennai, India.</span>I am currently
            working as a Software Developer in Riyadvi Software Technologies,
            where I developed & maintained mobile applications for both Android
            and iOS platforms using React Native to fulfill client requirements.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Cinema
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photo Editing using Canva & Picsart
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>"Live and Let Live!" </p> */}
          {/* <footer className="blockquote-footer">Santhosh</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
