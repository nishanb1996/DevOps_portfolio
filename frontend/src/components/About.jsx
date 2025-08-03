import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>
      <Row>
       <Col lg={8} className="mx-auto">
  <Card className="border-0 shadow-sm">
    <Card.Body className="p-5" style={{ textAlign: 'justify' }}>
      <p className="lead">
        Hello, I’m Nishan Bansode, a DevOps Engineer with 3 years of experience in automating CI/CD pipelines, deploying microservices on Kubernetes, and building secure, scalable infrastructure on AWS and other cloud platforms.
      </p>

      <h4 className="mt-4">Professional Journey</h4>
      <p>
        I currently work at <strong>Mind Spark Technology</strong> where I lead end-to-end DevOps pipelines and cloud-native deployments using AWS EKS, Jenkins, Docker, and Terraform. I previously interned at GRASS Linux Training Centre, where I built my foundation in DevOps practices and tools.
      </p>
      <p>
        My recent work includes implementing Blue-Green deployments for microservices on AWS EKS, optimizing Docker images, automating builds with Jenkins, and ensuring 99.9% uptime with zero-downtime deployments.
      </p>

      <h4 className="mt-4">DevOps Approach</h4>
      <p>
        I believe in continuous improvement, automation, and secure design. My workflow emphasizes pipeline efficiency, scalable architecture, and proactive monitoring using tools like CloudWatch, SonarQube, and AWS OpenSearch.
      </p>

      <h4 className="mt-4">Skills & Tools</h4>
      <p>
        <strong>Languages:</strong> Python, Shell<br/>
        <strong>DevOps Tools:</strong> Jenkins, Docker, Kubernetes, Terraform<br/>
        <strong>Cloud Platforms:</strong> AWS, Azure, GCP<br/>
        <strong>Databases:</strong> PostgreSQL, MongoDB, DynamoDB<br/>
        <strong>Others:</strong> Git, GitHub, Maven, Tomcat, SonarQube
      </p>

      <h4 className="mt-4">Certifications & Education</h4>
      <p>
        I’m an <strong>AWS Certified Solutions Architect – Associate</strong>, with a B.E. in Mechanical Engineering from Gh. Raisoni Academy of Engineering and Technology, Nagpur.
      </p>

      <h4 className="mt-4">Connect With Me</h4>
      <p>
        Let’s collaborate or connect over DevOps! You can reach me at <a href="mailto:nishanbansode25@outlook.com">nishanbansode25@outlook.com</a>, or explore my work on 
        <a href="https://github.com/nishanb1996" target="_blank" rel="noopener noreferrer"> GitHub</a> and 
        <a href="https://www.linkedin.com/in/nishan-bansode-875b561a9/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>.
      </p>
    </Card.Body>
  </Card>
</Col>

      </Row>
    </Container>
  );
};

export default About;