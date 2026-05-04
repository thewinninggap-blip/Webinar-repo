import { useState, useEffect, useRef } from 'react'
import { useModal } from '../context/ModalContext'
import './JoinModal.css'

const INITIAL = { name: '', email: '', phone: '', otp: '' }
const API_BASE = import.meta.env.VITE_PORTAL_API_BASE || 'https://users.api.lecturehead.com/v0'
const API_KEY = import.meta.env.VITE_PORTAL_API_KEY

function getErrorMessage(data, fallback) {
  if (Array.isArray(data?.errors) && data.errors[0]) return data.errors[0]
  if (typeof data?.message === 'string' && data.message) return data.message
  if (typeof data?.data?.message === 'string' && data.data.message) return data.data.message
  return fallback
}

export default function JoinModal() {
  const { open, closeModal } = useModal()
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [step, setStep] = useState('form') // 'form' | 'otp' | 'success'
  const [resendTimer, setResendTimer] = useState(0)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')
  const overlayRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setForm(INITIAL)
        setErrors({})
        setStep('form')
        setResendTimer(0)
        setLoading(false)
        setApiError('')
      }, 300)
    }
  }, [open])

  useEffect(() => {
    if (resendTimer <= 0) return
    const id = setInterval(() => setResendTimer(t => t - 1), 1000)
    return () => clearInterval(id)
  }, [resendTimer])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email'
    if (!form.phone.match(/^[+\d\s\-()]{7,}$/)) e.phone = 'Enter a valid phone number'
    return e
  }

  const handleVerify = async (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    if (!API_KEY) {
      setApiError('Missing API key. Set VITE_PORTAL_API_KEY in your .env file.')
      return
    }

    setLoading(true)
    setApiError('')
    try {
      const res = await fetch(`${API_BASE}/user/otp/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify({ email: form.email }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success) {
        setApiError(getErrorMessage(data, 'Failed to send OTP. Please try again.'))
      } else {
        setStep('otp')
        setResendTimer(30)
        setErrors({})
      }
    } catch {
      setApiError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  const handleConfirm = async (ev) => {
    ev.preventDefault()
    if (!form.otp || form.otp.length < 6) {
      setErrors({ otp: 'Enter the 6-digit OTP sent to your email' })
      return
    }
    if (!API_KEY) {
      setApiError('Missing API key. Set VITE_PORTAL_API_KEY in your .env file.')
      return
    }

    setLoading(true)
    setApiError('')
    try {
      const res = await fetch(`${API_BASE}/user/otp/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify({
          email: form.email,
          otp: form.otp,
          name: form.name,
          phoneNumber: form.phone,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success) {
        setErrors({ otp: getErrorMessage(data, 'Invalid OTP. Please try again.') })
        setLoading(false)
        return
      }

      const token = data?.data?.token || data?.token

      // Generate payment/checkout URL
      const payRes = await fetch(`${API_BASE}/payment-link`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify({ token, courseId: 3 }),
      })
      const payData = await payRes.json().catch(() => ({}))
      if (!payRes.ok) {
        setApiError(getErrorMessage(payData, 'Could not generate payment link. Please try again.'))
        setLoading(false)
        return
      }

      // Handle both flat and nested response shapes
      const inner = payData?.data?.data ?? payData?.data ?? payData ?? {}
      const redirectUrl = inner.redirectUrl
      const hasAccess = inner.hasAccess

      if (hasAccess) {
        setStep('success')
      } else if (redirectUrl) {
        window.location.href = redirectUrl
      } else {
        setApiError('Could not generate payment link. Please try again.')
        setLoading(false)
      }
    } catch {
      setApiError('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    if (resendTimer > 0) return
    if (!API_KEY) {
      setApiError('Missing API key. Set VITE_PORTAL_API_KEY in your .env file.')
      return
    }
    setResendTimer(30)
    setForm(f => ({ ...f, otp: '' }))
    setApiError('')
    try {
      const res = await fetch(`${API_BASE}/user/otp/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify({ email: form.email }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setApiError(getErrorMessage(data, 'Unable to resend OTP. Please try again.'))
      }
    } catch {
      setApiError('Network error. Please check your connection.')
    }
  }

  const set = (key) => (ev) => {
    setForm(f => ({ ...f, [key]: ev.target.value }))
    if (errors[key]) setErrors(e => ({ ...e, [key]: undefined }))
  }

  if (!open) return null

  return (
    <div
      className={`modal-overlay${open ? ' modal-overlay--in' : ''}`}
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && closeModal()}
    >
      <div className="modal-card">

        <button className="modal-close" onClick={closeModal} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
        </button>

        {step === 'success' ? (
          <div className="modal-success">
            <span className="modal-success-icon">✓</span>
            <h3>You already have access!</h3>
            <p>You're enrolled. Check your email for the login link to start learning.</p>
            <button className="btn btn-green modal-done" onClick={closeModal}>
              Done
              <span className="btn-arrow">↗</span>
            </button>
          </div>
        ) : (
          <form onSubmit={step === 'otp' ? handleConfirm : handleVerify} noValidate>

            <div className="modal-header">
              <span className="modal-eyebrow mono">REGISTER · LIMITED TO 25 SEATS</span>
              <h2>Reserve your seat</h2>
              <p>Sunday · 10 AM – 2 PM IST · Live on Zoom</p>
            </div>

            <div className="modal-fields">

              <div className="modal-field">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="First & last name"
                  value={form.name}
                  onChange={set('name')}
                  className={errors.name ? 'err' : ''}
                  autoComplete="name"
                  disabled={step === 'otp' || loading}
                />
                {errors.name && <span className="modal-err">{errors.name}</span>}
              </div>

              <div className="modal-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={set('email')}
                  className={errors.email ? 'err' : ''}
                  autoComplete="email"
                  disabled={step === 'otp' || loading}
                />
                {errors.email && <span className="modal-err">{errors.email}</span>}
              </div>

              <div className="modal-field">
                <label>Phone</label>
                <input
                  type="tel"
                  placeholder="+91 ..."
                  value={form.phone}
                  onChange={set('phone')}
                  className={errors.phone ? 'err' : ''}
                  autoComplete="tel"
                  disabled={step === 'otp' || loading}
                />
                {errors.phone && <span className="modal-err">{errors.phone}</span>}
              </div>

              {step === 'otp' && (
                <div className="modal-field modal-field--otp">
                  <label>Enter OTP <span className="modal-otp-hint">sent to {form.email}</span></label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    placeholder="• • • • • •"
                    value={form.otp}
                    onChange={set('otp')}
                    className={`modal-otp-input${errors.otp ? ' err' : ''}`}
                    autoFocus
                    disabled={loading}
                  />
                  {errors.otp && <span className="modal-err">{errors.otp}</span>}

                  <button
                    type="button"
                    className={`modal-resend${resendTimer > 0 ? ' modal-resend--disabled' : ''}`}
                    onClick={handleResend}
                    disabled={resendTimer > 0 || loading}
                  >
                    {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : 'Resend OTP'}
                  </button>
                </div>
              )}

            </div>

            {apiError && <p className="modal-api-err">{apiError}</p>}

            <button type="submit" className="btn btn-green modal-submit" disabled={loading}>
              {loading ? (
                <span className="modal-spinner" aria-label="Loading" />
              ) : step === 'otp' ? (
                <>Confirm &amp; Reserve Seat <span className="btn-arrow">✓</span></>
              ) : (
                <>Verify with OTP <span className="btn-arrow">→</span></>
              )}
            </button>

            <p className="modal-fine mono">
              By registering you agree to receive Sunday reminders. No spam.
            </p>

          </form>
        )}

      </div>
    </div>
  )
}
