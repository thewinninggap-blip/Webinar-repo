import './Footer.css'

const LINKS = ['About', 'Programs', 'Webinar', 'Contact', 'Privacy']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="footer-logo-mark">emc</span>
            <span className="footer-logo-sub">error makes clever</span>
          </div>

          <nav className="footer-links">
            {LINKS.map(l => (
              <a key={l} href="#">{l}</a>
            ))}
          </nav>

          <p className="footer-copy mono">© 2026 Error Makes Clever</p>
        </div>
      </div>
    </footer>
  )
}
