'use client'

import { useState } from 'react'

import { ExternalLink, Eye } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import LabModal from '@/components/LabModal'
import { getAreaColor, getAreaIcon } from '@/lib/utils'
import type { Lab } from '@/siteconfig'

interface LabCardProps {
  lab: Lab
}

export default function LabCard({ lab }: LabCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="transform transition-transform duration-200 hover:scale-102">
        <Card className="floating-card h-full cursor-pointer group" onClick={() => setIsModalOpen(true)}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">{getAreaIcon(lab.area)}</span>
                <Badge 
                  className={`text-xs ${getAreaColor(lab.area)}`}
                  variant="outline"
                >
                  {lab.area} Team
                </Badge>
              </div>
              {lab.featured && (
                <Badge variant="secondary" className="text-xs">
                  Featured
                </Badge>
              )}
            </div>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {lab.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4 overflow-hidden" 
               style={{
                 display: '-webkit-box',
                 WebkitLineClamp: 3,
                 WebkitBoxOrient: 'vertical' as any,
               } as React.CSSProperties}>
              {lab.blurb}
            </p>

            <div className="flex flex-wrap gap-1 mb-4">
              {lab.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {lab.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{lab.tags.length - 3} more
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <Button
                size="sm"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsModalOpen(true)
                }}
                className="flex-1"
              >
                <Eye className="h-3 w-3" />
                View Details
              </Button>
              {lab.link && (
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  onClick={(e) => e.stopPropagation()}
                >
                  <a 
                    href={lab.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <LabModal 
        lab={lab} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
