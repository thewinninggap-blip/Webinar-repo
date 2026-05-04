import { useModal } from '../context/ModalContext'
import './Hero.css'

const TOOLS = [
  {
    role: 'design', name: 'Figma',
    icon: (
      <svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
        <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
        <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
        <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z"/>
        <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z"/>
      </svg>
    ),
  },
  {
    role: 'build', name: 'Vercel',
    icon: (
      <svg viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="#000" d="M12 1l11.5 20H.5L12 1z"/>
      </svg>
    ),
  },
  {
    role: 'code', name: 'Claude',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#D97757"/>
        <path fill="#fff" d="M8.2 8.6l2.6 6.8h1.3l-2.6-6.8H8.2zm5.5 0l2.6 6.8h1.3l-2.6-6.8h-1.3z"/>
      </svg>
    ),
  },
  {
    role: 'prototype', name: 'Stitch',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="1" y="1" width="22" height="22" rx="6" fill="#0d1411"/>
        <path d="M7 9.5c0-1.4 1.2-2.5 3-2.5h4c1.8 0 3 1.1 3 2.5S15.8 12 14 12h-4c-1.8 0-3 1.1-3 2.5S8.2 17 10 17h4c1.8 0 3-1.1 3-2.5" stroke="#4fdc93" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    role: 'domain', name: 'GoDaddy',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#1bdbdb"/>
        <path fill="#0d1411" d="M12 5.5c-2.5 0-4.5 1.6-4.5 4 0 2.7 2.4 4 4.5 4s4.5-1.3 4.5-4c0-2.4-2-4-4.5-4zm0 6.4c-1.4 0-2.4-.9-2.4-2.4 0-1.4 1-2.4 2.4-2.4s2.4 1 2.4 2.4-1 2.4-2.4 2.4zM7.5 14v4.5h2V16h5v2.5h2V14h-9z"/>
      </svg>
    ),
  },
  {
    role: 'sheets', name: 'Google Sheets',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="#0f9d58" d="M14 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-7-7z"/>
        <path fill="#87ceac" d="M14 2v5a2 2 0 0 0 2 2h5l-7-7z"/>
        <rect x="7" y="12" width="10" height="8" fill="#fff"/>
        <path stroke="#0f9d58" strokeWidth="1.2" d="M7 14h10M7 16h10M7 18h10M10 12v8M14 12v8"/>
      </svg>
    ),
  },
]

function getNextWebinarDate() {
  const today = new Date()
  const daysUntilSunday = ((7 - today.getDay()) % 7) || 7
  const nextSunday = new Date(today)
  nextSunday.setDate(today.getDate() + daysUntilSunday)

  return nextSunday.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).toUpperCase()
}

export default function Hero() {
  const nextWebinarDate = getNextWebinarDate()
  const { openModal } = useModal()

  return (
    <section id="hero" className="hero-section">
      {/* Wavy green background ribbon */}
      <div className="hero-bg" aria-hidden="true">
        <svg className="hero-wave" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--green-soft)" fillOpacity="0.55"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,149.3C840,139,960,149,1080,165.3C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"/>
        </svg>
      </div>

      <div className="container">
        <div className="hero-inner">

          {/* Tools strip */}
          <div className="tools-strip reveal">
            {TOOLS.map(t => (
              <div key={t.name} className="tool-chip">
                {t.role && <span className="tool-role">{t.role}</span>}
                <span className="tool-icon">{t.icon}</span>
                <span className="tool-name">{t.name}</span>
              </div>
            ))}
          </div>

          {/* Big 3D mark */}
          <div className="big3d-wrap reveal reveal-delay-1">
            <span className="big3d">3D<sup className="big3d-sup">★</sup></span>
            <p className="big3d-caption">
              DESIGN <span className="dot">●</span> DEVELOP <span className="dot">●</span> DEPLOY
            </p>
          </div>

          {/* Headline */}
          <h1 className="hero-headline reveal reveal-delay-2">
            Design, Develop &amp; make your first{' '}
            <span className="hero-hl">Website Live</span>{' '}
            in 4 Hours.
          </h1>

          <p className="hero-sub reveal reveal-delay-3">
            Launch your first website &amp; learn how to make money through freelancing
            with the skills you gain.
          </p>

          {/* Meta chips */}
          <div className="hero-meta reveal">
            <span className="meta-chip">SUN · 10 AM – 2 PM</span>
            <span className="meta-chip">LIVE · Teams</span>
            <span className="meta-chip">NEXT · {nextWebinarDate}</span>
          </div>

          {/* Rating */}
          <div className="hero-rating reveal">
            <div className="rating-avatars">
              {['RA','PJ','SM','+'].map((i,idx) => (
                <span key={idx} className={`rating-avatar rating-avatar--${idx}`}>{i}</span>
              ))}
            </div>
            <div className="rating-stars">★★★★<span className="half-star">★</span></div>
            <span className="rating-score">4.9<span className="rating-out">/5</span></span>
            <span className="rating-divider" />
            <span className="rating-meta"><strong>1,000+</strong> students rated</span>
          </div>

          {/* Countdown removed */}

          {/* CTAs */}
          <div className="hero-ctas reveal">
            <button onClick={openModal} className="btn btn-green">
              Join the webinar
              <span className="btn-arrow">↗</span>
            </button>
            <a href="#trailer" className="btn btn-ghost">
              Watch trailer
              <span className="btn-arrow">▶</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
