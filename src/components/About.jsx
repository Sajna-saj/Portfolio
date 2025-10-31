import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          As a MERN stack developer, I am passionate about creating efficient and user-friendly web
          applications, continuously expanding my expertise in full-stack JavaScript technologies. Eager to
          embrace new challenges and contribute to innovative projects in the dynamic field of web
          development.
        </p>
        <div className="contact-info">
          <p><strong>Address:</strong> Vadssery, Kunduvampadam Road, Palakkad</p>
          <p><strong>Email:</strong> <a href="mailto:sajnasaj10252@gmail.com">sajnasaj10252@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sajna-shirin-ms-1a69b2264" target="_blank" rel="noopener noreferrer">sajna-shirin-ms-1a69b2264</a></p>
        </div>
      </div>
    </section>
  );
};

export default About;
