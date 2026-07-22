'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

function isActive(pathname, href) {
  return pathname === href || pathname === href + '/'
}

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setSolid(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // close menu on escape
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [menuOpen])

  // prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // close menu on route change
  const onNav = useCallback(() => setMenuOpen(false), [])

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
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={isActive(pathname, href) ? 'active' : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <button
          className="nb-nav-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {/* Mobile menu overlay */}
      <div className={`nb-nav-mobile ${menuOpen ? 'nb-nav-mobile--open' : ''}`}>
        <nav className="nb-nav-mobile-links">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={isActive(pathname, href) ? 'active' : undefined}
              onClick={onNav}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
