import Link from 'next/link'
import { Users, Award, Code2, ArrowRight } from 'lucide-react'
import { metadata, DIFFERENTIATORS, CERTIFICATIONS } from './page-content'

export { metadata }

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="nb-page-hero nb-page-hero--tinted">
        <div className="nb-page-hero__glow nb-page-hero__glow--sm" />
        <div className="nb-container nb-page-hero__inner">
          <span className="nb-eyebrow">About</span>
          <h1 className="nb-display-2 nb-page-header__title">
            Production software, built to last.
          </h1>
          <p className="nb-page-header__lead">
            An independent solution architect and full-stack engineer based in Sydney, helping startups and small businesses ship production-grade software without the overhead of a big agency.
          </p>
        </div>
      </div>

      {/* ── PROFILE NARRATIVE ── */}
      <section className="nb-bg-page nb-section--tight-top">
        <div className="nb-container">
          <div className="nb-trust">
            <div>
              <span className="nb-eyebrow">Profile</span>
              <div className="nb-profile__col">
                <div>
                  <p className="nb-profile__role">Freelance Solution Architect &amp; Full-Stack Engineer</p>
                </div>
                <div className="nb-differentiator-list">
                  {DIFFERENTIATORS.map(({ icon, title, body }) => (
                    <div key={title} className="nb-differentiator">
                      <span className="nb-icon-badge">{icon}</span>
                      <div>
                        <h4 className="nb-differentiator__title">{title}</h4>
                        <p className="nb-body-sm-muted">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="nb-profile__narrative">
              <p>
                I have 20+ years building production software and leading engineering teams across fintech, adtech, and HR/payroll platforms — from early roles at global tech firms through to leading engineering at high-growth companies.
              </p>
              <p>
                I deliver end to end: architecture, hands-on development, and delivery management. I'm comfortable working directly with founders and stakeholders on fixed-price builds, ongoing hourly engagements, or fractional technical leadership.
              </p>
              <p>
                My core strengths are .NET Core and C# backend systems, React/Angular and Flutter front-ends, AWS/Azure cloud architecture, microservices and third-party API integrations, and turning distressed or legacy codebases into maintainable systems.
              </p>
              <p>
                You work directly with me. Not a project manager. Not a graduate consultant. The person who designs the solution is the person who builds it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section className="nb-bg-subtle nb-section">
        <div className="nb-container">
          <div className="nb-about-head">
            <span className="nb-eyebrow">How I work</span>
            <h2 className="nb-about-head__title">Hands-on delivery, scaled when you need it.</h2>
            <p className="nb-about-head__lead">
              For most engagements, I design and build the work myself — no account managers, no bench of junior developers billed at senior rates. For larger scoped projects I can bring in trusted collaborators, but I'm always the one accountable for delivery.
            </p>
          </div>
          <div className="nb-grid-2 nb-grid-2--narrow">
            <div className="nb-card nb-card--ruled nb-work-mode-card">
              <span className="nb-icon-badge"><Code2 size={22} /></span>
              <h4 className="nb-work-mode-card__title">Solo, Hands-On Delivery</h4>
              <p className="nb-body-sm-muted">The default for most projects — I design, build, and deliver directly, with regular check-ins.</p>
            </div>
            <div className="nb-card nb-card--ruled nb-work-mode-card">
              <span className="nb-icon-badge"><Users size={22} /></span>
              <h4 className="nb-work-mode-card__title">Scaled for Larger Work</h4>
              <p className="nb-body-sm-muted">For bigger scopes, I can bring in trusted collaborators — I stay accountable for the outcome throughout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="nb-bg-page nb-section">
        <div className="nb-container">
          <div className="nb-about-head nb-about-head--sm">
            <span className="nb-eyebrow">Certifications &amp; education</span>
            <h2 className="nb-about-head__title--sm">Credentials that back the judgement.</h2>
          </div>
          <div className="nb-cert-list">
            {CERTIFICATIONS.map((cert) => (
              <span key={cert} className="nb-badge nb-badge--accent nb-badge--icon">
                <Award size={12} />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="nb-bg-card nb-section nb-section--bordered">
        <div className="nb-container nb-text-center">
          <h2 className="nb-cta-title">Have a project in mind?</h2>
          <Link href="/contact" className="nb-btn nb-btn--accent nb-btn--lg">
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
