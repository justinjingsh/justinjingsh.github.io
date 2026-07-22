import { Check, Briefcase } from 'lucide-react'
import { metadata, SERVICE_PRODUCTS, PROCESS_STEPS } from './page-content'

export { metadata }

function Deliverable({ text }) {
  return (
    <li className="nb-deliverable">
      <Check size={16} className="nb-deliverable__icon" />
      <span className="nb-deliverable__text">{text}</span>
    </li>
  )
}

function ServiceProduct({ icon, title, painPoint, deliverables, engagement, forWho }) {
  return (
    <div className="nb-card nb-service-product">
      <div className="nb-service-product__head">
        <span className="nb-icon-badge nb-icon-badge--lg">{icon}</span>
        <h3 className="nb-service-product__title">{title}</h3>
      </div>

      <p className="nb-service-product__pain">
        {painPoint}
      </p>

      <div>
        <div className="nb-service-product__label">
          What's Included
        </div>
        <ul className="nb-service-product__list">
          {deliverables.map((d) => <Deliverable key={d} text={d} />)}
        </ul>
      </div>

      <div className="nb-service-product__footer">
        <div className="nb-service-product__meta">
          <span className="nb-badge nb-badge--accent nb-badge--icon">
            <Briefcase size={12} />
            {engagement}
          </span>
          <span className="nb-service-product__fit">Good fit: {forWho}</span>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="nb-page-hero nb-page-hero--tinted">
        <div className="nb-page-hero__glow nb-page-hero__glow--sm" />
        <div className="nb-container nb-page-hero__inner">
          <span className="nb-eyebrow">Services</span>
          <h1 className="nb-display-2 nb-page-header__title">
            Freelance services, scoped to fit.
          </h1>
          <p className="nb-page-header__lead">
            Seven services covering the full stack, mobile, cloud, and generative AI. Fixed-price for well-defined projects, hourly for ongoing work, or a fractional lead for teams that need senior oversight without a full-time hire.
          </p>
        </div>
      </div>

      {/* ── PRODUCT CARDS ── */}
      <section className="nb-bg-page nb-section--tight-top">
        <div className="nb-container">
          <div className="nb-service-list">
            {SERVICE_PRODUCTS.map((service) => (
              <ServiceProduct key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODEL ── */}
      <section className="nb-bg-card nb-section">
        <div className="nb-container">
          <div className="nb-section-head">
            <span className="nb-eyebrow">How it works</span>
            <h2 className="nb-display-2 nb-section-head__title--sm">
              From first message to delivered work.
            </h2>
          </div>
          <div className="nb-grid-4 nb-grid-4--divided">
            {PROCESS_STEPS.map(({ num, title, body }, i, arr) => (
              <div
                key={num}
                className={`nb-process-step${i < arr.length - 1 ? ' nb-process-step--divided' : ''}`}
              >
                <div className="nb-process-step__num">{num}</div>
                <h4 className="nb-process-step__title">{title}</h4>
                <p className="nb-process-step__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
