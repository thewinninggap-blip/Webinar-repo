import { useState } from 'react'
import './FAQ.css'

const FAQS = [
  {
    q: 'Do I need prior coding experience?',
    a: 'Absolutely not. The webinar is designed from the ground up for complete beginners. We use AI tools to do the heavy lifting so you can focus on understanding and shipping.',
  },
  {
    q: 'What AI tools will we be using?',
    a: 'We use Claude (for code generation), Stitch (for design), Vercel (for deployment), GoDaddy (for domains), and Google Sheets (for data). All tools have free tiers — no paid subscriptions required.',
  },
  {
    q: 'Will I actually deploy something live?',
    a: 'Yes — that\'s the entire point. By 2 PM on Sunday you will have a live website on the internet, on your own domain, built by you.',
  },
  {
    q: 'Will I get the recording?',
    a: 'Yes. The full session recording plus an AI prompt pack is delivered to every attendee the day after the webinar.',
  },
  {
    q: 'How is this different from a course?',
    a: 'A course is passive watching. This is 4 hours of live building where you follow along in real time, ask questions, and ship something before the session ends.',
  },
  {
    q: "What's the refund policy?",
    a: "If you attend the full session and don't have a live website by the end, we'll refund you — no questions asked. That's how confident we are.",
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-trigger" onClick={() => setOpen(v => !v)}>
        <span>{q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="faq-section section">
      <div className="container">
        <div className="center-head reveal">
          <span className="label-tag">FAQ</span>
          <h2>Everything you might be wondering.</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <FAQItem key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
