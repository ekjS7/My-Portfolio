'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import config from '@/siteconfig'
import { cn } from '@/lib/utils'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActiveRoute = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "glass border-b shadow-lg" 
            : "bg-transparent"
        )}
        style={isScrolled ? {
          background: 'rgba(17, 17, 17, 0.9)',
          borderBottom: '1px solid rgba(57, 255, 20, 0.3)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 10px rgba(57, 255, 20, 0.1)'
        } : {}}
      >
        <nav className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 font-bold text-xl hover:text-neonGreen transition-colors group"
            >
              <span className="font-mono text-neonGreen group-hover:animate-neon-flicker">{'<'}</span>
              <span className="font-mono text-hackerGray group-hover:text-neonCyan transition-colors">
                {config.name.split(' ')[0]}
              </span>
              <span className="font-mono text-neonGreen group-hover:animate-neon-flicker">{'./>'}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {config.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium font-mono transition-all duration-300 hover:text-neonGreen relative group",
                    isActiveRoute(item.href)
                      ? "text-neonGreen" 
                      : "text-hackerGray"
                  )}
                >
                  <span className="group-hover:text-shadow-neon transition-all">
                    {isActiveRoute(item.href) && <span className="text-neonGreen">&gt; </span>}
                    {item.label}
                  </span>
                  {isActiveRoute(item.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neonGreen rounded-full shadow-neon-green animate-glow-pulse" />
                  )}
                  <span className={cn(
                    "absolute -bottom-1 left-0 right-0 h-0.5 bg-neonGreen rounded-full shadow-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                    isActiveRoute(item.href) && "hidden"
                  )} />
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {config.features.cv && (
                <Button asChild size="sm">
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    Download CV
                  </a>
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 glass shadow-lg" style={{
            background: 'rgba(17, 17, 17, 0.95)',
            borderBottom: '1px solid rgba(57, 255, 20, 0.3)'
          }}>
            <div className="container py-6">
              <div className="flex flex-col space-y-4">
                {config.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium font-mono transition-colors hover:text-neonGreen px-2 py-1 rounded-md",
                      isActiveRoute(item.href)
                        ? "text-neonGreen neon-border" 
                        : "text-hackerGray"
                    )}
                    onClick={() => setIsOpen(false)}
                    style={isActiveRoute(item.href) ? {
                      background: 'rgba(57, 255, 20, 0.1)'
                    } : {}}
                  >
                    {isActiveRoute(item.href) && <span className="text-neonGreen">&gt; </span>}
                    {item.label}
                  </Link>
                ))}
                {config.features.cv && (
                  <div className="pt-4" style={{ borderTop: '1px solid rgba(57, 255, 20, 0.3)' }}>
                    <Button asChild className="w-full">
                      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                        Download CV
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
