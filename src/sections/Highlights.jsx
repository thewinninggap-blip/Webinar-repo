import './Highlights.css'

const CARDS = [
  {
    num: '01',
    variant: '',
    tag: 'Certificate',
    title: 'Get an official EMC Certificate',
    desc: 'A signed certificate of completion to share on LinkedIn after your live build.',
    footerLeft: 'EMC · VERIFIED',
    footerRight: 'SHAREABLE',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="14" rx="2"/>
        <path d="M7 7h10M7 10h10M7 13h6"/>
        <circle cx="12" cy="19" r="2.5" fill="currentColor" stroke="none" opacity="0.15"/>
        <path d="M10 21l1.2-2 .8 1 .8-1 1.2 2"/>
      </svg>
    ),
  },
  {
    num: '02',
    variant: 'yellow',
    tag: 'Template',
    title: 'Get our freelancing toolkit',
    desc: 'Pricing sheet, proposal template & client pitch — the exact pack our alumni use.',
    footerLeft: '3 TEMPLATES',
    footerRight: 'INSTANT ACCESS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="13" height="17" rx="1.5"/>
        <path d="M7 7h7M7 10h7M7 13h5"/>
        <path d="M17 8l3 3-7 7-3 .5.5-3 6.5-7.5z" fill="currentColor" fillOpacity="0.12"/>
      </svg>
    ),
  },
  {
    num: '03',
    variant: 'blue',
    tag: 'Bonus course',
    titleJsx: (
      <h4><span className="hl-strike">₹999</span><span className="hl-free">FREE</span> course included</h4>
    ),
    desc: 'The "Build Your First Site" course is yours to keep, on the house.',
    footerLeft: 'WORTH ₹999',
    footerRight: 'YOURS · FREE',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l9-4 9 4-9 4-9-4z" fill="currentColor" fillOpacity="0.12"/>
        <path d="M7 9.5v5c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5v-5"/>
        <path d="M21 7v6"/>
      </svg>
    ),
  },
  {
    num: '04',
    variant: 'ink',
    tag: 'Community',
    title: 'Join 1,000+ EMC builders',
    desc: 'Past attendees from across India & beyond — rated 4.9 / 5 on average.',
    footerLeft: '★★★★★',
    footerLeftIsStars: true,
    footerRight: '4.9 / 5 · 1000+',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="3.2"/>
        <circle cx="16.5" cy="10" r="2.5"/>
        <path d="M3 18c0-2.5 2.6-4.5 6-4.5s6 2 6 4.5"/>
        <path d="M14.5 18c0-2 1.8-3.5 4-3.5s2.5 1 2.5 1"/>
      </svg>
    ),
  },
]

export default function Highlights() {
  return (
    <section className="highlights-section section-sm">
      <div className="container">
        <div className="highlight-strip">
          {CARDS.map((card) => (
            <div key={card.num} className={`hl-card${card.variant ? ` hl-card--${card.variant}` : ''} reveal`}>
              <span className="hl-corner-num mono">{card.num}</span>
              <span className="hl-icon-wrap">
                {card.icon}
              </span>
              <div className="hl-body">
                <span className="hl-tag mono">{card.tag}</span>
                {card.titleJsx || <h4>{card.title}</h4>}
                <p>{card.desc}</p>
              </div>
              <div className="hl-footer mono">
                <span className={card.footerLeftIsStars ? 'hl-stars' : ''}>{card.footerLeft}</span>
                <span className="hl-accent">{card.footerRight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
