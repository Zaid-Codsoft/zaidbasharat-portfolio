import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/port.png";
import emotion from "../../Assets/Projects/zaid.png";
import editor from "../../Assets/Projects/weather.png";
import chatify from "../../Assets/Projects/bazzar.png";
import suicide from "../../Assets/Projects/digi.png";
import bitsOfCode from "../../Assets/Projects/restaurant.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Bazaar"
              description="A full-stack e-commerce platform built with MERN (MongoDB, Express.js, React.js, Node.js) stack. Features include user authentication, product catalog management, shopping cart functionality,wishlist,revieww, secure payment integration, and real-time order tracking. The application demonstrates responsive design and follows modern web development practices."
              ghLink="https://github.com/Zaid-Codsoft/Bazaar-Amazon"
              demoLink="https://bazaar-application-final-deployment.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Restaurant Website"
              description="A modern and responsive restaurant website built with HTML, JavaScript, and Tailwind CSS. Features an elegant user interface with smooth animations, interactive menu displays, reservation system, and mobile-friendly design. The website showcases the restaurant's ambiance, menu items, and booking capabilities while maintaining optimal performance."
              ghLink="https://github.com/Zaid-Codsoft/Restaurant_Website"
              demoLink="https://restaurantlehnzo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather.io"
              description="An advanced weather application that combines real-time weather data with AI-powered assistance. Built with modern web technologies, it integrates weather API for accurate forecasts and features an intelligent chatbot powered by DeepSeek and OpenAI APIs. Users can get detailed weather information and interact with the AI assistant for weather-related queries."
              ghLink="https://github.com/Zaid-Codsoft/Weather-Web--Application"
              demoLink="https://weather-bot-web-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blog Website"
              description="A modern static blog website showcasing my portfolio and technical writing. Built with clean and efficient code practices, featuring responsive design, optimized performance, and elegant UI/UX. The website includes sections for blog posts, project showcases, and personal achievements, all while maintaining fast load times and SEO-friendly structure."
              ghLink="https://github.com/Zaid-Codsoft/my-portfolio"
              demoLink="https://zaid477-portfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="DigiMultiX"
              description="A custom-built e-commerce website developed with WordPress for a client. Implemented using WooCommerce for robust shopping functionality, custom themes, and plugins for enhanced features. The site includes product catalogs, secure payment gateways, order management, and a responsive design optimized for all devices. Delivered a user-friendly interface with seamless shopping experience and efficient store management capabilities."
              // ghLink="https://github.com/Zaid-Codsoft/"
              demoLink="https://www.digimultix.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Zaid - Portfolio"
              description="A dynamic and interactive portfolio website built with React.js, showcasing my professional journey and technical expertise. Features a modern UI with smooth transitions, responsive design, and sections for projects, skills, and experience. Implemented with React components, hooks, and modern JavaScript practices. The site demonstrates clean code architecture, optimal performance, and seamless user experience across all devices."
              ghLink="https://github.com/Zaid-Codsoft/zaidbasharat-portfolio"
              demoLink="https://zaidbasharat-portfolio.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
