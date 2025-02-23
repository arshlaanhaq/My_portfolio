import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="experience" ref={ref} className={`section ${inView ? 'fade-in' : ''}`}>
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
  );
}

 