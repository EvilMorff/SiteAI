import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Header, 
  Hero, 
  Services, 
  About, 
  Contact, 
  Footer 
} from './components';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;