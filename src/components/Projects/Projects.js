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
import gym from "../../Assets/Projects/fit-gym-club.png";
import travel from "../../Assets/Projects/travel-mock.png";
import lead from "../../Assets/Projects/lead.jpeg";
import reviu from "../../Assets/Projects/reviu.png";
import imobile from "../../Assets/Projects/imobile.png";
import voice from "../../Assets/Projects/voice.png";
import quran from "../../Assets/Projects/quran.png";
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Fit Gym Club"
              description="I create advanced websites with a robust tech stack: HTML, CSS, JavaScript, Node.js, and React. HTML lays a solid foundation for content, while CSS crafts responsive, sleek designs. JavaScript and React drive interactivity, delivering dynamic components like live trackers or smooth UI updates. Node.js powers the backend with efficient, scalable APIs. Together, they ensure fast, modern, and user-friendly sites built for performance!."
              ghLink="https://github.com/Zaid-Codsoft/fit-gym-club"
              demoLink="https://fit-gym-club.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Agency"
              description="A modern travel agency website built with React and Bootstrap, featuring winter adventures in Pakistan. The responsive site showcases tour packages, team profiles, and destination details. With an elegant UI, users can explore travel options, view stunning winter landscapes, and easily contact the agency through multiple channels."
              ghLink="https://github.com/Zaid-Codsoft/travel-agency"
              demoLink="https://travel-agency-trip.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lead}
              isBlog={false}
              title="AI-Powered Lead Generation & Email Automation – Reviu.pk"
              description="Built an AI-driven system integrating data sources for lead generation, with automated email and social media workflows. Used AI models for content personalization and seamless integrations to streamline outreach, boost acquisition, and save manual effort."
              ghLink="https://github.com/Zaid-Codsoft/Reviu-Campagin-Automation"
              // demoLink="https://travel-agency-trip.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reviu}
              isBlog={false}
              title="Bussiness Review Platform – Reviu.pk"
              description="Developed using Node.js, React/Vue, Prisma ORM, and PostgreSQL, deployed on Vercel and Railway. Built an AI-driven system that integrates multiple data sources for lead generation, with automated workflows for emails, social media content, and custom chatbots. Leveraged AI models for text generation, personalization, and voice assistant integration, streamlining outreach and improving scalability while reducing manual effort."
              ghLink="https://github.com/Zaid-Codsoft/Reviu-Campagin-Automation"
               demoLink="https://www.reviu.pk/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imobile}
              isBlog={false}
              title="iMobile"
              description="Built using Laravel, MySQL, and Vue.js, with deployment on cloud-based infrastructure. Developed an AI-powered price detection system using web scraping and automation workflows to monitor competitor pricing and market trends in real time. Integrated alerts, data pipelines, and reporting dashboards, enabling faster decision-making and reducing manual monitoring efforts."
              // ghLink="https://github.com/Zaid-Codsoft/Reviu-Campagin-Automation"
               demoLink="https://www.imobile.co.uk/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voice}
              isBlog={false}
              title="Voice Assistant - Reviu.pk"
              description="Built using Node.js, Express.js, and MongoDB, deployed on Vercel. Developed a voice assistant application that uses OpenAI's API to generate responses based on user queries. Implemented a RESTful API for seamless integration with frontend applications and a MongoDB database for storing user interactions and preferences."
              ghLink="https://github.com/Zaid-Codsoft/Voice-Assistant"
              demoLink="https://www.reviu.pk/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quran}
              isBlog={false}
              title="Quran Website"
              description="Developed a WordPress website providing Quranic content with custom themes and plugins, optimized for SEO, performance, and accessibility. Integrated ACF (Advanced Custom Fields) for flexible content management, ensuring a smooth user experience across devices."
              // ghLink="https://github.com/Zaid-Codsoft/Voice-Assistant"
              demoLink="https://www.equranglobal.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
