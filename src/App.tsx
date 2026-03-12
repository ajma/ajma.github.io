import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [state, handleSubmit] = useForm("mwvrbook")

  const cities = [
    { 
      name: "Kirkland", 
      link: "https://www.google.com/maps/place/6530+103rd+Ave+NE,+Kirkland,+WA+98033",
      customImg: "/kirkland-home.jpg" 
    },
    { name: "Redmond", link: "https://www.google.com/maps/place/Redmond,+WA" },
    { name: "Waterloo", link: "https://www.google.com/maps/place/Waterloo,+ON" },
    { name: "Toronto", link: "https://www.google.com/maps/place/Toronto,+ON" },
    { name: "Sarnia", link: "https://www.google.com/maps/place/Sarnia,+ON" }
  ];

  return (
    <div className="container">
      <main className="main-content">
        <section className="left-column">
          <div className="profile-section">
            <h1 className="name">Andrew Ma</h1>
            <button 
              onClick={() => setShowForm(!showForm)} 
              className="email-link-btn"
            >
              📧 Contact
            </button>

            {showForm && (
              <div className="form-container">
                {state.succeeded ? (
                  <p className="success-message">Thanks for reaching out! I'll get back to you soon.</p>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <input id="name" type="text" name="name" placeholder="Your Name" required />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                    <input id="email" type="email" name="email" placeholder="Your Email" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <textarea id="message" name="message" placeholder="Your Message" rows={4} required></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <button type="submit" disabled={state.submitting} className="submit-btn">
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            )}
            
            <div className="profile-photo">
              <div className="photo-placeholder">AM</div>
            </div>
          </div>
        </section>

        <section className="right-column">
          <div className="journey-section">
            <h2 className="section-label">Journey</h2>
            <div className="city-timeline">
              {cities.map((city, index) => (
                <div key={city.name} className="city-with-connector">
                  <a href={city.link} target="_blank" rel="noopener noreferrer" className="item-container">
                    <div className="item-icon pin-icon">
                      {city.customImg ? (
                        <img 
                          src={city.customImg} 
                          alt={city.name} 
                          className="city-custom-img" 
                          onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.setAttribute('style', 'display:block'); }}
                        />
                      ) : null}
                      <img 
                        src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/google-maps.png" 
                        alt="Map Pin" 
                        className="google-pin-img"
                        style={city.customImg ? { display: 'none' } : {}}
                      />
                    </div>
                    <span className="item-label">{city.name}</span>
                  </a>
                  {index < cities.length - 1 && <div className="timeline-connector">&larr;</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h2 className="section-label">Experience</h2>
            <div className="experience-grid">
              <div className="item-container">
                <div className="item-icon company-icon" title="Google">
                  <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/google.png" alt="Google" className="logo-img" />
                </div>
                <span className="item-label">Google</span>
              </div>
              <div className="timeline-connector">&larr;</div>
              <div className="item-container">
                <div className="item-icon company-icon" title="Facebook">
                  <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/facebook.png" alt="Facebook" className="logo-img" />
                </div>
                <span className="item-label">Facebook</span>
              </div>
              <div className="timeline-connector">&larr;</div>
              <div className="item-container">
                <div className="item-icon company-icon" title="Amazon">
                  <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/amazon.png" alt="Amazon" className="logo-img" />
                </div>
                <span className="item-label">Amazon</span>
              </div>
              <div className="timeline-connector">&larr;</div>
              <div className="item-container">
                <div className="item-icon company-icon" title="Microsoft">
                  <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/microsoft.png" alt="Microsoft" className="logo-img" />
                </div>
                <span className="item-label">Microsoft</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="contact-links">
          <a href="https://linkedin.com/in/andrewma" target="_blank" rel="noopener noreferrer" className="contact-link">
            <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/linkedin.png" alt="LinkedIn" className="contact-icon-img" />
            LinkedIn
          </a>
          <a href="https://github.com/ajma" target="_blank" rel="noopener noreferrer" className="contact-link">
            <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/github.png" alt="GitHub" className="contact-icon-img" />
            GitHub
          </a>
        </div>
        <p>© {new Date().getFullYear()} Andrew Ma</p>
      </footer>
    </div>
  )
}

export default App
