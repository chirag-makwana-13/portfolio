import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="HRMS ( Django & React )"
              description="A comprehensive Human Resource Management System that allows employees to check-in, check-out, take breaks, and resume work, all while maintaining accurate attendance records. The system also includes company policies, leave management, a holiday list, and a birthday calendar to streamline HR processes efficiently."
              ghLink="https://github.com/chirag-makwana-13/hrms_django"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Netflix Clone ( React )"
              description="A sleek movie streaming application built using React, integrating a free movie API to display trending movies, TV shows, and genres. It features a modern UI, search functionality, and dynamic content fetching, providing a Netflix-like experience."
              ghLink="https://github.com/chirag-makwana-13/netflix_clone"
              demoLink="https://chirag-makwana-13.github.io/netflix_clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="One For All ( Node & Express.js ) "
              description="A task management system built with Node.js and Express.js, featuring JWT-based authentication for secure login. Users can create, view, update, and delete tasks, with all tasks displayed in an organized manner after login. Ensures secure access and proper user management."
              ghLink="https://github.com/chirag-makwana-13/Registration"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="HRMS ( Django & Typescript )"
              description="A robust Human Resource Management System built with Django for the backend and TypeScript for the frontend, ensuring type safety and scalability. It includes employee check-in/check-out, break management, leave tracking, holiday lists, company policies, and a birthday calendar, streamlining HR operations efficiently."
              ghLink="https://github.com/chirag-makwana-13/typescript_hrms"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Personal Portfolio ( React )"
              description="A modern and responsive portfolio website built with React, showcasing projects, skills, experience, and contact details. It features smooth animations, dark/light mode, and dynamic content for an interactive user experience."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Ludo & Snake and Ladders ( Python ) "
              description="A fun board game built using Python, allowing players to enjoy Ludo and Snake & Ladders with automated dice rolls and game logic. It features turn-based gameplay, player movement tracking, and interactive visuals, making it an engaging experience."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
