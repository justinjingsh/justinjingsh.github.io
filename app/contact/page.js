import ContactPage from './ContactPage'

export const metadata = {
  title: 'Book a Discovery Call',
  description:
    'Book a free 30-minute Architecture Strategy Session. We discuss your current pain points, target architecture, and an initial risk and opportunity assessment. Open to enterprise IT executives and technical leads.',
  openGraph: {
    title: 'Book a Discovery Call — Lyranova',
    description:
      'Book a free 30-minute Architecture Strategy Session. We discuss your cloud challenges and leave you with a clear modernisation direction.',
  },
}

export default function Page() {
  return <ContactPage />
}
