import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Tabs, Tab } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const devOpsProjects = [
    {
      title: "Containerized Microservices on AWS EKS (Blue-Green Deployment)",
      description: "Implemented a full microservices CI/CD workflow on AWS EKS using Kubernetes and Docker.",
      image: "eks-deployment.jpg",
      tags: ["AWS", "Kubernetes", "Docker", "Maven", "CloudWatch", "Blue-Green"],
      github: "https://github.com/nishanb1996",
      outcomes: "Achieved 99.9% uptime with zero-downtime deployments. Built and deployed 10+ Docker images, reduced image size by 20%, and used Kubernetes YAML to deploy 5+ microservices with traffic switching."
    },
    {
      title: "End-to-End Pipeline to Deploy Java App on Tomcat Server",
      description: "Created a full automation pipeline for Java app deployment using Jenkins declarative pipelines.",
      image: "tomcat-deploy.jpg",
      tags: ["Java", "Jenkins", "Maven", "SonarQube", "Tomcat", "CI/CD"],
      github: "https://github.com/nishanb1996/two-tier-flask-app.git",
      outcomes: "Automated 100% of build and deployment processes. Integrated code quality tools achieving 95%+ code score, and reduced manual deployment time by 70%."
    },
    {
      title: "Node.js Web Application Deployment on Azure with Load Balancing",
      description: "Deployed a scalable Node.js web app on Azure using VMSS, Azure Load Balancer, and DNS-based domain routing.",
      image: "azure-node-deploy.jpg",
      tags: ["Azure", "Node.js", "VMSS", "Load Balancer", "DNS", "CI/CD"],
      github: "https://github.com/nishanb1996",
      outcomes: "Provisioned auto-scaling VMSS and configured Azure Load Balancer to distribute traffic across instances. Linked a custom domain via Azure DNS and achieved 99.5% SLA-backed availability with resilient backend architecture."
    }
  ];

  const freelanceProjects = [
    {
      title: "Multi-Cloud Application Deployment",
      description: "Designed and deployed a resilient Node.js application across AWS, Azure, and GCP with unified CI/CD pipeline.",
      image: "multi-cloud.jpg",
      tags: ["AWS", "Azure", "GCP", "CI/CD", "DNS", "Reverse Proxy"],
      github: "https://github.com/nishanb1996",
      outcomes: "Enabled high availability across regions and providers, implemented failover strategy using DNS routing and health checks, and reduced deployment risk by 60%."
    },
    {
      title: "Three-Tier Web Application on AWS",
      description: "Architected and deployed a secure three-tier web app using EC2, RDS, and ALB with autoscaling and monitoring.",
      image: "three-tier.jpg",
      tags: ["AWS", "EC2", "RDS", "ALB", "Auto Scaling", "VPC", "CloudWatch"],
      github: "https://github.com/nishanb1996",
      outcomes: "Achieved scalable, modular deployment with separate layers for web, application, and database. Ensured 99.9% uptime and strong isolation using private/public subnets and IAM roles."
    }
  ];

  const renderProjectCards = (projects) =>
    projects.map((project, index) => (
      <Col key={index} lg={6} className="mb-4">
        <Card className="h-100 project-card border-0 shadow-sm">
          <Card.Body className="p-4">
            <h3>{project.title}</h3>
            <div className="mb-3">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} bg="primary" className="me-2 mb-2">{tag}</Badge>
              ))}
            </div>
            <Card.Text>{project.description}</Card.Text>
            <h5 className="mt-3">Outcomes:</h5>
            <Card.Text>{project.outcomes}</Card.Text>
          </Card.Body>
          <Card.Footer className="bg-white border-0 p-4">
            <div className="d-flex justify-content-center">
              <Button variant="outline-dark" href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="me-2" /> GitHub
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    ));

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center mb-4">
          <h2 className="section-title">Projects Portfolio</h2>
          <p className="lead">
            Explore DevOps & Freelance projects demonstrating automation, scalability, and multi-cloud infrastructure.
          </p>
        </Col>
      </Row>

      <Tabs defaultActiveKey="devops" id="project-tabs" className="mb-5 justify-content-center">
        <Tab eventKey="devops" title="DevOps Projects">
          <Row>
            {renderProjectCards(devOpsProjects)}
          </Row>
        </Tab>
        <Tab eventKey="freelance" title="Freelancing Projects">
          <Row>
            {renderProjectCards(freelanceProjects)}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Projects;
