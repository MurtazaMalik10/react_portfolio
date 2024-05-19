import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import './Skills.css';

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: '.NET', level: 80 },
  { name: 'React.js', level: 65 },
  { name: 'Docker', level: 75 },
  { name: 'AWS', level: 70 },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <Container>
      <h2 className="section-title">Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <div className="skill">
              <h4 className="skill-name">{skill.name}</h4>
              <Badge variant={getBadgeVariant(skill.level)}>{`${skill.level}%`}</Badge>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

const getBadgeVariant = (level) => {
  if (level >= 80) return 'success';
  if (level >= 60) return 'warning';
  return 'danger';
};

export default Skills;
