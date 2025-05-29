import { useInView } from 'react-intersection-observer';
import { FileText, Download } from 'lucide-react';

export default function Resume() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="resume" ref={ref} className={`section ${inView ? 'fade-in' : ''}`}>
      <div className="container">
        <h2 className="section-title">resume.download()</h2>
        <div className="resume-container">
          <div className="resume-content">
            <h3>Looking for a more traditional format?</h3>
            <p>Download my resume to learn more about my experience, skills, and qualifications.</p>
            <div className="resume-buttons">
              <a 
                href="https://docs.google.com/document/d/1nZEAp3EIBnDQndgXUD1o_adb4hYBKlocw8aDwj5YVSo/export?format=pdf" 
                className="button" 
                download
              >
                <FileText size={16} /> Download PDF
              </a>

              <a 
                href="https://docs.google.com/document/d/1nZEAp3EIBnDQndgXUD1o_adb4hYBKlocw8aDwj5YVSo/export?format=docx" 
                className="button" 
                download
              >
                <Download size={16} /> Download Word
              </a>
            </div>
          </div>
          <div className="resume-preview">
            <img 
              src="https://i.postimg.cc/Y9knNQWW/Screenshot-2025-05-29-151118.png" 
              alt="Resume Preview" 
              className="resume-preview-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

