import { useModal } from '../context/ModalContext'
import './Trailer.css'

export default function Trailer() {
  const { openModal } = useModal()
  return (
    <section id="trailer" className="trailer-section section">
      <div className="container">
        <div className="trailer-wrap">
          <div className="trailer-video reveal" role="button" tabIndex={0} aria-label="Play trailer">
            <span className="trailer-tag">2 min preview</span>
            <div className="trailer-play">
              <span>▶</span>
            </div>
            <span className="trailer-duration">02:14</span>
            <span className="trailer-caption">A peek inside Sunday's session</span>
          </div>

          <div className="trailer-copy reveal reveal-delay-1">
            <span className="label-tag">WATCH THE TRAILER</span>
            <h2>
              See how 4 hours becomes a{' '}
              <span className="trailer-hl">live website.</span>
            </h2>
            <p>
              A 2-minute look at what actually happens on Sunday — the AI workflow,
              the live build, and what students walk away with.
            </p>
            <div className="trailer-meta">
              <span>02:14 RUNTIME</span>
              <span>SUBTITLED</span>
              <span>NO SIGNUP</span>
            </div>
            <button onClick={openModal} className="btn btn-green">
              Reserve my seat
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
