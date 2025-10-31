import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AdditionalActivities from './components/AdditionalActivities';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section"><About /></div>
      <div className="section"><Education /></div>
      <div className="section"><Internships /></div>
      <div className="section"><Projects /></div>
      <div className="section"><Skills /></div>
      <div className="section"><AdditionalActivities /></div>
      <div className="section"><Certifications /></div>
      <Footer />
    </div>
  );
}

export default App;
