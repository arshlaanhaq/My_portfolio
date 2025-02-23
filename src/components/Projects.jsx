import { useInView } from 'react-intersection-observer';
import { ExternalLink, Globe } from 'lucide-react';

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="projects" ref={ref} className={`section ${inView ? 'fade-in' : ''}`}>
      <div className="container">
        <h2 className="section-title">projects.map()</h2>
        <div className="projects">
          <div className="project-card">
            <img 
              className="project-image"
              src="https://i.imgur.com/0Vwdb2a.png" 
              alt="Artistome Project"
              loading="lazy"
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
              loading="lazy"
            />
            <div className="project-content">
              <h3>{'<Task-Feed Management System />'}</h3>
              <p>A web application for managing tasks and sharing ideas. Includes drag-and-drop task management, a collaborative feed, and secure authentication.
Tech Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Cloudinary.</p>
              <div className="project-links">
                <a href="https://github.com/arshlaanhaq/task-feed-management" className="button">git checkout <ExternalLink size={16} /></a>
                <a href="https://task-feed-management.netlify.app/" className="button button-preview">Live Preview <Globe size={16} /></a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img 
              className="project-image"
              src="https://i.imgur.com/QZ732iR.png" 
              alt="Email Builder Project"
              loading="lazy"
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
              loading="lazy"
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
              alt="Blog Management System"
              loading="lazy"
            />
            <div className="project-content">
              <h3>{'<Blog Management System />'}</h3>
              <p>The Blog Management System is a full-stack web application that enables users to create, edit, delete, and 
                read blogs. It provides a seamless and responsive user experience with secure authentication and database management.</p>
              <div className="project-links">
                <a href="https://github.com/arshlaanhaq/blog_management_system" className="button">git checkout <ExternalLink size={16} /></a>
                <a href="https://blog-management-sys.netlify.app" className="button button-preview">Live Preview <Globe size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

