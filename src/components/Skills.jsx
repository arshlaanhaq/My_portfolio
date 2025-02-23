import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="skills" ref={ref} className={`section ${inView ? 'fade-in' : ''}`}>
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
  );
}

