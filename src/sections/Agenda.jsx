import './Agenda.css'

const ACTS = [
  { time: '10:00 – 11:00', title: 'Act 01 · Frame the idea — choose a problem & spec it with AI.' },
  { time: '11:00 – 12:00', title: 'Act 02 · Design the screens — prompt-driven wireframes & UI.' },
  { time: '12:00 – 01:00', title: 'Act 03 · Develop — build the frontend, backend & data with AI.' },
  { time: '01:00 – 02:00', title: 'Act 04 · Deploy & demo — ship live, then live Q&A.' },
]

export default function Agenda() {
  return (
    <section className="agenda-section section">
      <div className="container">
        <div className="center-head reveal">
          <span className="label-tag label-tag--light">SUNDAY · 10 AM – 2 PM IST</span>
          <h2 style={{ color: '#fff' }}>A 4-hour live curriculum broken down into 4 Acts</h2>
        </div>

        <div className="agenda-list">
          {ACTS.map((a, i) => (
            <div key={i} className={`agenda-row reveal reveal-delay-${i}`}>
              <span className="agenda-time mono">{a.time}</span>
              <span className="agenda-title">{a.title}</span>
              <span className="agenda-chev">›</span>
            </div>
          ))}
        </div>

        <div className="agenda-cta reveal">
          <a href="#register" className="btn btn-ghost-light">
            Reserve my seat
            <span className="btn-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
