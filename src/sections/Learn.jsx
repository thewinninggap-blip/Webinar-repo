import RegisterForm from '../components/RegisterForm'
import './Learn.css'

const CARDS = [
  {
    num: '/ 01',
    sticker: 'DESIGN',
    stickerColor: 'blue',
    title: 'Design with AI',
    desc: 'Design your website using the Stitch tool & refine your edits with Figma. No design degree needed.',
  },
  {
    num: '/ 02',
    sticker: 'DEVELOP',
    stickerColor: 'yellow',
    title: 'Develop fast',
    desc: 'Build a website using Claude & learn about frontend, backend & databases — all with AI as your co-pilot.',
  },
  {
    num: '/ 03',
    sticker: 'DEPLOY',
    stickerColor: 'blue',
    title: 'Deploy live',
    desc: 'Use Vercel to push your website to the internet. One click from local to live.',
  },
  {
    num: '/ 04',
    sticker: 'BONUS',
    stickerColor: 'yellow',
    title: 'Buy your own Domain',
    desc: 'Purchase your .com from GoDaddy and attach it to your live site. Own it.',
  },
]

export default function Learn() {
  return (
    <section id="learn" className="learn-section section">
      <div className="container">
        <div className="center-head reveal">
          <span className="label-tag">WHAT YOU'LL LEARN</span>
          <h2>Three D's. One Sunday. A shipped website.</h2>
          <p>The webinar walks you through Design → Develop → Deploy with AI as your co-pilot at every step.</p>
        </div>

        <div className="learn-grid">
          {CARDS.map((c, i) => (
            <div key={i} className={`learn-card reveal reveal-delay-${i}`}>
              <span className={`learn-sticker learn-sticker--${c.stickerColor}`}>{c.sticker}</span>
              <span className="learn-num mono">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="learn-form-wrap reveal">
          <RegisterForm />
          <p className="learn-form-note mono">
            FREE SEAT <span className="dot-green">●</span> NO CREDIT CARD <span className="dot-green">●</span> CONFIRMED ON EMAIL
          </p>
        </div>
      </div>
    </section>
  )
}
