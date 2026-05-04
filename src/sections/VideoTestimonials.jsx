import { useState, useRef } from 'react'
import './VideoTestimonials.css'

const STORIES = [
  {
    name: 'Priya R.',
    location: 'BENGALURU · STUDENT',
    youtubeId: '6g8QhrJHjEk',
    tag: 'SHIPPED IN 1 SUNDAY',
    quote: '"I came in not knowing how to deploy. By 2 PM my portfolio site was live with my own .com domain — and I landed my first freelance client the same week."',
    meta: 'Built a portfolio site · ₹12k first client',
  },
  {
    name: 'Arjun M.',
    location: 'HYDERABAD · ENGINEER',
    duration: '1:48',
    tag: 'SWITCHED TO FREELANCING',
    quote: '"The AI workflow alone was worth it. I now ship client websites in a weekend. Replaced my full-time salary in 4 months of freelancing."',
    meta: '8 client projects · Full-time freelancer',
  },
  {
    name: 'Sneha K.',
    location: 'PUNE · DESIGNER → DEV',
    duration: '2:05',
    tag: 'DESIGNER → DEVELOPER',
    quote: '"As a designer I always felt blocked at handoff. After the webinar I shipped my own SaaS landing page — and stopped waiting for someone else to build my ideas."',
    meta: 'Built a SaaS site · Now codes daily',
  },
]

function VideoCard({ story, index }) {
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
    <div className={`vtesti-card reveal reveal-delay-${index}`}>
      <div className={`vtesti-video${story.youtubeId ? ' vtesti-video--yt' : ''}`}>
        {story.youtubeId ? (
          <>
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${story.youtubeId}?controls=0&enablejsapi=1&modestbranding=1&rel=0&playsinline=1`}
              title={`${story.name} testimonial`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            {!playing && (
              <div className="vtesti-overlay" onClick={handlePlay}>
                <div className="vtesti-play">▶</div>
                <div className="vtesti-nameplate">
                  <strong>{story.name}</strong>
                  <span>{story.location}</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="vtesti-play">▶</div>
            <div className="vtesti-duration mono">{story.duration}</div>
            <div className="vtesti-nameplate">
              <strong>{story.name}</strong>
              <span>{story.location}</span>
            </div>
          </>
        )}
      </div>

      <div className="vtesti-body">
        <span className="vtesti-tag">{story.tag}</span>
        <p>{story.quote}</p>
        <div className="vtesti-meta">
          <strong>{story.name}</strong> · {story.meta}
        </div>
      </div>
    </div>
  )
}

export default function VideoTestimonials() {
  return (
    <section className="vtesti-section section">
      <div className="container">
        <div className="center-head reveal">
          <span className="label-tag">FROM PAST STUDENTS</span>
          <h2>Hear it from students who shipped.</h2>
          <p>Three short stories from past 3D Webinar attendees — what they built, and what changed after.</p>
        </div>

        <div className="vtesti-grid">
          {STORIES.map((s, i) => (
            <VideoCard key={i} story={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
