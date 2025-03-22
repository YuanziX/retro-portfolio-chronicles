
import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

// Components
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Animation for sections
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('fade-in-section');
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-retro-background text-retro-text relative overflow-x-hidden">
      {/* Retro CRT effects */}
      <div className="retro-scan-line"></div>
      <div className="retro-crt-flicker"></div>
      <div className="retro-noise"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header data={portfolioData} />
        
        <main>
          <div className="retro-divider"></div>
          <About data={portfolioData} />
          
          <div className="retro-divider"></div>
          <Skills data={portfolioData} />
          
          <div className="retro-divider"></div>
          <Projects data={portfolioData} />
          
          <div className="retro-divider"></div>
          <Experience data={portfolioData} />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
