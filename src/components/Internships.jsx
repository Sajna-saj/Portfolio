import React from 'react';
import './Internships.css';

const Internships = () => {
  const internshipsData = [
    {
      title: 'MERN Full stack development',
      company: 'Softroniics Software Solutions',
      description: 'Focused on MongoDB, Express.js, React, and Node.js. Developed enhanced user engagement and improved web application through code optimization.',
      duration: '05/25 - PRESENT'
    },
    {
      title: 'Machine learning',
      company: 'Softroniics Software Solutions',
      description: 'Completed an internship at focused on developing and optimizing machine learning models for predictive analytics.',
      duration: '04/24 - 05/24'
    },
    {
      title: 'Python',
      company: 'Softroniics Software Solutions',
      description: 'Completed an internship at focused on developing and optimizing machine learning models for predictive analytics.',
      duration: '06/23 - 07/23'
    },
    {
      title: 'Artificial intelligence',
      company: 'Skolar',
      description: 'Focused on artificial intelligence applications. Assisted in developing and testing machine learning algorithms for natural language processing.',
      duration: '04/24 - 06/24'
    },
    {
      title: 'Soft Skills Training',
      company: 'Infosys BPM Ltd',
      description: 'Completed a soft skills training program focused on enhancing communication, teamwork, and leadership abilities, with an effective collaboration in professional settings.',
      duration: '09/23 - 10/23'
    }
  ];

  return (
    <section id="internships" className="internships">
      <div className="container">
        <h2>Internships</h2>
        <div className="internships-list">
          {internshipsData.map((internship, index) => (
            <div key={index} className="internship-item" style={{ '--item-index': index }}>
              <h3>{internship.title}</h3>
              <p><strong>Company:</strong> {internship.company}</p>
              <p>{internship.description}</p>
              <p><strong>Duration:</strong> {internship.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
