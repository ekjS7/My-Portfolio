'use client'
import Section from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import config from '@/siteconfig'

export default function About() {
  return (
    <Section id="about">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 hacker-heading">
            <span className="font-mono text-neonGreen">&gt; </span>
            About <span className="gradient-text">Me</span>
          </h2>
          
          <Card className="floating-card text-left">
            <CardContent className="p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {config.summary}
                  </p>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2 p-3 rounded-lg neon-border" style={{ background: 'rgba(255, 0, 0, 0.05)' }}>
                      <h3 className="font-semibold text-red-400 font-mono">
                        <span className="text-red-500">&gt; </span>🔴 Red Team
                      </h3>
                      <p className="text-sm text-hackerGray/80 font-mono">
                        Offensive security research, vulnerability discovery, and penetration testing techniques.
                      </p>
                    </div>
                    <div className="space-y-2 p-3 rounded-lg neon-border" style={{ background: 'rgba(0, 255, 255, 0.05)' }}>
                      <h3 className="font-semibold text-neonCyan font-mono">
                        <span className="text-neonCyan">&gt; </span>🔵 Blue Team
                      </h3>
                      <p className="text-sm text-hackerGray/80 font-mono">
                        Detection engineering, incident response, and security monitoring capabilities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-3">
                    <div className="flex justify-between items-center p-3 rounded-lg neon-border" style={{ background: 'rgba(20, 20, 20, 0.6)' }}>
                      <span className="text-sm font-mono text-hackerGray">Red Team Labs</span>
                      <span className="font-mono text-red-400 text-lg font-bold">
                        {config.labs.filter(lab => lab.area === 'Red').length.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg neon-border" style={{ background: 'rgba(20, 20, 20, 0.6)' }}>
                      <span className="text-sm font-mono text-hackerGray">Blue Team Labs</span>
                      <span className="font-mono text-neonCyan text-lg font-bold">
                        {config.labs.filter(lab => lab.area === 'Blue').length.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg neon-border" style={{ background: 'rgba(20, 20, 20, 0.6)' }}>
                      <span className="text-sm font-mono text-hackerGray">Core Skills</span>
                      <span className="font-mono text-purple-400 text-lg font-bold">
                        {config.skills.core.length.toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg neon-border" style={{ 
                    background: 'linear-gradient(135deg, rgba(57, 255, 20, 0.1), rgba(0, 255, 255, 0.1))' 
                  }}>
                    <p className="text-sm text-center font-mono">
                      <span className="neon-text">&gt; STATUS:</span> 
                      <span className="text-hackerGray"> Expanding knowledge through hands-on labs and seeking cybersecurity internship opportunities</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}
