import Link from 'next/link'
import { Activity, Map, RefreshCw, BarChart3, Check, ArrowRight, Clock } from 'lucide-react'

export const metadata = {
  title: 'Services',
  description:
    'Four standardised consulting products — Cloud Architecture Health Check, AWS Migration Blueprint, Legacy Modernisation Strategy, and Cloud Cost Optimisation. Fixed scope, clear deliverables, measurable outcomes.',
  openGraph: {
    title: 'Services — Lyranova',
    description:
      'Four standardised consulting products with fixed scope, clear deliverables, and measurable outcomes for enterprise cloud modernisation.',
  },
}

function Deliverable({ text }) {
  return (
    <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
      <Check size={16} style={{ color: 'var(--positive-500)', flexShrink: 0, marginTop: '3px' }} />
      <span style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.55 }}>{text}</span>
    </li>
  )
}

function ServiceProduct({ icon, num, title, painPoint, deliverables, timeline, forWho }) {
  return (
    <div className="nb-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <span className="nb-icon-badge" style={{ width: '52px', height: '52px' }}>{icon}</span>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent-600)', marginBottom: '6px' }}>{num}</div>
          <h3 style={{ fontSize: '24px', margin: 0, letterSpacing: '-0.01em' }}>{title}</h3>
        </div>
      </div>

      <p style={{
        fontSize: '15px',
        fontStyle: 'italic',
        color: 'var(--text-muted)',
        lineHeight: 1.65,
        borderLeft: '3px solid var(--accent-300)',
        paddingLeft: '18px',
        margin: 0,
      }}>
        {painPoint}
      </p>

      <div>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginBottom: '14px',
        }}>
          Standard Deliverables
        </div>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
          {deliverables.map((d) => <Deliverable key={d} text={d} />)}
        </ul>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '20px',
        borderTop: '1px solid var(--border-subtle)',
        flexWrap: 'wrap',
        gap: '14px',
      }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="nb-badge nb-badge--accent" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={12} />
            {timeline}
          </span>
          <span style={{ fontSize: '13px', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>For: {forWho}</span>
        </div>
        <Link href="/contact" className="nb-btn nb-btn--primary">
          Request an Assessment
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="nb-blueprint--light" style={{ position: 'relative', overflow: 'hidden', marginTop: '-76px' }}>
        <div style={{ position: 'absolute', width: '560px', height: '560px', right: '-160px', top: '-260px', background: 'radial-gradient(circle,rgba(20,174,224,.07),transparent 60%)' }} />
        <div className="nb-container" style={{ position: 'relative', paddingTop: '96px', paddingBottom: '72px' }}>
          <span className="nb-eyebrow">Services &amp; Solutions</span>
          <h1 className="nb-display-2" style={{ marginTop: '20px', maxWidth: '760px' }}>
            Packaged consulting products. Not billable hours.
          </h1>
          <p style={{ marginTop: '22px', fontSize: '19px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '640px' }}>
            Four standardised engagements, each scoped to a specific enterprise challenge. Fixed deliverables, defined timelines, and outcomes you can measure — not slide decks.
          </p>
        </div>
      </div>

      {/* ── PRODUCT CARDS ── */}
      <section style={{ background: 'var(--bg-page)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            <ServiceProduct
              icon={<Activity size={24} />}
              num="Product 01"
              title="Cloud Architecture Health Check"
              painPoint="Stop guessing what's wrong with your architecture. Before you can transform, you need an honest, expert assessment of where you stand today — the risks, the bottlenecks, and the path forward."
              deliverables={[
                'Comprehensive current-state architecture audit across compute, networking, data, and security',
                'Bottleneck and risk identification matrix — prioritised by business impact',
                'Target architecture definition aligned to AWS Well-Architected Framework',
                'Immediate quick-wins list (0–30 day actions with no architectural debt)',
                'Strategic modernisation recommendations report with executive summary',
              ]}
              timeline="1–2 Weeks"
              forWho="CTOs / Architecture Leads"
            />

            <ServiceProduct
              icon={<Map size={24} />}
              num="Product 02"
              title="AWS Migration Blueprint &amp; Transformation Roadmap"
              painPoint="Stop guessing your cloud destination. Avoid the common pitfalls that cause 70% of enterprise migrations to stall without a clear, phased blueprint and execution plan."
              deliverables={[
                'AWS Landing Zone design: production-ready, secure, multi-account setup guidelines',
                'Migration readiness assessment and technical dependency mapping',
                'Phased delivery plan and roadmap — step-by-step, risk-mitigated execution timeline',
                'Application portfolio analysis with migration wave sequencing',
                'Infrastructure-as-Code standards and toolchain recommendations (Terraform / CDK)',
              ]}
              timeline="2–4 Weeks"
              forWho="Enterprise IT Executives"
            />

            <ServiceProduct
              icon={<RefreshCw size={24} />}
              num="Product 03"
              title="Legacy Modernisation Strategy"
              painPoint="Modernising a monolith is not a big-bang rewrite — it is a carefully sequenced decomposition that keeps the business running while systematically eliminating technical debt."
              deliverables={[
                'Monolith decomposition strategy using strangler-fig or domain-driven design patterns',
                'Event-driven architecture and API integration design blueprint',
                'Data modernisation roadmap: migration from legacy databases to AWS-native data services',
                'Team operating model for managing dual-mode delivery (legacy + modern)',
                'Risk register and rollback playbook for each decomposition milestone',
              ]}
              timeline="2–3 Weeks"
              forWho="Tech-Debt-Heavy Businesses"
            />

            <ServiceProduct
              icon={<BarChart3 size={24} />}
              num="Product 04"
              title="Cloud Cost Optimisation (FinOps Assessment)"
              painPoint="Uncontrolled cloud spend is not a billing problem — it is an architecture problem. Our FinOps assessment identifies the structural causes and delivers an actionable savings roadmap."
              deliverables={[
                'Deep-dive AWS cost analysis across all accounts, services, and workloads',
                'Waste identification report: idle resources, over-provisioned instances, unused reservations',
                'Architectural redesign recommendations to eliminate structural cost inefficiencies',
                'Tagging and cost allocation strategy for ongoing FinOps governance',
                'Savings roadmap targeting 25–40% cost reduction within 90 days',
              ]}
              timeline="1–2 Weeks"
              forWho="Finance &amp; Tech Leaders"
            />

          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODEL ── */}
      <section style={{ background: 'var(--surface-card)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div style={{ maxWidth: '560px', marginBottom: '44px' }}>
            <span className="nb-eyebrow">How engagements run</span>
            <h2 className="nb-display-2" style={{ marginTop: '18px', fontSize: '36px' }}>
              From first call to delivered blueprint.
            </h2>
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid var(--border)' }}
            className="nb-grid-4"
            id="engagement-steps"
          >
            {[
              { num: '01', title: 'Discovery Call', body: 'A free 30-minute call to understand your system, constraints, and goal. No commitment required.' },
              { num: '02', title: 'Scoping', body: 'We define the engagement scope, deliverables, timeline, and investment — then confirm the right product for your situation.' },
              { num: '03', title: 'Delivery', body: 'Fixed-scope work begins. You receive interim findings and a final report with your complete blueprint and roadmap.' },
              { num: '04', title: 'Handover', body: 'A walkthrough session with your team, Q&amp;A, and an optional 30-day support window for implementation questions.' },
            ].map(({ num, title, body }, i, arr) => (
              <div
                key={num}
                style={{
                  padding: '28px 24px 28px 0',
                  borderRight: i < arr.length - 1 ? '1px solid var(--border)' : undefined,
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-600)', letterSpacing: '.1em' }}>{num}</div>
                <h4 style={{ fontSize: '18px', margin: '14px 0 8px' }}>{title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.55, paddingRight: '16px' }} dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ background: 'var(--bg-page)' }}>
        <div className="nb-container" style={{ paddingBlock: '72px', textAlign: 'center' }}>
          <span className="nb-eyebrow">Not sure which product fits?</span>
          <h2
            className="nb-display-2"
            style={{ marginTop: '18px', fontSize: '40px', maxWidth: '680px', marginInline: 'auto' }}
          >
            Start with a free discovery call. We find the right entry point together.
          </h2>
          <div style={{ marginTop: '32px' }}>
            <Link href="/contact" className="nb-btn nb-btn--accent nb-btn--lg">
              Book a 30-Min Discovery Call
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
