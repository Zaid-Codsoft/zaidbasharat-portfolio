import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Particle from "../Particle";
import automationCV from "../../Assets/Automation-CV.pdf";
import fullstackCV from "../../Assets/Full-stack-CV.pdf";
import { AiOutlineDownload, AiOutlineFileText, AiOutlineEye } from "react-icons/ai";

function ResumeNew() {
  const [selectedCV, setSelectedCV] = useState(automationCV);
  const [cvName, setCvName] = useState("AI Automation Engineer CV");

  const cvOptions = [
    {
      name: "AI Automation Engineer CV",
      file: automationCV,
      description: "Specialized in AI, NLP, Workflow Automation, and Business Process Optimization",
      icon: "🤖",
      features: [
        "Natural Language Processing (NLP)",
        "AI Agents & Automation",
        "Workflow Orchestration",
        "Business Process Optimization",
        "Custom AI Model Training"
      ]
    },
    {
      name: "Full Stack Developer CV",
      file: fullstackCV,
      description: "MERN Stack, React, Node.js, and Modern Web Technologies",
      icon: "💻",
      features: [
        "MERN Stack Development",
        "React.js & Node.js",
        "Mobile App Development",
        "Database Management",
        "API Development & Integration"
      ]
    }
  ];

  const handleCVSelect = (cv) => {
    setSelectedCV(cv.file);
    setCvName(cv.name);
  };

  const handleDownload = (cvFile, cvName) => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = `${cvName.replace(/\s+/g, '-')}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCV = (cvFile) => {
    window.open(cvFile, '_blank');
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* CV Selection Section */}
        <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
          <Col md={10}>
            <h2 style={{ textAlign: "center", marginBottom: "30px", color: "var(--text-primary)" }}>
              Choose Your <span className="purple">CV Format</span>
            </h2>
            <Row>
              {cvOptions.map((cv, index) => (
                <Col md={6} key={index} style={{ marginBottom: "20px" }}>
                  <Card 
                    className={`cv-option-card ${selectedCV === cv.file ? 'selected' : ''}`}
                    onClick={() => handleCVSelect(cv)}
                    style={{ cursor: 'pointer', height: '100%' }}
                  >
                    <Card.Body style={{ textAlign: 'center', padding: '25px' }}>
                      <div style={{ fontSize: '3em', marginBottom: '15px' }}>{cv.icon}</div>
                      <h4 style={{ marginBottom: '15px', color: 'var(--text-primary)' }}>{cv.name}</h4>
                      <p style={{ fontSize: '1em', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                        {cv.description}
                      </p>
                      <div style={{ textAlign: 'left' }}>
                        <h6 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Key Skills:</h6>
                        <ul style={{ paddingLeft: '20px', margin: 0 }}>
                          {cv.features.map((feature, idx) => (
                            <li key={idx} style={{ color: 'var(--text-secondary)', marginBottom: '5px', fontSize: '0.9em' }}>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Action Buttons */}
        <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
          <Col md={8} style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>
              Selected: <span className="purple">{cvName}</span>
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleDownload(selectedCV, cvName)}
                style={{ minWidth: "200px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
              <Button
                variant="outline-primary"
                size="lg"
                onClick={() => handleViewCV(selectedCV)}
                style={{ minWidth: "200px" }}
              >
                <AiOutlineEye />
                &nbsp;View CV
              </Button>
            </div>
          </Col>
        </Row>

        {/* CV Preview Section */}
        <Row style={{ justifyContent: "center" }}>
          <Col md={8}>
            <Card className="cv-preview-card">
              <Card.Body style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '4em', marginBottom: '20px' }}>📄</div>
                <h4 style={{ marginBottom: '15px', color: 'var(--text-primary)' }}>
                  {cvName} Ready
                </h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '25px' }}>
                  Your selected CV is ready for download or viewing. Click the buttons above to access your CV.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                  <Button
                    variant="success"
                    onClick={() => handleDownload(selectedCV, cvName)}
                  >
                    <AiOutlineDownload />
                    &nbsp;Download Now
                  </Button>
                  <Button
                    variant="info"
                    onClick={() => handleViewCV(selectedCV)}
                  >
                    <AiOutlineEye />
                    &nbsp;Open in New Tab
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
