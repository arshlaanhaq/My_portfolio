import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Trophy, Medal, Calendar, Star } from 'lucide-react';

export default function Achievements() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="achievements" ref={ref} className={`section ${inView ? 'fade-in' : ''}`}>
      <div className="container">
        <h2 className="section-title">achievements.map()</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <Trophy className="achievement-icon" />
            <h3>Job-a-Thon</h3>
            <p>Achieved 100/175 in GeeksforGeeks Jobathon, strengthening my logical thinking and problem-solving abilities.</p>
            <div className="achievement-meta">
              <span><Calendar size={16} /> Feb 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

