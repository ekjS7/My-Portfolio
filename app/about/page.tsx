import { generateSEOMetadata } from '@/lib/seo'
import config from '@/siteconfig'
import Section from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react'

export const metadata = generateSEOMetadata({
  title: `About - ${config.name}`,
  description: `Learn more about ${config.name}, ${config.role}. Background, education, and cybersecurity journey.`,
  path: '/about',
})

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <Section>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {config.summary}
              </p>
            </div>

            <div className="grid gap-8 lg:gap-12">
              {/* Education */}
              <Card className="floating-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <GraduationCap className="h-6 w-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold">Education</h2>
                  </div>
                  <div className="space-y-6">
                    {config.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-blue-500/30 pl-6">
                        <h3 className="text-xl font-semibold mb-2">{edu.school}</h3>
                        <p className="text-lg text-muted-foreground mb-2">{edu.degree}</p>
                        {edu.period && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="floating-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <MapPin className="h-6 w-6 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold">Experience</h2>
                  </div>
                  <div className="space-y-6">
                    {config.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-green-500/30 pl-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                          <h3 className="text-xl font-semibold">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-lg text-blue-400 mb-3">{exp.company}</p>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        {exp.tech && (
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              {config.certifications.length > 0 && (
                <Card className="floating-card">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-purple-500/20">
                        <Award className="h-6 w-6 text-purple-400" />
                      </div>
                      <h2 className="text-2xl font-bold">Certifications & Achievements</h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {config.certifications.map((cert, index) => (
                        <div 
                          key={index} 
                          className="p-4 rounded-lg border border-white/10 bg-white/5"
                        >
                          <h3 className="font-semibold mb-1">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                          {cert.date && (
                            <p className="text-xs text-muted-foreground">{cert.date}</p>
                          )}
                          {cert.link && (
                            <a 
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              View Certificate →
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Philosophy */}
              <Card className="floating-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">My Approach</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-red-400">🔴 Red Team Mindset</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Think like an attacker to understand real-world threats. I explore vulnerabilities 
                        through hands-on exploitation labs, focusing on web applications, network penetration, 
                        and client-side attacks.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-blue-400">🔵 Blue Team Focus</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Build robust defenses through detection engineering and incident response. 
                        I develop monitoring capabilities, analyze network traffic, and create security 
                        automation to protect against emerging threats.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
