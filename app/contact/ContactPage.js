'use client'
import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { DISCUSS, FORMSPREE_ENDPOINT, CONTACT_INFO } from './ContactPage-content'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const form = e.target
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  function handleReset() {
    setSubmitted(false)
  }

  return (
    <>
      {/* ── CONTACT BODY ── */}
      <section className="nb-contact-section">
        <div className="nb-container">
          <div className="nb-contact-grid">

            {/* ── FORM ── */}
            <div className="nb-card nb-contact-card">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="nb-contact-form">
                  <div>
                    <h3 className="nb-contact-form__title">Send me a note</h3>
                    <p className="nb-contact-form__subtitle">I reply within one business day.</p>
                  </div>
                  <div className="nb-contact-form-row">
                    <div className="nb-field">
                      <label className="nb-label" htmlFor="name">Full name</label>
                      <input className="nb-input" id="name" name="name" type="text" placeholder="Jane Smith" required />
                    </div>
                    <div className="nb-field">
                      <label className="nb-label" htmlFor="email">Email</label>
                      <input className="nb-input" id="email" name="email" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className="nb-field">
                    <label className="nb-label" htmlFor="company">Company (optional)</label>
                    <input className="nb-input" id="company" name="company" type="text" placeholder="Your business or project name" />
                  </div>
                  <div className="nb-field">
                    <label className="nb-label" htmlFor="service">Service you're interested in</label>
                    <select className="nb-input" id="service" name="service">
                      <option value="">Select a service</option>
                      <option value="web-api">Full-Stack Web & API Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="cloud">Cloud Architecture & Migration</option>
                      <option value="legacy">Legacy Modernisation</option>
                      <option value="integration">Third-Party API Integration</option>
                      <option value="fractional">Fractional Engineering Leadership</option>
                      <option value="genai">Generative AI Development</option>
                      <option value="other">Not sure / other</option>
                    </select>
                  </div>
                  <div className="nb-field">
                    <label className="nb-label" htmlFor="message">Tell me about your project</label>
                    <textarea
                      className="nb-textarea"
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="I need a web app built, or I have a legacy system that needs modernising…"
                    />
                  </div>
                  {error && (
                    <p className="nb-form-error">
                      Something went wrong sending your message. Please try again, or email me directly.
                    </p>
                  )}
                  <div className="nb-contact-form__actions">
                    <button type="submit" className="nb-btn nb-btn--accent nb-btn--lg" disabled={submitting}>
                      {submitting ? 'Sending…' : 'Send Message'}
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="nb-contact-success">
                  <span className="nb-contact-success__icon">
                    <Check size={28} strokeWidth={2.2} />
                  </span>
                  <h3 className="nb-contact-success__title">Thanks — message received.</h3>
                  <p className="nb-contact-success__body">
                    Your note will be reviewed and answered within one business day.
                  </p>
                  <div className="nb-contact-success__actions">
                    <button type="button" className="nb-btn nb-btn--secondary" onClick={handleReset}>
                      Send another
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ── ASIDE ── */}
            <div className="nb-contact-aside">

              {/* What we'll discuss */}
              <div className="nb-card nb-card--ruled">
                <div className="nb-contact-aside__label">
                  What I&apos;ll cover in my reply
                </div>
                <div className="nb-contact-discuss-list">
                  {DISCUSS.map(({ title, body }) => (
                    <div key={title} className="nb-contact-discuss-item">
                      <ArrowRight size={14} className="nb-contact-discuss-item__icon" />
                      <div>
                        <div className="nb-contact-discuss-item__title">{title}</div>
                        <p className="nb-contact-discuss-item__body">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="nb-contact-info-list">
                {CONTACT_INFO.map(({ icon, label, value, href }) => (
                  <div key={label} className="nb-contact-info-item">
                    <span className="nb-icon-badge nb-icon-badge--navy">{icon}</span>
                    <div>
                      <div className="nb-contact-info-item__label">
                        {label}
                      </div>
                      {href ? (
                        <a href={href} className="nb-contact-info-item__value">{value}</a>
                      ) : (
                        <div className="nb-contact-info-item__value">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
