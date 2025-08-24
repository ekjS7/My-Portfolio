import { generateSEOMetadata } from '@/lib/seo'
import config from '@/siteconfig'
import Section from '@/components/ui/Section'
import ClientWrapper from '@/components/ClientWrapper'
import LabsGrid from '@/components/LabsGrid'

export const metadata = generateSEOMetadata({
  title: `Labs - ${config.name}`,
  description: `Explore ${config.name}'s cybersecurity lab work including Red Team and Blue Team exercises, web security research, and network analysis projects.`,
  path: '/labs',
})

export default function LabsPage() {
  return (
    <div className="min-h-screen pt-20">
      <Section>
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security <span className="gradient-text">Labs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hands-on cybersecurity research and practical exercises. From offensive security 
              techniques to defensive countermeasures, each lab represents real-world scenarios 
              and security challenges.
            </p>
          </div>
          
          <ClientWrapper>
            <LabsGrid labs={config.labs} />
          </ClientWrapper>
        </div>
      </Section>
    </div>
  )
}
