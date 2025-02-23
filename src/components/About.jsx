import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="about" ref={ref} className={`section ${inView ? 'fade-in' : ''}`}>
      <div className="container">
        <h2 className="section-title">about.js</h2>
        <div className="about">
          <div className="about-image">
            <img 
              src="https://i.imgur.com/bbdhi5H.jpeg" 
              alt="Arshlaan Haque"
              loading="lazy"
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
  );
}

