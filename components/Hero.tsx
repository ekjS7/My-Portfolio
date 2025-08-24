'use client'

import { ArrowRight, Download, Target, Code, Shield } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import config from '@/siteconfig'

export default function Hero() {
  const stats = [
    { label: 'Labs Completed', value: config.labs.length, icon: Target },
    { label: 'Skills Areas', value: Object.keys(config.skills).length, icon: Shield },
    { label: 'Active Projects', value: config.labs.filter(lab => lab.featured).length, icon: Code },
  ]

  return (
    <Section className="min-h-screen flex items-center relative overflow-hidden matrix-bg">
      {/* Matrix-style Animated Background */}
      <div className="absolute inset-0 opacity-20">
        {/* Matrix rain lines */}
        <div className="matrix-rain" style={{ left: '10%', animationDelay: '0s' }} />
        <div className="matrix-rain" style={{ left: '25%', animationDelay: '5s' }} />
        <div className="matrix-rain" style={{ left: '40%', animationDelay: '10s' }} />
        <div className="matrix-rain" style={{ left: '60%', animationDelay: '3s' }} />
        <div className="matrix-rain" style={{ left: '75%', animationDelay: '8s' }} />
        <div className="matrix-rain" style={{ left: '90%', animationDelay: '12s' }} />
        
        {/* Neon glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-float" 
             style={{ background: 'radial-gradient(circle, rgba(57, 255, 20, 0.1), transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float" 
             style={{ background: 'radial-gradient(circle, rgba(0, 255, 255, 0.08), transparent)', animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="neon-text font-mono text-sm tracking-wider uppercase animate-fade-in terminal-cursor">
                Hello, I'm
              </p>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in font-heading">
                <span className="block text-hackerGray">{config.name.split(' ')[0]}</span>
                <span className="block gradient-text animate-text-glow">{config.name.split(' ').slice(1).join(' ')}</span>
              </h1>

              <p className="text-xl md:text-2xl font-light animate-fade-in font-mono" style={{ color: '#00ffff' }}>
                {config.role}
              </p>

              <p className="text-lg leading-relaxed max-w-lg animate-fade-in text-hackerGray">
                <span className="neon-text font-mono">&gt; </span>
                {config.headline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              {config.features.cv && (
                <Button size="lg" asChild>
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              )}
              
              <Button variant="outline" size="lg" asChild>
                <Link href="/labs">
                  View Labs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative animate-slide-in-right">
            <div className="card floating-card neon-border" style={{ 
              background: 'rgba(17, 17, 17, 0.9)',
              boxShadow: '0 0 20px rgba(57, 255, 20, 0.2), inset 0 1px 0 rgba(57, 255, 20, 0.1)' 
            }}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg neon-border" style={{ background: 'rgba(57, 255, 20, 0.1)' }}>
                    <Code className="h-5 w-5 neon-text" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm uppercase tracking-wider neon-text">
                      &gt; Security Portfolio
                    </h3>
                    <p className="font-semibold text-hackerGray font-mono">Live Stats</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between p-3 rounded-lg neon-border animate-fade-in"
                        style={{ 
                          animationDelay: `${0.7 + index * 0.1}s`,
                          background: 'rgba(20, 20, 20, 0.6)' 
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="h-4 w-4 neon-text" />
                          <span className="text-sm text-hackerGray font-mono">{stat.label}</span>
                        </div>
                        <span className="text-xl font-bold neon-text font-mono">
                          {stat.value.toString().padStart(2, '0')}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="p-3 rounded-lg neon-border" style={{ 
                  background: 'linear-gradient(135deg, rgba(57, 255, 20, 0.1), rgba(0, 255, 255, 0.1))' 
                }}>
                  <p className="text-xs text-center font-mono">
                    <span className="neon-text">&gt;</span> 
                    <span className="text-hackerGray"> STATUS: Seeking cybersecurity opportunities</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating neon elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full blur-sm animate-float" 
                 style={{ background: 'radial-gradient(circle, rgba(57, 255, 20, 0.3), transparent)' }} />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full blur-sm animate-float" 
                 style={{ background: 'radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent)', animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </Section>
  )
}
