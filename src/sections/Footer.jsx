import EMCLogo from '../components/EMCLogo'
import './Footer.css'

const LINKS = ['About', 'Programs', 'Webinar', 'Contact', 'Privacy']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <EMCLogo height={90} showTagline={true} />
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
