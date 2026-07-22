const SITE_URL = 'https://lyranova.com.au'

export default function sitemap() {
  return [
    { url: SITE_URL,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/services`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/about`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
