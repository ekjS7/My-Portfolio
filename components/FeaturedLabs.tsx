'use client'
import Link from 'next/link'

import Section from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import LabCard from '@/components/LabCard'
import config from '@/siteconfig'

export default function FeaturedLabs() {
  const featuredLabs = config.labs.filter(lab => lab.featured).slice(0, 6)



  return (
    <Section id="labs">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 hacker-heading">
            <span className="font-mono text-neonGreen">&gt; </span>
            Featured <span className="gradient-text">Labs</span>
          </h2>
          <p className="text-xl text-hackerGray max-w-3xl mx-auto font-mono">
            Highlights from my cybersecurity research and hands-on lab work
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredLabs.map((lab, index) => (
            <div key={lab.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <LabCard lab={lab} />
            </div>
          ))}
        </div>

        {config.labs.length > featuredLabs.length && (
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" asChild>
              <Link href="/labs" className="flex items-center justify-center">
                View All Labs
              </Link>
            </Button>
          </div>
        )}
      </div>
    </Section>
  )
}
