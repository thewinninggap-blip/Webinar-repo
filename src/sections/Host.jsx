import './Host.css'

const CREDS = [
  'Founder · EMC',
  '10,000+ Students Taught',
  '5+ Years Experience',
]

export default function Host() {
  return (
    <section id="host" className="host-section section">
      <div className="container">
        <div className="host-wrap">
          <div className="host-photo reveal">
            <div className="host-photo-inner">
              <div className="host-photo-placeholder">
                <span>AJ</span>
                <p>Agnel John</p>
              </div>
            </div>
          </div>

          <div className="host-copy reveal reveal-delay-1">
            <span className="label-tag">YOUR HOST</span>
            <h2 style={{ marginTop: 8 }}>Agnel John</h2>
            <p className="host-role">Founder &amp; CEO · Error Makes Clever</p>
            <p className="host-bio">
              Agnel has spent the last 5+ years teaching students across India how to
              design, develop, and deploy real products using AI. He's the mind behind
              EMC's hands-on curriculum and has helped 10,000+ students break into tech
              and land their first freelance clients. The 3D Webinar is his Sunday ritual —
              because he believes every builder deserves to ship something real.
            </p>
            <div className="host-creds">
              {CREDS.map((c, i) => (
                <span key={i} className="host-cred mono">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
