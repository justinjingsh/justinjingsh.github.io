import '../css/design-system.css'
import '../css/components.css'
import '../css/page-sections.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const SITE_URL = 'https://lyranova.com.au'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s — Lyranova',
    default: 'Lyranova — Freelance Solution Architect & Full-Stack Engineer',
  },
  description:
    'Independent solution architect and full-stack engineer. 20+ years building production software across .NET, React/Angular, Flutter mobile, and AWS/Azure cloud — available for fixed-price projects, hourly engagements, and fractional technical leadership.',
  openGraph: {
    type: 'website',
    siteName: 'Lyranova',
    title: 'Lyranova — Freelance Solution Architect & Full-Stack Engineer',
    description:
      'Independent solution architect and full-stack engineer. 20+ years across .NET, React/Angular, Flutter mobile, and AWS/Azure cloud — available for fixed-price, hourly, and fractional engagements.',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary',
    title: 'Lyranova — Freelance Solution Architect & Full-Stack Engineer',
    description:
      'Independent solution architect and full-stack engineer. 20+ years across .NET, React/Angular, Flutter mobile, and AWS/Azure cloud.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
