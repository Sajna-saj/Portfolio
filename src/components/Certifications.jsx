import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    'Advanced OpenCV in MindLuster',
    'Object Detection and Recognition in MindLuster'
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2>Certifications</h2>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item" style={{ '--cert-index': index }}>
              <p>{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
