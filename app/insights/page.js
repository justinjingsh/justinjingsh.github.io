import Link from 'next/link'
import { ArrowRight, Clock, ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'Insights',
  description:
    'Thought leadership on enterprise cloud modernisation, AWS architecture, FinOps, and legacy system transformation. Practical guidance for CTOs and Architecture Leads navigating complex cloud programs.',
  openGraph: {
    title: 'Insights — Lyranova',
    description:
      'Thought leadership on enterprise cloud modernisation, AWS architecture, FinOps, and legacy system transformation.',
  },
}

const ARTICLES = [
  {
    category: 'Cloud Strategy',
    readTime: '8 min read',
    title: 'Why 70% of Enterprise Cloud Migrations Stall — And the Blueprint to Fix It',
    excerpt: 'Most cloud migration failures share a common root cause: organisations jump to lift-and-shift without a target architecture blueprint. The technical work is not the hard part. The sequencing is. Here is the framework we use to get migrations moving again.',
    featured: true,
  },
  {
    category: 'FinOps',
    readTime: '6 min read',
    title: 'The Hidden Cost of AWS Cloud Sprawl: A FinOps Audit Checklist for Enterprise CIOs',
    excerpt: 'Uncontrolled cloud spend is not a billing problem — it is an architecture problem. Idle resources, over-provisioned instances, and untagged workloads are symptoms of structural design decisions made early in a migration. Here is how to find and fix them.',
    featured: false,
  },
  {
    category: 'Architecture',
    readTime: '10 min read',
    title: 'Strangler-Fig or Big Bang? The Migration Pattern Choice That Determines Success',
    excerpt: 'Big-bang rewrites fail 75% of the time. The strangler-fig pattern remains the industry gold standard for modernising without burning down the house — but it requires discipline and a clear seam strategy. A practical guide to choosing and executing the right approach.',
    featured: false,
  },
  {
    category: 'AWS',
    readTime: '7 min read',
    title: 'Designing an AWS Multi-Account Landing Zone: The Enterprise Blueprint',
    excerpt: 'A poorly designed Landing Zone is the most expensive architectural mistake you can make — it shapes every workload, every security boundary, and every cost centre that follows. Here is the multi-account blueprint we use for enterprise clients, and why each design decision matters.',
    featured: false,
  },
]

export default function InsightsPage() {
  const [featured, ...rest] = ARTICLES

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="nb-blueprint--light" style={{ position: 'relative', overflow: 'hidden', marginTop: '-76px' }}>
        <div style={{ position: 'absolute', width: '560px', height: '560px', right: '-160px', top: '-260px', background: 'radial-gradient(circle,rgba(20,174,224,.07),transparent 60%)' }} />
        <div className="nb-container" style={{ position: 'relative', paddingTop: '96px', paddingBottom: '72px' }}>
          <span className="nb-eyebrow">Insights</span>
          <h1 className="nb-display-2" style={{ marginTop: '20px', maxWidth: '760px' }}>
            Thought leadership on enterprise cloud.
          </h1>
          <p style={{ marginTop: '22px', fontSize: '19px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '640px' }}>
            Practical guidance on AWS architecture, cloud modernisation, FinOps, and legacy system transformation — written for CTOs and Architecture Leads navigating complex enterprise programs.
          </p>
        </div>
      </div>

      {/* ── FEATURED ARTICLE ── */}
      <section style={{ background: 'var(--bg-page)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <span className="nb-eyebrow" style={{ marginBottom: '24px', display: 'block' }}>Featured</span>
          <div
            className="nb-card nb-card--interactive"
            style={{
              padding: '40px',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '32px',
              alignItems: 'start',
              marginBottom: '48px',
              borderColor: 'var(--border)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '720px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <span className="nb-badge nb-badge--accent">{featured.category}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-faint)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={12} />
                  {featured.readTime}
                </span>
              </div>
              <h2 style={{ fontSize: '28px', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{featured.title}</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>{featured.excerpt}</p>
              <div style={{ paddingTop: '8px' }}>
                <span className="nb-btn nb-btn--primary" style={{ cursor: 'default', opacity: 0.75, fontSize: '14px' }}>
                  Coming Soon
                </span>
              </div>
            </div>
            <ArrowUpRight size={24} style={{ color: 'var(--text-faint)', marginTop: '4px' }} />
          </div>

          {/* ── ARTICLE GRID ── */}
          <div className="nb-grid-3">
            {rest.map(({ category, readTime, title, excerpt }) => (
              <div
                key={title}
                className="nb-card nb-card--ruled"
                style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
              >
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="nb-badge nb-badge--accent">{category}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-faint)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={11} />
                    {readTime}
                  </span>
                </div>
                <h3 style={{ fontSize: '19px', margin: 0, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{excerpt}</p>
                <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', fontStyle: 'italic' }}>Coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER / NOTIFY ── */}
      <section style={{ background: 'var(--surface-card)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
            <span className="nb-eyebrow" style={{ justifyContent: 'center' }}>Stay informed</span>
            <h2 style={{ fontSize: '32px', marginTop: '18px', letterSpacing: '-0.02em' }}>
              Get notified when new articles are published.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.65, marginTop: '14px' }}>
              Practical insights on enterprise cloud modernisation, AWS architecture, and FinOps — published when they are worth reading, not on a publishing schedule.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input
                className="nb-input"
                type="email"
                placeholder="you@company.com"
                style={{ maxWidth: '320px' }}
              />
              <button className="nb-btn nb-btn--accent">
                Notify Me
                <ArrowRight size={16} />
              </button>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-faint)', marginTop: '12px', fontFamily: 'var(--font-mono)' }}>
              No spam. Unsubscribe any time.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ background: 'var(--bg-page)' }}>
        <div className="nb-container" style={{ paddingBlock: '72px', textAlign: 'center' }}>
          <span className="nb-eyebrow">Ready to talk?</span>
          <h2
            className="nb-display-2"
            style={{ marginTop: '18px', fontSize: '38px', maxWidth: '660px', marginInline: 'auto' }}
          >
            Turn insight into action with a free discovery call.
          </h2>
          <div style={{ marginTop: '28px' }}>
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
