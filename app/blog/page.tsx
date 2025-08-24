import { generateSEOMetadata } from '@/lib/seo'
import config from '@/siteconfig'
import Section from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = generateSEOMetadata({
  title: `Blog - ${config.name}`,
  description: `Read ${config.name}'s latest thoughts on cybersecurity, lab write-ups, and security research insights.`,
  path: '/blog',
})

// Mock blog posts - in a real implementation, these would come from a CMS or markdown files
const blogPosts = [
  {
    slug: 'hello-world',
    title: 'Welcome to My Cybersecurity Journey',
    description: 'An introduction to my cybersecurity learning path and this portfolio website',
    date: '2024-01-15',
    readTime: '3 min read',
    tags: ['cybersecurity', 'learning', 'portfolio'],
    featured: true,
  },
  {
    slug: 'red-team-methodology',
    title: 'My Red Team Learning Methodology',
    description: 'How I approach offensive security learning through practical labs and structured practice',
    date: '2024-01-10',
    readTime: '5 min read',
    tags: ['red-team', 'methodology', 'learning'],
    featured: false,
  },
  {
    slug: 'blue-team-detection-engineering',
    title: 'Building Detection Capabilities: A Blue Team Perspective',
    description: 'Insights from building and tuning security monitoring and detection systems',
    date: '2024-01-05',
    readTime: '7 min read',
    tags: ['blue-team', 'detection', 'monitoring'],
    featured: false,
  },
]

export default function BlogPage() {
  if (!config.features.blog) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Coming Soon</h1>
          <p className="text-muted-foreground">Blog functionality is currently disabled.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <Section>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Security <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Insights from my cybersecurity journey, lab write-ups, and security research. 
                Documenting lessons learned from both Red Team and Blue Team perspectives.
              </p>
            </div>

            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <Card key={post.slug} className="floating-card">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </time>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                          {post.featured && (
                            <Badge variant="secondary" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        
                        <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {post.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {blogPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
                <p className="text-muted-foreground text-sm">
                  Blog posts will appear here as they are published.
                </p>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  )
}
