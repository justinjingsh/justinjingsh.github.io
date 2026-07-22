import { Mail, Clock } from 'lucide-react'

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mkoakrby'

export const DISCUSS = [
  {
    title: 'A read on the right approach',
    body: 'For what you’re trying to build or fix, based on the constraints you describe.',
  },
  {
    title: 'The engagement model that fits',
    body: 'Whether fixed-price, hourly, or fractional makes the most sense for your project.',
  },
  {
    title: 'A ballpark timeline and quote',
    body: 'A rough sense of cost and duration before anything is scoped in detail.',
  },
  {
    title: 'A recommended starting service',
    body: 'Which of the seven services to kick off with, and why.',
  },
]

export const CONTACT_INFO = [
  { icon: <Mail size={20} />, label: 'Email', value: 'support@lyranova.com.au', href: 'mailto:support@lyranova.com.au' },
  { icon: <Clock size={20} />, label: 'Response time', value: 'Within 1 business day' },
]
