import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zaid Basharat </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />
            I am currently pursuing Software Engineering at FAST University, Islamabad,
            where I'm honing my skills in various aspects of software development.
            <br />
            <br />
            As a passionate software developer, I've had the opportunity to work on
            diverse projects through freelancing and outsourcing platforms. My journey
            in software development has been driven by a desire to create impactful
            solutions that solve real-world problems.
            <br />
            <br />
            <span className="purple">Technical Skills:</span>
            <br />
            <span className="purple">Programming Languages:</span>
            <br />
            • C++ for Data Structures and Algorithms
            <br />
            • JavaScript (ES6+) for Web Development
            <br />
            <br />
            <span className="purple">Frontend Development:</span>
            <br />
            • HTML5 & CSS3
            <br />
            • Tailwind CSS for Modern UI Design
            <br />
            • React.js for Dynamic Web Applications
            <br />
            • React Native for Mobile App Development
            <br />
            <br />
            <span className="purple">Backend Development:</span>
            <br />
            • Node.js with Express.js
            <br />
            • RESTful API Development
            <br />
            • Nodemon for Development Workflow
            <br />
            <br />
            <span className="purple">Database Technologies:</span>
            <br />
            • SQL for Relational Databases
            <br />
            • MongoDB for NoSQL Solutions
            <br />
            <br />
            <span className="purple">Full Stack Expertise:</span>
            <br />
            • MERN Stack Development (MongoDB, Express, React, Node)
            <br />
            • WordPress Development and Customization
            <br />
            <br />
            <span className="purple">Professional Experience:</span>
            <br />
            • Successfully delivered multiple freelance projects
            <br />
            • Collaborated with international clients
            <br />
            • Developed scalable software solutions
            <br />
            • Participated in various hackathons and coding competitions
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Software Solutions
            </li>
            <li className="about-activity">
              <ImPointRight /> Freelance Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving & Algorithm Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to create innovative solutions that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Zaid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
