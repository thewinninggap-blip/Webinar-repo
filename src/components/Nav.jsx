import { useState, useEffect } from 'react'
import './Nav.css'

const NAV_LINKS = [
  { label: 'Webinar', href: '#hero' },
  { label: 'Curriculum', href: '#learn' },
  { label: 'Host', href: '#host' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-inner container">
        {/* Logo */}
        <a href="#hero" className="nav-logo">
          <span className="nav-logo-mark">emc</span>
          <span className="nav-logo-sub">error makes clever</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map(l => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#register" className="btn btn-ink nav-cta">
          Join the webinar
          <span className="btn-arrow">↗</span>
        </a>

        {/* Hamburger */}
        <button
          className={`nav-burger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav-drawer">
          <ul>
            {NAV_LINKS.map(l => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#register" className="btn btn-green" onClick={() => setMenuOpen(false)}>
            Join the webinar
            <span className="btn-arrow">↗</span>
          </a>
        </div>
      )}
    </nav>
  )
}
