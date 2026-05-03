import './Testimonials.css'

const ROW_A = [
  { initials: 'RM', color: 'g', name: 'Rahul Menon', loc: 'BENGALURU', stars: 5, score: '5.0', quote: '"Best 4 hours I\'ve spent online. Came in clueless, left with a live website on my own domain."' },
  { initials: 'PD', color: 'y', name: 'Priya Desai', loc: 'PUNE', stars: 5, score: '5.0', quote: '"The AI workflow alone was worth the fee. Shipped my portfolio the same Sunday afternoon."' },
  { initials: 'AK', color: 'b', name: 'Arjun Khanna', loc: 'DELHI', stars: 5, score: '4.9', quote: '"Agnel teaches like a friend, not a lecturer. Got my first freelance client in 2 weeks."' },
  { initials: 'SN', color: 'k', name: 'Sneha Nair', loc: 'KOCHI', stars: 5, score: '5.0', quote: '"Designer who couldn\'t code. Now I ship landing pages every weekend. Total game changer."' },
  { initials: 'VR', color: 'g', name: 'Vikram Reddy', loc: 'HYDERABAD', stars: 5, score: '5.0', quote: '"Replaced my full-time salary with freelancing in 4 months. Started right here."' },
  { initials: 'AR', color: 'y', name: 'Anjali Rao', loc: 'CHENNAI', stars: 5, score: '4.8', quote: '"Worth every rupee. The deploy section alone saved me weeks of trial and error."' },
  { initials: 'KS', color: 'b', name: 'Karthik S.', loc: 'BENGALURU', stars: 5, score: '5.0', quote: '"Practical, fast, and zero filler. Shipped my SaaS landing page by 1 PM."' },
  { initials: 'NS', color: 'k', name: 'Neha Sharma', loc: 'MUMBAI', stars: 5, score: '5.0', quote: '"From \'I can\'t code\' to my own .com domain in 4 hours. Still can\'t believe it."' },
]

const ROW_B = [
  { initials: 'DG', color: 'y', name: 'Divya Gupta', loc: 'JAIPUR', stars: 5, score: '5.0', quote: '"Fast paced, but never overwhelming. Loved the live build."' },
  { initials: 'SP', color: 'g', name: 'Suresh Patel', loc: 'AHMEDABAD', stars: 5, score: '4.9', quote: '"Got a freelance client before the recording even arrived in my inbox."' },
  { initials: 'MJ', color: 'b', name: 'Meera Joshi', loc: 'PUNE', stars: 5, score: '5.0', quote: '"Honestly the cleanest AI workflow I\'ve seen anywhere."' },
  { initials: 'RB', color: 'k', name: 'Rohit Banerjee', loc: 'KOLKATA', stars: 5, score: '5.0', quote: '"My .com is live. Mom is proud. 10/10."' },
  { initials: 'TI', color: 'y', name: 'Tanya Iyer', loc: 'BENGALURU', stars: 5, score: '4.9', quote: '"The pricing/proposal template paid for the webinar 10x over."' },
  { initials: 'HV', color: 'g', name: 'Harsh Verma', loc: 'LUCKNOW', stars: 5, score: '5.0', quote: '"Felt like a Sunday workshop with a senior dev friend."' },
  { initials: 'LP', color: 'b', name: 'Lakshmi Pillai', loc: 'CHENNAI', stars: 5, score: '5.0', quote: '"Ended the day with a deployed site AND a plan to earn from it."' },
  { initials: 'DM', color: 'k', name: 'Dev Malhotra', loc: 'CHANDIGARH', stars: 5, score: '4.9', quote: '"Tried 3 paid courses before. This 4-hour session beat them all."' },
]

function TCard({ initials, color, name, loc, stars, score, quote }) {
  return (
    <div className="tcard">
      <div className="tcard-top">
        <div className="tcard-who">
          <span className={`tcard-avatar tcard-avatar--${color}`}>{initials}</span>
          <div>
            <div className="tcard-name">{name}</div>
            <div className="tcard-loc mono">{loc}</div>
          </div>
        </div>
        <div className="tcard-stars">{'★'.repeat(stars)}</div>
      </div>
      <p className="tcard-quote">{quote}</p>
      <div className="tcard-score mono">
        <span>RATED</span>
        <strong>{score} / 5</strong>
      </div>
    </div>
  )
}

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-wrap">
      <div className={`marquee-track${reverse ? ' marquee-track--reverse' : ''}`}>
        {doubled.map((item, i) => <TCard key={i} {...item} />)}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testi-section section">
      <div className="container">
        <div className="center-head reveal">
          <span className="label-tag">PAST ATTENDEES</span>
          <h2>1,000+ builders. One Sunday changed the loop.</h2>
          <p>Real people, real stories — straight from past 3D Webinar attendees.</p>
        </div>
      </div>

      <MarqueeRow items={ROW_A} reverse={false} />
      <div style={{ marginTop: 16 }}>
        <MarqueeRow items={ROW_B} reverse={true} />
      </div>
    </section>
  )
}
