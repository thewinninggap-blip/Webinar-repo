import { useState, useRef } from 'react'
import { useModal } from '../context/ModalContext'
import './Trailer.css'

export default function Trailer() {
  const { openModal } = useModal()
  const [playing, setPlaying] = useState(false)
  const iframeRef = useRef(null)

  const handlePlay = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
      '*'
    )
    setPlaying(true)
  }

  return (
    <section id="trailer" className="trailer-section section">
      <div className="container">
        <div className="trailer-wrap">
          <div className="trailer-video reveal">
            <iframe
              ref={iframeRef}
              src="https://www.youtube.com/embed/pUfOT5FMsuY?controls=0&enablejsapi=1&modestbranding=1&rel=0&playsinline=1"
              title="3D Webinar Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            {!playing && (
              <div className="trailer-overlay" onClick={handlePlay}>
                <div className="trailer-play">
                  <span>▶</span>
                </div>
              </div>
            )}
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
