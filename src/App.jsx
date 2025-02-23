import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code, Menu, X, Globe, Briefcase, Calendar, ChevronRight, Rocket, Bug, PenTool as Tool, Award, Trophy, FileText, Download, Star, Bookmark, Medal } from 'lucide-react';

// Lazy load sections
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Certifications = lazy(() => import('./components/Certifications'));
const Resume = lazy(() => import('./components/Resume'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  const [formState, handleSubmit] = useForm("xdkkqrod");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [typedText, setTypedText] = useState('');
  const textToType = 'Full Stack Developer | Problem Solver | Code Enthusiast';
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (currentCharIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, textToType]);

  useEffect(() => {
    if (formState.succeeded) {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }

    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'achievements', 'certifications', 'resume', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [formState.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      <div className="matrix-background"></div>
      <div className="code-line-numbers">
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="line-number">{i + 1}</div>
        ))}
      </div>

      <div className="main-content">
        <header ref={headerRef} className={`header ${headerInView ? 'fade-in' : ''}`}>
          <div className="container">
            <div className="header-content">
              <div className="terminal-window">
                <div className="terminal-header">
                  <span className="terminal-button"></span>
                  <span className="terminal-button"></span>
                  <span className="terminal-button"></span>
                </div>
                <div className="terminal-body">
                  <div className="command-line">
                    <span className="prompt">$</span> whoami
                  </div>
                  <h1 className="glitch-text">{'<Arshlaan />'}</h1>
                  <div className="command-line">
                    <span className="prompt">$</span> getRole
                  </div>
                  <p className="typing-text">{typedText}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <nav className="nav">
          <div className="container nav-container">
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
              <li><a href="#about" onClick={closeMenu} className={activeSection === 'about' ? 'active' : ''}>./about</a></li>
              <li><a href="#experience" onClick={closeMenu} className={activeSection === 'experience' ? 'active' : ''}>./experience</a></li>
              <li><a href="#projects" onClick={closeMenu} className={activeSection === 'projects' ? 'active' : ''}>./projects</a></li>
              <li><a href="#achievements" onClick={closeMenu} className={activeSection === 'achievements' ? 'active' : ''}>./achievements</a></li>
              <li><a href="#certifications" onClick={closeMenu} className={activeSection === 'certifications' ? 'active' : ''}>./certifications</a></li>
              <li><a href="#resume" onClick={closeMenu} className={activeSection === 'resume' ? 'active' : ''}>./resume</a></li>
              <li><a href="#skills" onClick={closeMenu} className={activeSection === 'skills' ? 'active' : ''}>./skills</a></li>
              <li><a href="#contact" onClick={closeMenu} className={activeSection === 'contact' ? 'active' : ''}>./contact</a></li>
            </ul>
          </div>
        </nav>

        <main>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <About />
            <Experience />
            <Projects />
            <Achievements />
            <Certifications />
            <Resume />
            <Skills />
            <Contact formState={formState} formData={formData} handleChange={handleChange} onSubmit={onSubmit} />
          </Suspense>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="social-links">
              <a href="https://github.com/arshlaanhaq" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/arshlaan-haque-4a37a2205" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:arshlaanhaq005@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p>{'/* Built with <Code /> by Arshlaan Haque © '}{new Date().getFullYear()}{' */'}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

