import { MetadataRoute } from 'next'
import config from '@/siteconfig'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${config.seo.url}/sitemap.xml`,
  }
}
