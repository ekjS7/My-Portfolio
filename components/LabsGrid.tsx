'use client'

import { useState, useMemo } from 'react'

import { Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import LabCard from '@/components/LabCard'
import type { Lab } from '@/siteconfig'

interface LabsGridProps {
  labs: Lab[]
}

export default function LabsGrid({ labs }: LabsGridProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Red' | 'Blue' | 'Featured'>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filters: Array<{ label: string; value: 'All' | 'Red' | 'Blue' | 'Featured' }> = [
    { label: 'All', value: 'All' },
    { label: 'Red Team', value: 'Red' },
    { label: 'Blue Team', value: 'Blue' },
    { label: 'Featured', value: 'Featured' },
  ]

  const filteredLabs = useMemo(() => {
    let filtered = labs

    // Apply category filter
    if (activeFilter === 'Red') {
      filtered = filtered.filter(lab => lab.area === 'Red')
    } else if (activeFilter === 'Blue') {
      filtered = filtered.filter(lab => lab.area === 'Blue')
    } else if (activeFilter === 'Featured') {
      filtered = filtered.filter(lab => lab.featured)
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(lab => 
        lab.title.toLowerCase().includes(query) ||
        lab.blurb.toLowerCase().includes(query) ||
        lab.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [labs, activeFilter, searchQuery])



  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search labs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/20 
                     text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 
                     focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-4 w-4 text-muted-foreground" />
          {filters.map((filter) => (
            <Button
              key={filter.value}
              size="sm"
              variant={activeFilter === filter.value ? "default" : "ghost"}
              onClick={() => setActiveFilter(filter.value)}
              className="transition-all"
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>Showing {filteredLabs.length} of {labs.length} labs</span>
        {activeFilter !== 'All' && (
          <Badge variant="secondary" className="text-xs">
            {activeFilter} Filter Active
          </Badge>
        )}
        {searchQuery && (
          <Badge variant="outline" className="text-xs">
            Search: "{searchQuery}"
          </Badge>
        )}
      </div>

      {/* Grid */}
      {filteredLabs.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredLabs.map((lab, index) => (
            <div
              key={lab.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <LabCard lab={lab} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 animate-fade-in">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No labs found</h3>
              <p className="text-muted-foreground text-sm">
                No labs match your current search criteria. Try adjusting your filters or search terms.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setActiveFilter('All')
                  setSearchQuery('')
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
        </div>
      )}
    </div>
  )
}
