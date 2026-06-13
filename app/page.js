import Link from 'next/link'
import { ArrowRight, AlertTriangle, Layers, TrendingUp, Activity, Map, RefreshCw, BarChart3, Award, Target, Users, ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'Photon — Enterprise Cloud & AWS Architecture',
  description:
    'We help mid-market and large enterprises accelerate cloud modernisation — scalable AWS architectures, legacy system transformation, and FinOps optimisation with pragmatic delivery frameworks.',
  openGraph: {
    title: 'Photon — Enterprise Cloud & AWS Architecture',
    description:
      'We help mid-market and large enterprises accelerate cloud modernisation — scalable AWS architectures, legacy system transformation, and FinOps optimisation.',
  },
}

const PAIN_POINTS = [
  {
    icon: <AlertTriangle size={22} />,
    title: 'Cloud Migrations Stalled?',
    body: '70% of enterprise cloud migrations fail or stall due to lack of a clear, phased target architecture blueprint. We provide the missing link.',
  },
  {
    icon: <Layers size={22} />,
    title: 'Legacy Monolith Bottlenecks?',
    body: 'Moving from monolith to microservices is risky. We design pragmatic API and event-driven strategies that keep your business running during modernisation.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'AWS Cloud Cost Overruns?',
    body: 'Uncontrolled cloud spend drains enterprise budgets. Our FinOps assessment identifies immediate savings and long-term architectural optimisation opportunities.',
  },
]

const SERVICES = [
  {
    icon: <Activity size={22} />,
    num: '01',
    title: 'Cloud Architecture Health Check',
    outcome: 'Comprehensive system audit, bottleneck and risk identification, and target architecture definition.',
    forWho: 'CTOs and Architecture Leads managing unstable or legacy-heavy systems.',
  },
  {
    icon: <Map size={22} />,
    num: '02',
    title: 'AWS Migration Blueprint',
    outcome: 'Production-ready AWS Landing Zone design, phased migration strategy, and execution roadmap.',
    forWho: 'Organisations planning large-scale lift-and-shift or cloud transformation programs.',
  },
  {
    icon: <RefreshCw size={22} />,
    num: '03',
    title: 'Legacy Modernisation Strategy',
    outcome: 'Monolith-to-microservices strategy, event-driven integration design, and data modernisation roadmap.',
    forWho: 'Companies with tech debt wanting to improve business agility without a big-bang rewrite.',
  },
  {
    icon: <BarChart3 size={22} />,
    num: '04',
    title: 'Cloud Cost Optimisation (FinOps)',
    outcome: 'Deep-dive cost analysis, architectural redesign recommendations, and a 25&ndash;40% savings roadmap.',
    forWho: 'Finance and Tech leaders experiencing cloud budget overruns and uncontrolled spend.',
  },
]

const WHY_US = [
  {
    icon: <Award size={22} />,
    title: '20+ Years of Enterprise Expertise',
    body: 'Deep technical authority in AWS cloud architecture and complex distributed system design, built across trading platforms, logistics, and healthcare enterprises.',
  },
  {
    icon: <Target size={22} />,
    title: 'Outcome-Driven Frameworks',
    body: "We don't sell contractor hours. We deliver repeatable, enterprise-grade architectural blueprints and strategic outcomes with measurable business impact.",
  },
  {
    icon: <Users size={22} />,
    title: 'Agile, Scalable Assembly',
    body: 'Powered by a core principal consultant and an elite network of senior local architects and high-quality offshore engineering delivery teams across Australia, Vietnam, and the Philippines.',
  },
]

