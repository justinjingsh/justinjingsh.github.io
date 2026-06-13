import '../css/design-system.css'
import '../css/components.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const SITE_URL = 'https://justinjingsh.github.io'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s — Photon',
    default: 'Photon — Enterprise Cloud & AWS Architecture',
  },
  description:
    'Enterprise cloud modernisation advisory. We help mid-market and large enterprises design scalable AWS architectures, modernise legacy systems, and implement high-impact cloud transformation programs.',
  openGraph: {
    type: 'website',
    siteName: 'Photon',
    title: 'Photon — Enterprise Cloud & AWS Architecture',
    description:
      'Enterprise cloud modernisation advisory. Scalable AWS architectures, legacy modernisation, and cloud transformation programs for mid-market and enterprise organisations.',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary',
    title: 'Photon — Enterprise Cloud & AWS Architecture',
    description:
      'Enterprise cloud modernisation advisory. Scalable AWS architectures, legacy modernisation, and cloud transformation programs.',
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
