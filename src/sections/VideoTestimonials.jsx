import './VideoTestimonials.css'

const STORIES = [
  {
    name: 'Priya R.',
    location: 'BENGALURU · STUDENT',
    duration: '1:24',
    tag: 'SHIPPED IN 1 SUNDAY',
    quote: '"I came in not knowing how to deploy. By 2 PM my portfolio site was live with my own .com domain — and I landed my first freelance client the same week."',
    meta: 'Built a portfolio site · ₹12k first client',
  },
  {
    name: 'Arjun M.',
    location: 'HYDERABAD · ENGINEER',
    duration: '1:48',
    tag: 'SWITCHED TO FREELANCING',
    quote: '"The AI workflow alone was worth it. I now ship client websites in a weekend. Replaced my full-time salary in 4 months of freelancing."',
    meta: '8 client projects · Full-time freelancer',
  },
  {
    name: 'Sneha K.',
    location: 'PUNE · DESIGNER → DEV',
    duration: '2:05',
    tag: 'DESIGNER → DEVELOPER',
    quote: '"As a designer I always felt blocked at handoff. After the webinar I shipped my own SaaS landing page — and stopped waiting for someone else to build my ideas."',
    meta: 'Built a SaaS site · Now codes daily',
  },
]

export default function VideoTestimonials() {
  return (
    <section className="vtesti-section section">
      <div className="container">
        <div className="center-head reveal">
          <span className="label-tag">FROM PAST STUDENTS</span>
          <h2>Hear it from students who shipped.</h2>
          <p>Three short stories from past 3D Webinar attendees — what they built, and what changed after.</p>
        </div>

        <div className="vtesti-grid">
          {STORIES.map((s, i) => (
            <div key={i} className={`vtesti-card reveal reveal-delay-${i}`}>
              <div className="vtesti-video">
                <div className="vtesti-play">▶</div>
                <div className="vtesti-duration mono">{s.duration}</div>
                <div className="vtesti-nameplate">
                  <strong>{s.name}</strong>
                  <span>{s.location}</span>
                </div>
              </div>
              <div className="vtesti-body">
                <span className="vtesti-tag">{s.tag}</span>
                <p>{s.quote}</p>
                <div className="vtesti-meta">
                  <strong>{s.name}</strong> · {s.meta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
