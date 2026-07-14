import Link from 'next/link'
import { Minus, Check, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Case Studies',
  description:
    'Real enterprise cloud transformation outcomes — 60% infrastructure cost reduction, 8× faster settlement, HIPAA-ready AWS Landing Zones in six weeks. Measurable results from pragmatic delivery.',
  openGraph: {
    title: 'Case Studies — Lyranova',
    description:
      'Real enterprise cloud transformation outcomes — 60% infrastructure cost reduction, 8× faster settlement, HIPAA-ready AWS Landing Zones in six weeks.',
  },
}

function BeforeAfter({ before, after }) {
  return (
    <div className="nb-ba">
      <div className="nb-ba__panel nb-ba__panel--before">
        <div className="nb-ba__label nb-ba__label--before">Before</div>
        <ul>
          {before.map((item) => (
            <li key={item}>
              <Minus size={16} style={{ color: 'var(--legacy-500)' }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="nb-ba__arrow">
        <ArrowRight size={22} />
      </div>
      <div className="nb-ba__panel nb-ba__panel--after">
        <div className="nb-ba__label nb-ba__label--after">After</div>
        <ul>
          {after.map((item) => (
            <li key={item}>
              <Check size={16} style={{ color: 'var(--positive-500)' }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const CASE_STUDIES = [
  {
    tag: 'Logistics SaaS',
    title: 'Enterprise migration: 12-year monolith to cloud-native on AWS',
    description:
      'A profitable logistics platform had outgrown its architecture. Releases were monthly, risky, and required all-hands coordination. We designed and delivered an AWS Migration Blueprint — migrating service by service behind a stable routing layer, with zero cutover downtime.',
    tags: ['AWS ECS Fargate', 'Aurora PostgreSQL', 'EventBridge', 'Terraform', 'CloudFront'],
    metrics: [
      { value: '60%', label: 'Lower infra cost' },
      { value: '30×', label: 'Release frequency' },
      { value: '0', label: 'Downtime at cutover' },
    ],
    before: [
      'Single IIS monolith, monthly releases',
      'Vertical scaling only — capped at peak demand',
      'No automated infrastructure or CI/CD pipeline',
    ],
    after: [
      'Containerised microservices, daily deploys',
      'Auto-scaling on ECS Fargate',
      'Fully infrastructure-as-code with Terraform',
    ],
  },
  {
    tag: 'FinTech',
    title: 'Real-time settlement architecture — from nightly batch to event-driven AWS',
    description:
      'Settlement ran as an overnight batch process that left the business operationally blind for six hours. We re-architected the core settlement flow around events, moving the critical path to AWS managed serverless components with full idempotency and self-healing workflows.',
    tags: ['AWS Lambda', 'EventBridge', 'DynamoDB', 'Step Functions', 'API Gateway'],
    metrics: [
      { value: '8×', label: 'Faster settlement' },
      { value: '99.99%', label: 'Platform uptime' },
      { value: '45%', label: 'Lower run cost' },
    ],
    before: [
      'Nightly batch, 6-hour operational blind window',
      'Tight coupling between settlement services',
      'Scaling meant provisioning larger servers',
    ],
    after: [
      'Event-driven, near real-time settlement',
      'Idempotent, self-healing serverless workflows',
      'Scales automatically with transaction volume',
    ],
  },
  {
    tag: 'Healthcare',
    title: 'HIPAA-ready AWS Landing Zone — enterprise compliance foundation in six weeks',
    description:
      'A health-tech scale-up needed an auditable, compliant AWS foundation before onboarding their first enterprise customer. We delivered a multi-account Landing Zone with security guardrails, full audit trails, and observability built in from day one — ready in six weeks.',
    tags: ['AWS Control Tower', 'EKS', 'RDS Aurora', 'CloudTrail', 'GuardDuty'],
    metrics: [
      { value: '6 wks', label: 'To production' },
      { value: '100%', label: 'Guardrail coverage' },
      { value: '99.99%', label: 'Uptime since launch' },
    ],
    before: [
      'Single AWS account, manual provisioning',
      'No audit trail, logging, or security guardrails',
      'Security reviewed after deployment — not before',
    ],
    after: [
      'Multi-account architecture, policy-enforced via SCPs',
      'Full CloudTrail audit trail and GuardDuty monitoring',
      'Compliance and security designed in from day one',
    ],
  },
]

export default function WorkPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="nb-blueprint--light" style={{ position: 'relative', overflow: 'hidden', marginTop: '-76px' }}>
        <div style={{ position: 'absolute', width: '560px', height: '560px', right: '-160px', top: '-260px', background: 'radial-gradient(circle,rgba(20,174,224,.07),transparent 60%)' }} />
        <div className="nb-container" style={{ position: 'relative', paddingTop: '96px', paddingBottom: '72px' }}>
          <span className="nb-eyebrow">Case Studies</span>
          <h1 className="nb-display-2" style={{ marginTop: '20px', maxWidth: '760px' }}>
            Real enterprise transformations. Measurable outcomes.
          </h1>
          <p style={{ marginTop: '22px', fontSize: '19px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '640px' }}>
            A look at how legacy, high-risk enterprise systems became scalable, cloud-native AWS platforms — the architecture challenges, the delivery approach, and the business numbers that moved.
          </p>
        </div>
      </div>

      {/* ── CASE STUDIES ── */}
      <section style={{ background: 'var(--bg-page)', paddingBlock: 'var(--section-y)' }}>
        <div className="nb-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {CASE_STUDIES.map((cs) => (
              <article key={cs.tag} className="nb-case-study">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                  <div style={{ maxWidth: '580px' }}>
                    <div className="nb-case-study__tag">{cs.tag}</div>
                    <h3 style={{ fontSize: '26px', margin: '14px 0 0', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{cs.title}</h3>
                    <p style={{ margin: '14px 0 0', fontSize: '16px', lineHeight: 1.65, color: 'var(--text-body)' }}>
                      {cs.description}
                    </p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '18px' }}>
                      {cs.tags.map((t) => (
                        <span key={t} className="nb-badge nb-badge--tech">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="nb-case-study__metric-value">{m.value}</div>
                        <div className="nb-case-study__metric-label">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: '28px' }}>
                  <BeforeAfter before={cs.before} after={cs.after} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <div style={{ background: 'var(--accent-soft-bg)' }}>
        <div className="nb-container" style={{ paddingBlock: '72px', textAlign: 'center' }}>
          <span className="nb-eyebrow">Your transformation is next</span>
          <h2 className="nb-display-2" style={{ fontSize: '38px', maxWidth: '680px', marginInline: 'auto', marginTop: '18px' }}>
            Book a discovery call and leave with a clear modernisation path.
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
