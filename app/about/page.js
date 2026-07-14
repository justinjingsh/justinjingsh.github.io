import Link from 'next/link'
import { ShieldCheck, Users, Layers, Award, Zap, Globe, ArrowRight, Check } from 'lucide-react'

export const metadata = {
  title: 'About',
  description:
    'Principal Enterprise Architecture Consultant with 20+ years of experience driving cloud modernisation across Australia and APAC. Bridging high-level business strategy with pragmatic AWS cloud delivery.',
  openGraph: {
    title: 'About — Lyranova',
    description:
      'Principal Enterprise Architecture Consultant with 20+ years of experience driving cloud modernisation across Australia and APAC.',
  },
}

const TIMELINE = [
  { year: '2004', title: 'Enterprise Engineer', body: 'Built and shipped mission-critical line-of-business systems for large organisations across finance and logistics.' },
  { year: '2011', title: 'Solution Architect', body: 'Owned architecture for high-throughput distributed platforms and the cross-functional teams running them.' },
  { year: '2017', title: 'Cloud Transformation Lead', body: 'Led large-scale legacy-to-AWS migrations and cloud modernisation programs across Australia, Vietnam, and the Philippines.' },
  { year: '2021', title: 'Advisory Boutique Founded', body: 'Founded Lyranova to deliver principal-level AWS architecture advice directly to enterprises — without the overhead of tier-1 consulting firms.' },
]

const DIFFERENTIATORS = [
  {
    icon: <ShieldCheck size={22} />,
    title: 'Enterprise-Grade by Default',
    body: 'I have owned systems where downtime meant lost revenue and regulatory consequence. That instinct shapes every architecture decision — robustness, security, and compliance are designed in, not bolted on.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Cross-Border Delivery Experience',
    body: 'I have led and coordinated distributed engineering teams across Australia, Vietnam, and the Philippines. I design architectures that offshore teams can actually build, own, and operate.',
  },
  {
    icon: <Layers size={22} />,
    title: 'Deep AWS Ecosystem Knowledge',
    body: 'Fluent across the full AWS surface — from Landing Zone design and EKS to serverless, data engineering, and FinOps. Migrations are designed by someone who has shipped on both sides of the equation.',
  },
]

