import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey in programming began with a passion for creating impactful solutions,
              and since then, I've been constantly growing and learning
              <br />
              <br />
              I am an <span className="purple">AI Automation Engineer</span> specializing in{" "}
              <i>
                <b className="purple">
                  intelligent workflow automation, AI agents, and business process optimization
                </b>
              </i>
              <br />
              <br />
              My areas of expertise include{" "}
              <i>
                <b className="purple">AI-Powered Automation</b> with a focus on{" "}
                <b className="purple">
                  Workflow Orchestration and Intelligent Business Solutions
                </b>
              </i>
              <br />
              <br />
              I love building projects using{" "}
              <b className="purple">Python and JavaScript</b> for AI/ML applications, along with{" "}
              <i>
                <b className="purple">
                  the complete MERN Stack for full-stack applications
                </b>
              </i>
              . I also have experience with{" "}
              <i>
                <b className="purple">WordPress Development and Database Management</b>
              </i>
              <br />
              <br />
              <span className="purple">AI & Machine Learning Expertise:</span>
              <br />
              I'm passionate about{" "}
              <i>
                <b className="purple">
                  Natural Language Processing (NLP), AI Agents, and Intelligent Automation Systems
                </b>
              </i>
              . I develop{" "}
              <b className="purple">custom chatbots</b> and{" "}
              <b className="purple">AI-powered workflow tools</b> that streamline business processes.
              <br />
              <br />
              My expertise includes{" "}
              <i>
                <b className="purple">
                  Large Language Model integration, custom AI model training, and conversational AI development
                </b>
              </i>
              . I create{" "}
              <b className="purple">enterprise workflow automation systems</b> and{" "}
              <b className="purple">intelligent business process management tools</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Zaid-Codsoft"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/zaid.rajput.1029/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zaid-b-76505629b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/zaid_rajput_7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
