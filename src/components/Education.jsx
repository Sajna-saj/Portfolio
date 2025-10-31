import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Sc Artificial Intelligence and Machine Learning',
      institution: 'AJK College of Arts and Science, Coimbatore',
      percentage: '73%',
      duration: '08/22 - 05/25'
    },
    {
      degree: 'Plus Two',
      institution: 'GVGHSS, Pathiripala',
      percentage: '86%',
      duration: '06/20 - 06/22'
    },
    {
      degree: 'SSLC',
      institution: 'M.E.S, Mundur',
      percentage: '98%',
      duration: '06/19 - 05/20'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-list">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item" style={{ '--item-index': index }}>
              <h3>{edu.degree}</h3>
              <p><strong>Institution:</strong> {edu.institution}</p>
              <p><strong>Percentage:</strong> {edu.percentage}</p>
              <p><strong>Duration:</strong> {edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
