import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code, Menu, X, Globe } from 'lucide-react';

export default function App() {
  const [formState, handleSubmit] = useForm("xdkkqrod");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (formState.succeeded) {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
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
    <div>
      <header className="header">
        <div className="container">
          <h1>{'<Arshlaan />'}</h1>
          <p>$ Full Stack Developer | Problem Solver | Code Enthusiast</p>
        </div>
      </header>

      <nav className="nav">
        <div className="container nav-container">
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
            <li><a href="#about" onClick={closeMenu}>./about</a></li>
            <li><a href="#projects" onClick={closeMenu}>./projects</a></li>
            <li><a href="#skills" onClick={closeMenu}>./skills</a></li>
            <li><a href="#contact" onClick={closeMenu}>./contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">about.js</h2>
            <div className="about">
              <div className="about-image">
                <img
                  src="https://i.imgur.com/bbdhi5H.jpeg"
                  alt="Arshlaan Haque"
                />
              </div>
              <div className="about-content">
                <p>{'>'} Hello, World! I'm Arshlaan, a full-stack developer with a passion for clean code and elegant solutions. My journey in tech started with a simple "Hello, World!" and evolved into crafting complex, scalable applications.</p>
                <p>{'>'} With a strong foundation in both frontend and backend technologies, I specialize in building robust applications that solve real-world problems. My code philosophy? Clean, maintainable, and well-documented.</p>
                <p>{'>'} When I'm not pushing commits, you'll find me contributing to open-source projects, exploring new tech stacks, or helping fellow developers debug their code. Because in my world, every bug is just an opportunity to learn something new.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">projects.map()</h2>
            <div className="projects">
              <div className="project-card">
                <img
                  className="project-image"
                  src="https://i.imgur.com/0Vwdb2a.png"
                  alt="Artistome Project"
                />
                <div className="project-content">
                  <h3>{'<Artistome- Art Selling Platform />'}</h3>
                  <p>A simple platform built from scratch to connect art buyers and sellers. Features secure user authentication, art listings, and integrated payment gateway. Deployed locally for development.
                    Tech Stack: Node.js, Express.js, MongoDB, Stripe.</p>
                  <div className="project-links">
                    <a href="https://github.com/arshlaanhaq/artistome-" className="button">git checkout <ExternalLink size={16} /></a>
                    <a href="https://artistome.netlify.app" className="button button-preview">Live Preview <Globe size={16} /></a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <img
                  className="project-image"
                  src="https://i.imgur.com/8FDs3Hc.png"
                  alt="Task-Feed Project"
                />
                <div className="project-content">
                  <h3>{'<Task-Feed Management System />'}</h3>
                  <p>A web application for managing tasks and sharing ideas. Includes drag-and-drop task management, a collaborative feed, and secure authentication.
                    Tech Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Cloudinary.</p>
                  <div className="project-links">
                    <a href="https://github.com/arshlaanhaq/task-feed-management" className="button">git checkout <ExternalLink size={16} /></a>
                    <a href="https://task-feed-client.onrender.com" className="button button-preview">Live Preview <Globe size={16} /></a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <img
                  className="project-image"
                  src="https://i.imgur.com/QZ732iR.png"
                  alt="Email Builder Project"
                />
                <div className="project-content">
                  <h3>{'<Email Template Builder />'}</h3>
                  <p>A web application for designing and managing professional email templates with responsive and customizable features.
                    Tech Stack: React.js, Node.js, Express.js, MongoDB.</p>
                  <div className="project-links">
                    <a href="https://github.com/arshlaanhaq/email-builder" className="button">git checkout <ExternalLink size={16} /></a>
                    <a href="https://email-template-buillder.netlify.app" className="button button-preview">Live Preview <Globe size={16} /></a>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <img
                  className="project-image"
                  src="https://i.imgur.com/mWfDCWr.png"
                  alt="chef-claude"
                />
                <div className="project-content">
                  <h3>{'<Chef-Claude(AI) />'}</h3>
                  <p>Chef-Claude is a recipe discovery web application where users can input ingredients, and the AI fetches delicious recipes
                     based on the provided ingredients. The project leverages Vite with React for a fast and efficient frontend experience.</p>
                  <div className="project-links">
                    <a href="https://github.com/arshlaanhaq/Chef-claude" className="button">git checkout <ExternalLink size={16} /></a>
                    <a href="https://chef-cladue.netlify.app" className="button button-preview">Live Preview <Globe size={16} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title">skills.tech()</h2>
            <div className="skills">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">GraphQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">C/C++</span>
              <span className="skill-tag">VS Code</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">contact.init()</h2>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">const name =</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="'Your name'"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={formState.errors} />
              </div>
              <div className="form-group">
                <label htmlFor="email">const email =</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="'your.email@example.com'"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={formState.errors} />
              </div>
              <div className="form-group">
                <label htmlFor="message">const message =</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="'Your message here...'"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={formState.errors} />
              </div>
              <button
                type="submit"
                className="button"
                disabled={formState.submitting}
              >
                {formState.submitting ? 'sending...' : 'sendMessage()'} <Terminal size={16} />
              </button>
              {formState.succeeded && (
                <p className="form-status success">Message sent successfully! I'll get back to you soon.</p>
              )}
            </form>
          </div>
        </section>
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
            <a href="https://leetcode.com/u/arshlaanhaq005/" aria-label="LeetCode">
              <Code size={20} />
            </a>
          </div>
          <p>{'/* Built with <Code /> by Arshlaan Haque © '}{new Date().getFullYear()}{' */'}</p>
        </div>
      </footer>
    </div>
  );
}

