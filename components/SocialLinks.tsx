'use client'


import { Github, Linkedin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import config from '@/siteconfig'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  tryhackme: ExternalLink,
  twitter: ExternalLink,
}

const socialLabels = {
  github: 'GitHub',
  linkedin: 'LinkedIn', 
  tryhackme: 'TryHackMe',
  twitter: 'Twitter',
}

export default function SocialLinks() {
  const socialEntries = Object.entries(config.socials).filter(([_, url]) => url)



  return (
    <div className="flex flex-wrap gap-3">
      {socialEntries.map(([platform, url], index) => {
        const IconComponent = socialIcons[platform as keyof typeof socialIcons]
        const label = socialLabels[platform as keyof typeof socialLabels]
        
        return (
          <div key={platform} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="group hover:bg-white/10 transition-all duration-200"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                aria-label={`Visit ${label} profile`}
              >
                <IconComponent className="h-4 w-4 group-hover:text-primary transition-colors" />
                <span className="text-sm">{label}</span>
                <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </div>
        )
      })}
    </div>
  )
}
