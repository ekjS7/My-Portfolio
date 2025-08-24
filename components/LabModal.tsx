'use client'

import { useEffect } from 'react'

import { X, ExternalLink, Calendar, Target } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { getAreaColor, getAreaIcon } from '@/lib/utils'
import type { Lab } from '@/siteconfig'

interface LabModalProps {
  lab: Lab
  isOpen: boolean
  onClose: () => void
}

export default function LabModal({ lab, isOpen, onClose }: LabModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])



  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
          />

          {/* Modal */}
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="w-full">
              <CardContent className="p-0">
                {/* Header */}
                <div className="flex items-start justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getAreaIcon(lab.area)}</span>
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{lab.title}</h2>
                      <Badge 
                        className={`text-sm ${getAreaColor(lab.area)}`}
                        variant="outline"
                      >
                        {lab.area} Team
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                  {/* Description */}
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Lab Overview
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {lab.blurb}
                    </p>
                  </div>

                  {/* Tags */}
                  <div>
                    <h3 className="font-semibold mb-3">Technologies & Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {lab.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-medium mb-2">Focus Area</h4>
                      <p className="text-sm text-muted-foreground">
                        {lab.area === 'Red' ? 'Offensive Security & Penetration Testing' :
                         lab.area === 'Blue' ? 'Defensive Security & Incident Response' :
                         'General Cybersecurity Research'}
                      </p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-medium mb-2">Complexity</h4>
                      <p className="text-sm text-muted-foreground">
                        {lab.featured ? 'Advanced - Featured Project' : 'Intermediate Level'}
                      </p>
                    </div>
                  </div>

                  {/* Skills Gained */}
                  <div>
                    <h3 className="font-semibold mb-3">Skills & Learning Outcomes</h3>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                      <p className="text-sm text-muted-foreground">
                        This lab provided hands-on experience with {lab.tags.join(', ')} and enhanced 
                        understanding of {lab.area === 'Red' ? 'attack vectors and exploitation techniques' : 
                        'detection methods and defensive strategies'}.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between">
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Part of ongoing cybersecurity research
                  </div>
                  
                  <div className="flex gap-2">
                    {lab.link && (
                      <Button size="sm" asChild>
                        <a 
                          href={lab.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </a>
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={onClose}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}
