import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: '404 — Page not found',
}

export default function NotFound() {
  return (
    <div className="nb-blueprint--light nb-notfound">
      <div className="nb-container nb-notfound__inner">
        <div className="nb-notfound__code">
          404
        </div>
        <h1 className="nb-display-2 nb-notfound__title">
          This page doesn&apos;t exist.
        </h1>
        <p className="nb-notfound__lead">
          The URL may have changed or the page was removed. Head back to the home page.
        </p>
        <div className="nb-notfound__actions">
          <Link href="/" className="nb-btn nb-btn--accent nb-btn--lg">
            Back to home
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}
