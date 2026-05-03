import './Highlights.css'

const ITEMS = [
  { icon: '⚡', title: 'Get Certified', desc: 'Idea → design → ship in one Sunday morning. Walk away with proof of work.' },
  { icon: '🤖', title: 'Get our Freelancing Template', desc: 'Use the exact AI tools real teams use today. No prior experience needed.' },
  { icon: '🎁', title: '₹999 Course — Free', desc: 'Leave with a deployed product, not just slides. Real skills you can sell.' },
  { icon: '★★★★★', title: '1,000+ Alumni', desc: 'Past attendees from across India & beyond, already earning from their websites.' },
]

export default function Highlights() {
  return (
    <section className="highlights-section section-sm">
      <div className="container">
        <div className="highlights-grid">
          {ITEMS.map((item, i) => (
            <div key={i} className={`hl-card reveal reveal-delay-${i}`}>
              <span className="hl-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
