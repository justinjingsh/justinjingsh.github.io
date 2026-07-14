'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function isActive(pathname, href) {
  return pathname === href || pathname === href + '/'
}

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setSolid(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header id="site-header" className={solid ? 'nb-nav--solid' : ''}>
      <div className="nb-container nb-nav-inner">
        <Link href="/" className="nb-nav-logo">
          <img
            src="/icons/lyranova-mark-light.svg"
            width={38}
            height={38}
            alt="Lyranova"
          />
          <span className="nb-nav-wordmark">Lyranova</span>
        </Link>
        <nav className="nb-nav-links">
          <Link href="/" className={isActive(pathname, '/') ? 'active' : undefined}>
            Home
          </Link>
          <Link href="/services" className={isActive(pathname, '/services') ? 'active' : undefined}>
            Services
          </Link>
          <Link href="/about" className={isActive(pathname, '/about') ? 'active' : undefined}>
            About
          </Link>
          <Link href="/insights" className={isActive(pathname, '/insights') ? 'active' : undefined}>
            Insights
          </Link>
          <Link href="/contact" className={isActive(pathname, '/contact') ? 'active' : undefined}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
