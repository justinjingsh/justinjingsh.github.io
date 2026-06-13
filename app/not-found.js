import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: '404 — Page not found',
}

export default function NotFound() {
  return (
    <div className="nb-blueprint--light" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', marginTop: '-76px' }}>
      <div className="nb-container" style={{ paddingBlock: '120px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-600)', marginBottom: '24px' }}>
          404
        </div>
        <h1 className="nb-display-2" style={{ maxWidth: '600px', marginInline: 'auto' }}>
          This page doesn&apos;t exist.
        </h1>
        <p style={{ marginTop: '22px', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '480px', marginInline: 'auto' }}>
          The URL may have changed or the page was removed. Head back to the home page.
        </p>
        <div style={{ marginTop: '36px' }}>
          <Link href="/" className="nb-btn nb-btn--accent nb-btn--lg">
            Back to home
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}
