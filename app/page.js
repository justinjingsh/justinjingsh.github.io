import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { metadata, PAIN_POINTS, SERVICES, WHY_ME, INDUSTRIES } from './page-content'

export { metadata }

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <div className="nb-blueprint--light nb-page-hero">
        <div className="nb-page-hero__glow nb-page-hero__glow--lg" />
        <div className="nb-container nb-page-hero__inner">
          <div className="nb-hero__content">
            <span className="nb-eyebrow">Freelance Solution Architect &amp; Engineer</span>
            <h1 className="nb-display-2 nb-hero__title">
              Full-stack, cloud, and mobile —{' '}
              <span className="nb-hero__title-highlight">delivered by an independent engineer.</span>
            </h1>
            <p className="nb-hero__lead">
              An independent solution architect and full-stack engineer with 20+ years of experience — delivering full-stack web and API development, mobile apps, cloud architecture and migration, generative AI development, and legacy system modernisation. Available for fixed-price builds, hourly engagements, or fractional technical leadership.
            </p>
            <div className="nb-hero__actions">
              <Link href="/services" className="nb-btn nb-btn--secondary nb-btn--lg">
                View Services
              </Link>
              <Link href="/contact" className="nb-btn nb-btn--ghost nb-btn--lg">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── PAIN POINTS ── */}
      <section className="nb-bg-page nb-section--tight-top">
        <div className="nb-container">
          <div className="nb-section-head">
            <span className="nb-eyebrow">Sound familiar?</span>
            <h2 className="nb-display-2 nb-section-head__title">
              Common problems I get hired to solve.
            </h2>
          </div>
          <div className="nb-grid-3">
            {PAIN_POINTS.map(({ icon, title, body }) => (
              <div key={title} className="nb-card nb-card--ruled nb-info-card">
                <span className="nb-icon-badge nb-icon-badge--legacy">{icon}</span>
                <h3 className="nb-info-card__title">{title}</h3>
                <p className="nb-body-md-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section className="nb-bg-card">
        <div className="nb-container">
          <div className="nb-section-head">
            <span className="nb-eyebrow">What I do</span>
            <h2 className="nb-display-2 nb-section-head__title">
              Core services. Clear scope.
            </h2>
            <p className="nb-section-head__lead">
              Fixed-price projects, hourly engagements, or fractional leadership — scoped to what your project actually needs.
            </p>
          </div>
          <div className="nb-grid-2">
            {SERVICES.map(({ icon, title, outcome }, i) => (
              <div key={i} className="nb-card nb-card--ruled nb-info-card">
                <div className="nb-info-card__head">
                  <span className="nb-icon-badge">{icon}</span>
                  <h3 className="nb-info-card__title">{title}</h3>
                </div>
                <p className="nb-body-md">{outcome}</p>
              </div>
            ))}
          </div>
          <div className="nb-section-cta">
            <Link href="/services" className="nb-btn nb-btn--secondary">
              View All Services
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY ME ── */}
      <section className="nb-bg-page nb-section">
        <div className="nb-container">
          <div className="nb-section-head">
            <span className="nb-eyebrow">Why work with me</span>
            <h2 className="nb-display-2 nb-section-head__title">
              Real experience. Direct delivery.
            </h2>
          </div>
          <div className="nb-grid-3">
            {WHY_ME.map(({ icon, title, body }) => (
              <div key={title} className="nb-card nb-card--ruled nb-info-card">
                <span className="nb-icon-badge">{icon}</span>
                <h3 className="nb-info-card__title">{title}</h3>
                <p className="nb-body-md-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER HIGHLIGHTS ── */}
      <section className="nb-bg-card nb-section">
        <div className="nb-container">
          <div className="nb-section-head-row">
            <div className="nb-section-head-row__content">
              <span className="nb-eyebrow">Industry experience</span>
              <h2 className="nb-display-2 nb-section-head-row__title">Four industries. Twenty years.</h2>
            </div>
            <Link href="/about" className="nb-btn nb-btn--ghost">
              Full background
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="nb-grid-4 nb-grid-4--tight">
            {INDUSTRIES.map(({ icon, title, body }) => (
              <div key={title} className="nb-card nb-card--ruled nb-info-card">
                <span className="nb-icon-badge">{icon}</span>
                <h4 className="nb-info-card__title--sm">{title}</h4>
                <p className="nb-body-sm-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
