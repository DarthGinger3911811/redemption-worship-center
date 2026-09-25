import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <main className="site">
      <Navbar />
      <Hero />

      <section id="visit" className="service-section">
        <div className="section-heading">
          <p className="eyebrow">JOIN US</p>
          <h2>We'd love to worship with you.</h2>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <p className="service-label">SUNDAY</p>
            <h3>Worship Service</h3>
            <p>10:30 AM</p>
          </div>

          <div className="service-card">
            <p className="service-label">WEDNESDAY</p>
            <h3>Midweek Service</h3>
            <p>7:00 PM</p>
          </div>

          <div className="service-card">
            <p className="service-label">LOCATION</p>
            <h3>Gilmer, Texas</h3>
            <p>1088 US Hwy 271 N</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-content">
          <p className="eyebrow">WHO WE ARE</p>

          <h2>There's a place for you here.</h2>

          <p>
            Redemption Worship Center is a community centered on
            worship, faith, fellowship, and serving others.
          </p>

          <a href="#contact" className="text-link">
            Learn more about us →
          </a>
        </div>
      </section>

      <section id="ministries" className="placeholder-section">
        <p className="eyebrow">GET CONNECTED</p>
        <h2>Find your place at Redemption.</h2>
        <p>
          Explore our ministries, connect with others, and grow
          together in faith.
        </p>
      </section>

      <section id="sermons" className="placeholder-section">
        <p className="eyebrow">MESSAGES</p>
        <h2>Watch and listen.</h2>
        <p>
          Sermons and messages from Redemption Worship Center.
        </p>
      </section>

      <section id="events" className="placeholder-section">
        <p className="eyebrow">WHAT'S HAPPENING</p>
        <h2>Upcoming events.</h2>
        <p>
          Check back here for upcoming services, gatherings, and
          special events.
        </p>
      </section>

      <section id="youth" className="placeholder-section">
        <p className="eyebrow">REDEMPTION YOUTH</p>
        <h2>A place for the next generation.</h2>
        <p>
          Our youth ministry is a place for students to grow in
          faith, build friendships, and discover their purpose.
        </p>

        <a href="#contact" className="text-link">
          Visit Redemption Youth →
        </a>
      </section>

      <section id="give" className="give-section">
        <p className="eyebrow">GENEROSITY</p>
        <h2>Give and make a difference.</h2>
        <p>
          Your generosity helps support ministry and our local
          community.
        </p>

        <button className="primary-button">
          Give Online
        </button>
      </section>

      <footer id="contact" className="footer">
        <div>
          <span className="brand-name">REDEMPTION</span>
          <span className="brand-subtitle">WORSHIP CENTER</span>
        </div>

        <p>1088 US Hwy 271 N · Gilmer, Texas</p>

        <p>
          © {new Date().getFullYear()} Redemption Worship Center
        </p>
      </footer>
    </main>
  )
}

export default App
