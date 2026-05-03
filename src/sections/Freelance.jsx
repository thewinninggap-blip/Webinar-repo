import './Freelance.css'

const CHECKS = [
  'How to package & price your first website project',
  'Where to find your first 3 paying clients (no portfolio needed)',
  'The exact pitch & proposal template we use',
  'How to deliver, get paid, and turn one client into referrals',
]

export default function Freelance() {
  return (
    <section className="freelance-section section">
      <div className="container">
        <div className="freelance-wrap">
          <div className="freelance-left reveal">
            <span className="label-tag">FROM BUILDING → EARNING</span>
            <h2>
              Don't just build a website —{' '}
              <span className="freelance-hl">earn from it.</span>
            </h2>
            <p>
              Once your first website is live, we'll show you how to turn that skill
              into freelancing income. Land your first client, set your first price,
              and ship your first invoice — all using the exact playbook that's worked
              for our 1,000+ alumni.
            </p>
            <ul className="freelance-checks">
              {CHECKS.map((c, i) => (
                <li key={i}>
                  <span className="freelance-check">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="freelance-right reveal reveal-delay-1">
            <div className="earn-card earn-card--big">
              <span className="earn-lbl">AVERAGE FIRST PROJECT EARNING</span>
              <span className="earn-num">₹15,000</span>
              <span className="earn-sub">Earn back your webinar fee on your very first client.</span>
            </div>
            <div className="earn-card earn-card--yellow">
              <span className="earn-lbl">GET YOUR FIRST CLIENT IN</span>
              <span className="earn-num">2 weeks</span>
              <span className="earn-sub">From webinar → first paid project.</span>
            </div>
            <div className="earn-card earn-card--green">
              <span className="earn-lbl">ALUMNI EARNINGS</span>
              <span className="earn-num">₹3 Lakh+</span>
              <span className="earn-sub">Combined earnings of past students freelancing today.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
