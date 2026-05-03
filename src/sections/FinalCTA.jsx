import RegisterForm from '../components/RegisterForm'
import './FinalCTA.css'

const META = [
  'Sunday · 10 AM – 2 PM IST',
  'Live on Zoom · recording included',
  'Only 25 seats per session',
  'Hosted by Agnel John, EMC',
]

export default function FinalCTA() {
  return (
    <section id="register" className="finalcta-section section">
      <div className="container">
        <div className="finalcta-wrap">
          <div className="finalcta-left reveal">
            <span className="label-tag label-tag--light">REGISTER · LIMITED TO 25 SEATS</span>
            <h2>See you this Sunday at 10 AM.</h2>
            <p>
              Reserve your seat for the next 3D Webinar. Live build, AI playbook,
              and the full recording — all included.
            </p>
            <ul className="finalcta-meta">
              {META.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>

          <div className="finalcta-form reveal reveal-delay-1">
            <RegisterForm dark />
          </div>
        </div>
      </div>
    </section>
  )
}
