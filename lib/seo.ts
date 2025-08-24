import type { Metadata } from 'next'
import config from '@/siteconfig'

interface SEOProps {
  title?: string
  description?: string
  path: string
  image?: string
  noIndex?: boolean
}

export function generateSEOMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: SEOProps): Metadata {
  const siteTitle = title || config.seo.title
  const siteDescription = description || config.seo.description
  const siteUrl = config.seo.url
  const fullUrl = `${siteUrl}${path}`
  const ogImage = image || `${siteUrl}/og.png`

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: config.seo.keywords,
    authors: [{ name: config.name, url: siteUrl }],
    creator: config.name,
    publisher: config.name,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      url: fullUrl,
      title: siteTitle,
      description: siteDescription,
      siteName: config.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [ogImage],
      creator: config.socials.twitter ? `@${config.socials.twitter.split('/').pop()}` : undefined,
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    other: {
      'msapplication-TileColor': '#0b0f14',
      'theme-color': '#0b0f14',
    },
  }
}

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.name,
    jobTitle: config.role,
    email: config.email,
    url: config.seo.url,
    image: `${config.seo.url}/avatar.jpg`,
    sameAs: Object.values(config.socials).filter(Boolean),
    worksFor: {
      '@type': 'EducationalOrganization',
      name: config.education[0]?.school || 'University of Transport Ho Chi Minh City',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: config.education[0]?.school || 'University of Transport Ho Chi Minh City',
    },
    knowsAbout: [
      'Cybersecurity',
      'Penetration Testing',
      'Network Security',
      'Web Application Security',
      'Incident Response',
      'Red Team',
      'Blue Team',
      ...config.skills.core,
    ],
    description: config.summary,
  }
}
