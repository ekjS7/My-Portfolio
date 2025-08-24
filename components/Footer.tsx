import Link from 'next/link'
import { Heart } from 'lucide-react'
import config from '@/siteconfig'
import SocialLinks from '@/components/SocialLinks'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass" style={{
      borderTop: '1px solid rgba(57, 255, 20, 0.3)',
      background: 'rgba(17, 17, 17, 0.8)'
    }}>
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 font-bold text-xl hover:text-neonGreen transition-colors w-fit group"
            >
              <span className="font-mono text-neonGreen group-hover:animate-neon-flicker">{'<'}</span>
              <span className="font-mono text-hackerGray group-hover:text-neonCyan transition-colors">
                {config.name.split(' ')[0]}
              </span>
              <span className="font-mono text-neonGreen group-hover:animate-neon-flicker">{'./>'}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              {config.summary}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold font-mono text-hackerGray">
              <span className="text-neonGreen">&gt; </span>Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {config.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-hackerGray/70 hover:text-neonGreen transition-colors w-fit font-mono"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold font-mono text-hackerGray">
              <span className="text-neonGreen">&gt; </span>Connect
            </h3>
            <SocialLinks />
            <div className="pt-4">
              <p className="text-sm text-hackerGray/70 font-mono">
                <a 
                  href={`mailto:${config.email}`}
                  className="hover:text-neonGreen transition-colors"
                >
                  {config.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" 
             style={{ borderTop: '1px solid rgba(57, 255, 20, 0.3)' }}>
          <p className="text-sm text-hackerGray/70 flex items-center gap-1 font-mono">
            <span className="text-neonGreen">&copy;</span> {currentYear} {config.name}. Made with
            <Heart className="h-3 w-3 text-red-400 fill-current animate-pulse" />
            using Next.js & TypeScript
          </p>
          <div className="flex items-center gap-4 text-xs text-hackerGray/70 font-mono">
            <Link href="/privacy" className="hover:text-neonGreen transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-neonGreen transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
