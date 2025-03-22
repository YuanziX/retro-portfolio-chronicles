
import React from 'react';
import { PortfolioData } from '../data/portfolio';

interface AboutProps {
  data: PortfolioData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="retro-container">
      <h2 className="font-display text-3xl text-retro-accent3 mb-6">ABOUT.exe</h2>
      
      <div className="retro-card">
        <div className="flex items-center mb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-retro-accent1"></div>
            <div className="w-3 h-3 rounded-full bg-retro-accent3"></div>
            <div className="w-3 h-3 rounded-full bg-retro-accent2"></div>
          </div>
          <div className="ml-4 font-mono text-xs text-retro-muted">terminal - 80×24</div>
        </div>
        
        <div className="font-mono text-sm leading-relaxed space-y-4">
          <p className="terminal-prefix">
            Hello, I'm John Doe. I'm a full-stack developer passionate about creating digital experiences that are both functional and beautiful.
          </p>
          <p className="terminal-prefix">
            With a background in web development, I specialize in building robust applications using modern technologies. I care deeply about user experience, clean code, and solving real-world problems.
          </p>
          <p className="terminal-prefix">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good coffee while reading tech blogs.
          </p>
          <p className="terminal-prefix cursor-blink">
            Let's build something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