const CASE_PREVIEWS = [
  {
    tag: 'Logistics SaaS',
    title: 'Enterprise migration: 12-year monolith to cloud-native',
    metric: '60%',
    metricLabel: 'lower infra cost',
    badges: ['AWS ECS Fargate', 'Aurora PostgreSQL', 'EventBridge'],
  },
  {
    tag: 'FinTech',
    title: 'Real-time settlement architecture on AWS',
    metric: '8×',
    metricLabel: 'faster settlement',
    badges: ['Lambda', 'EventBridge', 'DynamoDB'],
  },
  {
    tag: 'Healthcare',
    title: 'HIPAA-ready AWS Landing Zone in six weeks',
    metric: '99.99%',
    metricLabel: 'uptime since cutover',
    badges: ['Control Tower', 'EKS', 'GuardDuty'],
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <div className="nb-blueprint--light" style={{ position: 'relative', overflow: 'hidden', marginTop: '-76px' }}>
        <div
          style={{
            position: 'absolute', width: '720px', height: '720px',
            right: '-200px', top: '-300px',
            background: 'radial-gradient(circle,rgba(20,174,224,.07),transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div className="nb-container" style={{ position: 'relative', paddingTop: '96px', paddingBottom: '104px' }}>
          <div style={{ maxWidth: '880px' }}>
            <span className="nb-eyebrow">Enterprise Cloud Consulting</span>
            <h1 className="nb-display-2" style={{ marginTop: '24px', maxWidth: '920px' }}>
              Accelerate Enterprise Cloud Modernisation.{' '}
              <span style={{ color: 'var(--accent-600)' }}>Reduce Risk. Optimise Costs.</span>
            </h1>
            <p style={{ marginTop: '26px', fontSize: '20px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '660px' }}>
              We help mid-market and large enterprises design scalable AWS cloud architectures, modernise legacy systems, and implement high-impact cloud transformation programs with pragmatic delivery frameworks.
            </p>
            <div style={{ display: 'flex', gap: '14px', marginTop: '36px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="nb-btn nb-btn--accent nb-btn--lg">
                Book a 30-Min Discovery Call
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="nb-btn nb-btn--secondary nb-btn--lg">
                Explore Our Services
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '64px', marginTop: '80px', flexWrap: 'wrap', paddingTop: '36px', borderTop: '1px solid var(--border)' }}>
            <div className="nb-stat">
              <div className="nb-stat__value">20<span className="nb-stat__suffix">+</span></div>
              <div className="nb-stat__label">Years enterprise experience</div>
            </div>
            <div className="nb-stat">
              <div className="nb-stat__value">40<span className="nb-stat__suffix">+</span></div>
              <div className="nb-stat__label">Cloud migrations delivered</div>
            </div>
            <div className="nb-stat">
              <div className="nb-stat__value">40<span className="nb-stat__suffix">%</span></div>
              <div className="nb-stat__label">Avg cloud cost reduction</div>
            </div>
            <div className="nb-stat">
              <div className="nb-stat__value">APAC</div>
              <div className="nb-stat__label">Cross-border delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PAIN POINTS ── */}
      <section style={{ background: 'var(--bg-page)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
            <span className="nb-eyebrow">Do any of these sound familiar?</span>
            <h2 className="nb-display-2" style={{ marginTop: '18px', fontSize: '40px' }}>
              The challenges we solve every day.
            </h2>
          </div>
          <div className="nb-grid-3">
            {PAIN_POINTS.map(({ icon, title, body }) => (
              <div key={title} className="nb-card nb-card--ruled" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span className="nb-icon-badge" style={{ background: 'var(--legacy-100)', color: 'var(--legacy-500)' }}>{icon}</span>
                <h3 style={{ fontSize: '20px', margin: 0 }}>{title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section style={{ background: 'var(--surface-card)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
            <span className="nb-eyebrow">What we do</span>
            <h2 className="nb-display-2" style={{ marginTop: '18px', fontSize: '40px' }}>
              Four standardised products. Clear outcomes.
            </h2>
            <p style={{ marginTop: '16px', color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.6 }}>
              Not time-and-materials retainers. Not slide-ware. Packaged consulting products that deliver measurable architectural outcomes.
            </p>
          </div>
          <div className="nb-grid-2">
            {SERVICES.map(({ icon, num, title, outcome, forWho }) => (
              <div key={num} className="nb-card nb-card--ruled" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="nb-icon-badge">{icon}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.1em', color: 'var(--accent-600)' }}>{num}</span>
                </div>
                <h3 style={{ fontSize: '20px', margin: 0 }}>{title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: outcome }} />
                <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>For</span>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, marginTop: '4px' }}>{forWho}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/services" className="nb-btn nb-btn--secondary">
              View Detailed Product Deliverables
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background: 'var(--bg-page)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
            <span className="nb-eyebrow">Why work with us</span>
            <h2 className="nb-display-2" style={{ marginTop: '18px', fontSize: '40px' }}>
              Tier-1 consulting expertise. Boutique delivery model.
            </h2>
          </div>
          <div className="nb-grid-3">
            {WHY_US.map(({ icon, title, body }) => (
              <div key={title} className="nb-card nb-card--ruled" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span className="nb-icon-badge">{icon}</span>
                <h3 style={{ fontSize: '20px', margin: 0 }}>{title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section style={{ background: 'var(--surface-card)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ maxWidth: '560px' }}>
              <span className="nb-eyebrow">Selected work</span>
              <h2 className="nb-display-2" style={{ marginTop: '18px', fontSize: '40px' }}>Real transformations. Measurable outcomes.</h2>
            </div>
            <Link href="/work" className="nb-btn nb-btn--ghost">
              All case studies
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="nb-grid-3">
            {CASE_PREVIEWS.map(({ tag, title, metric, metricLabel, badges }) => (
              <Link href="/work" key={tag} className="nb-card nb-card--interactive" style={{ display: 'flex', flexDirection: 'column', gap: '18px', textDecoration: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-accent)' }}>{tag}</span>
                  <ArrowUpRight size={18} style={{ color: 'var(--text-faint)' }} />
                </div>
                <h3 style={{ fontSize: '20px', margin: 0, lineHeight: 1.3 }}>{title}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', paddingTop: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '34px', letterSpacing: '-0.02em', color: 'var(--positive-500)' }}>{metric}</span>
                  <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{metricLabel}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '2px' }}>
                  {badges.map((b) => <span key={b} className="nb-badge nb-badge--tech">{b}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <div style={{ background: 'var(--bg-page)' }}>
        <div className="nb-container" style={{ paddingBlock: '80px', textAlign: 'center' }}>
          <span className="nb-eyebrow">Start with clarity</span>
          <h2
            className="nb-display-2"
            style={{ marginTop: '18px', fontSize: '44px', maxWidth: '800px', marginInline: 'auto' }}
          >
            Book a 30-minute Architecture Strategy Session and leave with a clear modernisation path.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '560px', marginInline: 'auto', marginTop: '20px', lineHeight: 1.6 }}>
            No commitment. No pitch. A frank assessment of your current architecture and the fastest path to your cloud destination.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '32px' }}>
            <Link href="/contact" className="nb-btn nb-btn--accent nb-btn--lg">
              Book a Discovery Call
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
