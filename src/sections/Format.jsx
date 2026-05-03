import './Format.css'

const CARDS = [
  {
    icon: '●',
    title: 'Live on Zoom',
    desc: 'Real-time build-along with the host — every Sunday, 10 AM – 2 PM IST.',
  },
  {
    icon: '❓',
    title: 'Open Q&A',
    desc: 'Open mic during the deploy hour. Bring your stuck-points. Get unblocked live.',
  },
  {
    icon: '▶',
    title: 'Recording Included',
    desc: 'Full session + AI prompt pack delivered to your inbox the very next day.',
  },
]

export default function Format() {
  return (
    <section className="format-section section">
      <div className="container">
        <div className="center-head reveal">
          <span className="label-tag label-tag--light">HOW IT WORKS</span>
          <h2 style={{ color: '#fff' }}>Live, hands-on, no fluff.</h2>
          <p style={{ color: 'rgba(207,231,221,0.7)' }}>
            Every session is built for doing, not watching. You'll ship something real before the session ends.
          </p>
        </div>

        <div className="format-grid">
          {CARDS.map((c, i) => (
            <div key={i} className={`format-card reveal reveal-delay-${i}`}>
              <span className="format-icon">{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
