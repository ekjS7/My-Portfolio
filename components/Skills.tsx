'use client'
import Section from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { Shield, Target, Cog } from 'lucide-react'
import config from '@/siteconfig'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Red Team',
      description: 'Offensive security and penetration testing',
      icon: Target,
      skills: config.skills.red,
      color: 'red' as const,
    },
    {
      title: 'Blue Team', 
      description: 'Defensive security and incident response',
      icon: Shield,
      skills: config.skills.blue,
      color: 'blue' as const,
    },
    {
      title: 'Core Technologies',
      description: 'Fundamental tools and technologies',
      icon: Cog,
      skills: config.skills.core,
      color: 'purple' as const,
    },
  ]



  return (
    <Section id="skills">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 hacker-heading">
            <span className="font-mono text-neonGreen">&gt; </span>
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-hackerGray max-w-3xl mx-auto font-mono">
            Practical experience across offensive and defensive cybersecurity domains
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="floating-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg neon-border ${
                        category.color === 'red' ? 'bg-red-500/10' :
                        category.color === 'blue' ? 'bg-blue-500/10' :
                        'bg-purple-500/10'
                      }`}>
                        <IconComponent className={`h-5 w-5 ${
                          category.color === 'red' ? 'text-red-400' :
                          category.color === 'blue' ? 'text-neonCyan' :
                          'text-purple-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg font-mono text-hackerGray">
                          <span className="text-neonGreen">&gt; </span>
                          {category.title}
                        </h3>
                        <p className="text-sm text-hackerGray/70 font-mono">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skill}
                          className="animate-fade-in"
                          style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05}s` }}
                        >
                          <Badge variant={category.color} className="text-xs">
                            {skill}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="floating-card max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Learning Philosophy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I believe in learning through practical application. Each skill listed represents 
                hands-on experience gained through lab exercises, challenges, and real-world scenarios. 
                My goal is to understand both how to exploit vulnerabilities and how to defend against them.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}
