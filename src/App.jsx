import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code, Menu, X, Globe, Briefcase, Calendar, ChevronRight } from 'lucide-react';

function App() {
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
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
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

    window.addEventListener('scroll', handleScroll);
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
        <header className="header">
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
              <li><a href="#skills" onClick={closeMenu} className={activeSection === 'skills' ? 'active' : ''}>./skills</a></li>
              <li><a href="#contact" onClick={closeMenu} className={activeSection === 'contact' ? 'active' : ''}>./contact</a></li>
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

          <section id="experience" className="section">
            <div className="container">
              <h2 className="section-title">experience.js</h2>
              <div className="experience-container">
                <div className="experience-card">
                  <div className="experience-header">
                    <Briefcase className="experience-icon" />
                    <div className="experience-title">
                      <h3>Node.js Developer Intern</h3>
                      <h4>Celebel Technologies</h4>
                    </div>
                    <div className="experience-duration">
                      <Calendar className="calendar-icon" />
                      <span>2 Months</span>
                    </div>
                  </div>
                  <div className="experience-content">
                    <div className="code-block" data-language="achievements">
                      <div className="code-line" data-line="01">
                        <ChevronRight className="chevron-icon" />
                        Developed and maintained RESTful APIs using Node.js and Express.js
                      </div>
                      <div className="code-line" data-line="02">
                        <ChevronRight className="chevron-icon" />
                        Implemented authentication and authorization using JWT
                      </div>
                      <div className="code-line" data-line="03">
                        <ChevronRight className="chevron-icon" />
                        Worked with MongoDB for database management and optimization
                      </div>
                      <div className="code-line" data-line="04">
                        <ChevronRight className="chevron-icon" />
                        Collaborated with senior developers on code reviews and best practices
                      </div>
                    </div>
                  </div>
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
                      <a href="https://task-feed.netlify.app" className="button button-preview">Live Preview <Globe size={16} /></a>
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
Tech Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS.</p>
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

                   <div className="project-card">
                <img
                  className="project-image"
                  src="https://i.imgur.com/XV6IzSD.png"
                  alt="chef-claude"
                />
                <div className="project-content">
                  <h3>{'<Blog Management System />'}</h3>
                  <p>The Blog Management System is a full-stack web application that enables users to create, edit, delete, and 
                    read blogs.It provides a seamless and responsive user experience with secure authentication and database management.</p>
                  <div className="project-links">
                    <a href="https://github.com/arshlaanhaq/blog_management_system" className="button">git checkout <ExternalLink size={16} /></a>
                    <a href="https://blog-management-sys.netlify.app" className="button button-preview">Live Preview <Globe size={16} /></a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>

          <section id="skills" className="section">
            <div className="container">
              <h2 className="section-title">skills.tech()</h2>
              <div className="skills-container">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">JavaScript</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">React.js</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Node.js</span>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Express.js</span>
                    <span className="skill-percentage">75%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">MongoDB</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">RESTful APIs</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">JWT</span>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Git</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
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

export default App;