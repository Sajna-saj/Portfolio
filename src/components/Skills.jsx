import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    'HTML', 'CSS', 'JavaScript', 'Python',
    'Artificial Intelligence: Natural language processing, Computer vision',
    'Machine Learning: Neural Networks'
  ];

  const softSkills = [
    'Problem solving', 'Teamwork', 'Time Management',
    'Effective Communication', 'Critical Thinking'
  ];

  const languages = ['Malayalam', 'Tamil', 'English'];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category" style={{ '--category-index': 0 }}>
            <h3>Technical Skills</h3>
            <ul>
              {technicalSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category" style={{ '--category-index': 1 }}>
            <h3>Soft Skills</h3>
            <ul>
              {softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category" style={{ '--category-index': 2 }}>
            <h3>Languages</h3>
            <ul>
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
