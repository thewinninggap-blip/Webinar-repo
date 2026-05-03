import './Audience.css'

const LIST = [
  'College Students who want to use AI tools to build websites',
  'Career Gappers who would like to start making money online',
  'Fresh Graduates looking to get into IT & tech jobs',
  'Working Professionals who want to transition into IT',
  'Anyone who wants to improve their skills and start freelancing',
]

export default function Audience() {
  return (
    <section className="audience-section section">
      <div className="container">
        <div className="audience-wrap">
          <div className="audience-left reveal">
            <span className="label-tag">WHO THIS IS FOR</span>
            <h2 style={{ marginTop: 8 }}>Beginners who haven't built a single website yet.</h2>
            <p>
              If you've been wanting to get into IT but haven't started yet,
              this 4-hour Sunday session is for you. Zero coding experience required.
            </p>
          </div>
          <div className="audience-right reveal reveal-delay-1">
            {LIST.map((item, i) => (
              <div key={i} className="audience-row">
                <span className="audience-check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
