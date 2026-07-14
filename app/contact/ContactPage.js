'use client'
import { useState } from 'react'
import { ArrowRight, Mail, Check, ShieldCheck } from 'lucide-react'

const QUALIFICATION = [
  'IT Executives (CTO / CIO / IT Director) leading or planning an AWS cloud transformation',
  'Technical leads managing architecture bottlenecks, performance crises, or unstable legacy systems',
  'Decision-makers with significant cloud spend seeking cost optimisation and architectural governance',
  'Organisations planning a cloud migration or modernisation program in the next 6–12 months',
]

const DISCUSS = [
  'Your current architecture, tech stack, and the specific pain points blocking progress',
  'Your target state vision and business objectives for the transformation',
  'An initial risk and opportunity assessment — what to tackle first',
  'A recommended starting point: which service product fits your situation',
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mkoakrby'

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
      <section style={{ background: 'var(--bg-page)', paddingTop: 'var(--space-9)', paddingBottom: 'var(--section-y)' }}>
        <div className="nb-container">
          <div className="nb-trust" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '56px', alignItems: 'start' }}>

            {/* ── FORM ── */}
            <div className="nb-card" style={{ padding: '36px' }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <h3 style={{ fontSize: '22px', margin: '0 0 6px' }}>Send us a note</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>We reply within one business day.</p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                    <div className="nb-field">
                      <label className="nb-label" htmlFor="name">Full name</label>
                      <input className="nb-input" id="name" name="name" type="text" placeholder="Jane Smith" required />
                    </div>
                    <div className="nb-field">
                      <label className="nb-label" htmlFor="email">Work email</label>
                      <input className="nb-input" id="email" name="email" type="email" placeholder="you@company.com" required />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                    <div className="nb-field">
                      <label className="nb-label" htmlFor="company">Company</label>
                      <input className="nb-input" id="company" name="company" type="text" placeholder="Acme Corporation" required />
                    </div>
                    <div className="nb-field">
                      <label className="nb-label" htmlFor="role">Your role</label>
                      <input className="nb-input" id="role" name="role" type="text" placeholder="CTO / IT Director / Architect" required />
                    </div>
                  </div>
                  <div className="nb-field">
                    <label className="nb-label" htmlFor="challenge">Primary challenge</label>
                    <select className="nb-input" id="challenge" name="challenge">
                      <option value="">Select your primary challenge</option>
                      <option value="migration">Cloud migration stalled or not started</option>
                      <option value="modernisation">Legacy system modernisation</option>
                      <option value="finops">Cloud cost overruns and budget optimisation</option>
                      <option value="architecture">Architecture review or second opinion</option>
                      <option value="strategy">Cloud transformation strategy and roadmap</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="nb-field">
                    <label className="nb-label" htmlFor="message">Describe your cloud challenge</label>
                    <textarea
                      className="nb-textarea"
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="We have a legacy system we want to move to AWS, but previous attempts stalled due to…"
                    />
                  </div>
                  {error && (
                    <p style={{ fontSize: '13px', color: 'var(--negative-500, #d92d20)', margin: 0 }}>
                      Something went wrong sending your message. Please try again, or email us directly.
                    </p>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>
                      Response within 1 business day
                    </span>
                    <button type="submit" className="nb-btn nb-btn--accent nb-btn--lg" disabled={submitting}>
                      {submitting ? 'Sending…' : 'Send Message'}
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '24px 0' }}>
                  <span style={{ width: '52px', height: '52px', borderRadius: '999px', background: 'var(--positive-100)', color: 'var(--positive-500)', display: 'grid', placeItems: 'center' }}>
                    <Check size={28} strokeWidth={2.2} />
                  </span>
                  <h3 style={{ fontSize: '24px', margin: '6px 0 0' }}>Thanks — message received.</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.6, maxWidth: '420px' }}>
                    Justin will review your note and get back to you within one business day.
                  </p>
                  <div style={{ marginTop: '8px' }}>
                    <button type="button" className="nb-btn nb-btn--secondary" onClick={handleReset}>
                      Send another
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ── ASIDE ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* Qualification criteria */}
              <div style={{ background: 'var(--accent-soft-bg)', borderRadius: 'var(--radius-xl)', padding: '28px', border: '1px solid var(--accent-200)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--accent-600)' }} />
                  <span className="nb-eyebrow">Who this call is for</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px' }}>
                  To ensure the best use of everyone&apos;s time, this session is designed for:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {QUALIFICATION.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <Check size={14} style={{ color: 'var(--accent-600)', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What we discuss */}
              <div className="nb-card nb-card--ruled">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  What we&apos;ll discuss
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {DISCUSS.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <ArrowRight size={14} style={{ color: 'var(--accent-500)', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { icon: <Mail size={20} />, label: 'Email', value: 'support@lyranova.com.au', href: 'mailto:support@lyranova.com.au' },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <span className="nb-icon-badge nb-icon-badge--navy">{icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                        {label}
                      </div>
                      {href ? (
                        <a href={href} style={{ fontSize: '15px', color: 'var(--text-strong)', fontWeight: 500, textDecoration: 'none' }}>{value}</a>
                      ) : (
                        <div style={{ fontSize: '15px', color: 'var(--text-strong)', fontWeight: 500 }}>{value}</div>
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
