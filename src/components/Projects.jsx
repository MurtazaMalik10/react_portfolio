import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  {
    name: 'DM Shopping',
    description: 'E-Commerce Platform Built in Flutter',
    image: 'project1.jpg'
  },
  {
    name: 'Job Bank Pakistan',
    description: 'Online Job Portal Built in .NET and Blazor',
    image: 'project1.jpg'
  },
  {
    name: 'Tourify',
    description: 'An Integrated Tourism and E-Commerce Platform',
    image: 'project3.jpg'
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <Container>
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
