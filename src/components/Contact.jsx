import { useInView } from 'react-intersection-observer';
import { Terminal } from 'lucide-react';
import { ValidationError } from '@formspree/react';

export default function Contact({ formState, formData, handleChange, onSubmit }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="contact" ref={ref} className={`section ${inView ? 'fade-in' : ''}`}>
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
  );
}