const DELIVERY_MODEL = [
  {
    icon: <Award size={22} />,
    title: 'Principal Consultant',
    body: 'Leads every engagement personally. You work directly with the principal — not handed to a junior team after the pitch.',
  },
  {
    icon: <Users size={22} />,
    title: 'Senior Local Architects',
    body: 'An elite network of senior architects across Australia and APAC is available for specialised domains — security, data, DevOps, and compliance.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Offshore Engineering Delivery',
    body: 'High-quality engineering delivery teams in Vietnam and the Philippines enable rapid execution at competitive rates, without sacrificing quality or oversight.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="nb-blueprint--light" style={{ position: 'relative', overflow: 'hidden', marginTop: '-76px' }}>
        <div style={{ position: 'absolute', width: '560px', height: '560px', right: '-160px', top: '-260px', background: 'radial-gradient(circle,rgba(20,174,224,.07),transparent 60%)' }} />
        <div className="nb-container" style={{ position: 'relative', paddingTop: '96px', paddingBottom: '72px' }}>
          <span className="nb-eyebrow">About &amp; Methodology</span>
          <h1 className="nb-display-2" style={{ marginTop: '20px', maxWidth: '760px' }}>
            Twenty years building the systems enterprises depend on.
          </h1>
          <p style={{ marginTop: '22px', fontSize: '19px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '640px' }}>
            Lyranova is a specialist cloud modernisation advisory a principal enterprise architect with deep AWS expertise and a track record delivering complex transformations across Australia and APAC.
          </p>
        </div>
      </div>

      {/* ── PROFILE NARRATIVE ── */}
      <section style={{ background: 'var(--bg-page)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div className="nb-trust">
            <div>
              <span className="nb-eyebrow">Principal Consultant</span>
              <div style={{ marginTop: '22px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <p style={{ fontSize: '15px', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)', letterSpacing: '.05em', margin: 0 }}>Principal Enterprise Architecture Consultant</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
                  {DIFFERENTIATORS.map(({ icon, title, body }) => (
                    <div key={title} style={{ display: 'flex', gap: '14px' }}>
                      <span className="nb-icon-badge">{icon}</span>
                      <div>
                        <h4 style={{ fontSize: '16px', margin: '2px 0 5px' }}>{title}</h4>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ fontSize: '18px', lineHeight: 1.75, color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p>
                With over 20 years of hands-on experience driving technology modernisation across complex enterprise landscapes, I founded Lyranova to bridge the gap between high-level business strategy and pragmatic AWS cloud delivery.
              </p>
              <p>
                Having led large-scale cloud transformations and coordinated cross-border engineering teams across Australia, Vietnam, and the Philippines, Lyranova brings tier-1 consulting frameworks without the tier-1 overhead — or the junior team bait-and-switch.
              </p>
              <p>
                My approach is deliberately pragmatic. I have seen too many cloud programmes fail because of unrealistic blueprints, big-bang rewrites, and change-resistant delivery models. Every engagement starts from where you actually are today and builds a sequenced path the business can fund and the team can execute.
              </p>
              <p>
                You work directly with me. Not a project manager. Not a graduate consultant. The person who designed the solution is the person who delivers it.
              </p>
              <div style={{ paddingTop: '8px' }}>
                <Link href="/contact" className="nb-btn nb-btn--primary">
                  Book a Discovery Call
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RETAINER ADVISORY ── */}
      <section style={{ background: 'var(--surface-card)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="nb-trust">
            <div>
              <span className="nb-eyebrow">For ongoing strategic governance</span>
              <h2 style={{ fontSize: '34px', margin: '18px 0 16px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Virtual Head of Architecture<br />Retainer Advisory
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.65 }}>
                Ongoing strategic decision support, monthly architecture governance reviews, and high-level technical risk mitigation for fast-growing enterprises that need principal-level oversight without a full-time hire.
              </p>
              <div style={{ marginTop: '28px' }}>
                <Link href="/contact" className="nb-btn nb-btn--accent">
                  Enquire About Retainer Advisory
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Monthly architecture governance review session',
                'Priority access to principal-level advice for critical technical decisions',
                'Architecture Decision Record (ADR) review and sign-off',
                'Technology radar and emerging risk assessment',
                'Vendor and toolchain evaluation support',
                'Quarterly strategic roadmap alignment review',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Check size={16} style={{ color: 'var(--accent-600)', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ background: 'var(--surface-card)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div style={{ maxWidth: '560px', marginBottom: '44px' }}>
            <span className="nb-eyebrow">Track record</span>
            <h2 className="nb-display-2" style={{ marginTop: '18px', fontSize: '36px' }}>Twenty years, condensed.</h2>
          </div>
          <div className="nb-grid-4">
            {TIMELINE.map(({ year, title, body }) => (
              <div key={year} style={{ borderTop: '2px solid var(--accent)', paddingTop: '18px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--accent-600)', letterSpacing: '.06em' }}>{year}</div>
                <h4 style={{ fontSize: '18px', margin: '12px 0 8px' }}>{title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.55 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERY MODEL ── */}
      <section style={{ background: 'var(--surface-subtle)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 44px' }}>
            <span className="nb-eyebrow">How we deliver</span>
            <h2 style={{ fontSize: '32px', marginTop: '16px' }}>A flexible team. A single accountable principal.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.6, marginTop: '14px' }}>
              Every engagement is led by Justin. Depending on scope and skill requirements, the team assembles around the engagement — senior local architects for strategy, offshore delivery teams for execution.
            </p>
          </div>
          <div className="nb-grid-3">
            {DELIVERY_MODEL.map(({ icon, title, body }) => (
              <div key={title} className="nb-card nb-card--ruled" style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'center', alignItems: 'center' }}>
                <span className="nb-icon-badge">{icon}</span>
                <h4 style={{ fontSize: '18px', margin: 0 }}>{title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section style={{ background: 'var(--bg-page)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px' }}>
            <span className="nb-eyebrow">Certifications &amp; ecosystem</span>
            <h2 style={{ fontSize: '28px', marginTop: '16px' }}>Credentials that back the judgement.</h2>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              'AWS Solutions Architect — Professional',
              'AWS DevOps — Professional',
              'AWS Well-Architected Reviewer',
              'Microsoft Azure Fundamentals',
              'Terraform Associate',
            ].map((cert) => (
              <span key={cert} className="nb-badge nb-badge--accent">{cert}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
