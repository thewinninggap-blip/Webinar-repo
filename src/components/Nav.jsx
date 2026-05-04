import { useState, useEffect } from 'react'
import EMCLogo from './EMCLogo'
import { useModal } from '../context/ModalContext'
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
  const { openModal } = useModal()

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
          <EMCLogo height={36} showTagline={false} />
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
        <button onClick={openModal} className="btn btn-ink nav-cta">
          Join the webinar
          <span className="btn-arrow">↗</span>
        </button>

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
          <button className="btn btn-green" onClick={() => { openModal(); setMenuOpen(false) }}>
            Join the webinar
            <span className="btn-arrow">↗</span>
          </button>
        </div>
      )}
    </nav>
  )
}
