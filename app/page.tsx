import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import FeaturedLabs from '@/components/FeaturedLabs'
import About from '@/components/About'
import { generateSEOMetadata } from '@/lib/seo'
import config from '@/siteconfig'
import ClientWrapper from '@/components/ClientWrapper'

export const metadata = generateSEOMetadata({
  title: `${config.name} - ${config.role}`,
  description: config.summary,
  path: '/',
})

export default function HomePage() {
  return (
    <ClientWrapper>
      <Hero />
      <About />
      <Skills />
      <FeaturedLabs />
    </ClientWrapper>
  )
}
