import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>SAJNA SHIRIN M.S</h1>
        <p>MERN Stack Developer</p>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#internships">Internships</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#certifications">Certifications</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
