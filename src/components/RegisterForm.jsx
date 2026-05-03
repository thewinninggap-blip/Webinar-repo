import { useState } from 'react'
import './RegisterForm.css'

export default function RegisterForm({ dark = false }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', build: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!form.phone.match(/^[+\d\s\-()]{7,}$/)) e.phone = 'Valid phone required'
    return e
  }

  const submit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`reg-success${dark ? ' reg-success--dark' : ''}`}>
        <span className="reg-success-icon">✓</span>
        <div>
          <strong>Seat reserved!</strong>
          <p>Check your inbox for the Sunday Zoom link. See you at 10 AM!</p>
        </div>
      </div>
    )
  }

  return (
    <form className={`reg-form${dark ? ' reg-form--dark' : ''}`} onSubmit={submit} noValidate>
      <div className="reg-field">
        <label>Full name</label>
        <input
          type="text"
          placeholder="First & last name"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="reg-error">{errors.name}</span>}
      </div>

      <div className="reg-row2">
        <div className="reg-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="reg-error">{errors.email}</span>}
        </div>
        <div className="reg-field">
          <label>Phone</label>
          <input
            type="tel"
            placeholder="+91 ..."
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="reg-error">{errors.phone}</span>}
        </div>
      </div>

      <div className="reg-field">
        <label>What do you want to build? <span className="reg-optional">(optional)</span></label>
        <input
          type="text"
          placeholder="e.g. my portfolio site, a restaurant menu..."
          value={form.build}
          onChange={e => setForm(f => ({ ...f, build: e.target.value }))}
        />
      </div>

      <button type="submit" className="btn btn-green reg-submit">
        Reserve my seat
        <span className="btn-arrow">↗</span>
      </button>

      <p className="reg-fine">By registering you agree to receive Sunday reminders. No spam, ever.</p>
    </form>
  )
}
