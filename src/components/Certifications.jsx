import { useInView } from 'react-intersection-observer';
import { Award, Calendar, Bookmark, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="certifications" ref={ref} className={`section ${inView ? 'fade-in' : ''}`}>
      <div className="container">
        <h2 className="section-title">certifications.verify()</h2>
        <div className="certifications-grid">
           <div className="certification-card">
            <Award className="certification-icon" />
            <div className="certification-content">
              <h3>NodeJS</h3>
              <p>International Business Machines(IBMCE)</p>
              <div className="certification-meta">
                <span><Calendar size={16} /> Issued: Jan 2024</span>
                <span><Bookmark size={16} /> No Expiration</span>
              </div>
              <a href="https://courses.jecrc.skillsnetwork.site/certificates/e04bb71c93794bcc9bd109f27fb695c0" className="button">
                Verify <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div className="certification-card">
            <Award className="certification-icon" />
            <div className="certification-content">
              <h3>DevOps Fundamentals</h3>
              <p>International Business Machines(IBMCE)</p>
              <div className="certification-meta">
                <span><Calendar size={16} /> Issued: Dec 2024</span>
              </div>
              <a href="https://courses.jecrc.skillsnetwork.site/certificates/9ac4ca0595dd48cfb9a172e5508bd292" className="button">
                Verify <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="certification-card">
            <Award className="certification-icon" />
            <div className="certification-content">
              <h3>Docker & Kubernetes</h3>
              <p>International Business Machines(IBMCE)</p>
              <div className="certification-meta">
                <span><Calendar size={16} /> Issued: Dec 2024</span>
                <span><Bookmark size={16} /> No Expiration</span>
              </div>
              <a href="https://courses.jecrc.skillsnetwork.site/certificates/16134bde77b94e038d55259e31c675ce" className="button">
                Verify <ExternalLink size={16} />
              </a>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}

