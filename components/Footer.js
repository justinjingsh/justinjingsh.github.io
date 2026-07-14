import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--border)', paddingBlock: '64px 32px' }}
    >
      <div className="nb-container">
        <div className="nb-footer-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
              <img src="/icons/lyranova-mark-light.svg" width={38} height={38} alt="" />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '24px',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-strong)',
                }}
              >
                Lyranova
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6 }}>
              Enterprise cloud modernisation advisory. Helping organisations design scalable AWS architectures and deliver pragmatic cloud transformation programs across Australia and APAC.
            </p>
          </div>

          <div className="nb-footer-col">
            <div className="nb-footer-col-title">Practice</div>
            <Link href="/services">Services</Link>
            <Link href="/work">Case Studies</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/about">About</Link>
          </div>

          <div className="nb-footer-col">
            <div className="nb-footer-col-title">Engage</div>
            <Link href="/contact">Contact</Link>
            <Link href="/about">Retainer Advisory</Link>
          </div>

          <div className="nb-footer-col">
            <div className="nb-footer-col-title">Contact Us</div>
            <a href="mailto:support@lyranova.com.au">support@lyranova.com.au</a>
          </div>
        </div>

        <div
          style={{
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-faint)' }}>
            &copy; 2026 Lyranova &mdash; Principal Enterprise Architecture Consultant
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-faint)' }}>
            Remote &middot; Australia &middot; APAC Delivery
          </span>
        </div>
      </div>
    </footer>
  )
}
