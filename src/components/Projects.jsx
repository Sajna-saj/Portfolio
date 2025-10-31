import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'Study Nestle: An education platform',
      description: 'Developed an educational website uses semantic HTML for clear sections and CSS for a responsive, visually appealing design across all devices.'
    },
    {
      title: 'Face voice: AI-powered attendance system',
      description: 'Developed a smart attendance system integrating face recognition and voice verification to ensure secure, contactless, and reliable identity authentication.'
    },
    {
      title: 'Fraud shield for credit transaction',
      description: 'Developed a credit card fraud detection system using anomaly detection techniques to identify suspicious transactions and enhance financial security.'
    },
    {
      title: 'Lane line and object detection',
      description: 'Developed a lane and object detection system that alerts drivers with a warning beep when an object intrudes into the same lane.'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div key={index} className="project-item" style={{ '--item-index': index }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
