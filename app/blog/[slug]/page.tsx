import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { generateSEOMetadata } from '@/lib/seo'
import config from '@/siteconfig'
import Section from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

// Mock blog post data - in a real implementation, this would come from a CMS or markdown files
const getBlogPost = (slug: string) => {
  const posts = {
    'hello-world': {
      title: 'Welcome to My Cybersecurity Journey',
      description: 'An introduction to my cybersecurity learning path and this portfolio website',
      date: '2024-01-15',
      readTime: '3 min read',
      tags: ['cybersecurity', 'learning', 'portfolio'],
      content: `
        <p>Hello and welcome to my cybersecurity portfolio! I'm excited to share my journey through the fascinating world of information security, where I explore both the offensive and defensive sides of cybersecurity.</p>
        
        <h2>About This Portfolio</h2>
        <p>This website serves as a showcase of my hands-on cybersecurity experience, featuring:</p>
        <ul>
          <li><strong>Red Team Labs</strong>: Offensive security research and penetration testing exercises</li>
          <li><strong>Blue Team Projects</strong>: Defensive security implementations and incident response scenarios</li>
          <li><strong>Core Skills</strong>: Fundamental technologies and methodologies I've mastered</li>
          <li><strong>Learning Documentation</strong>: Insights and knowledge gained through practical application</li>
        </ul>
        
        <h2>My Learning Philosophy</h2>
        <p>I believe in <strong>learning by doing</strong>. Each lab and project represents real hands-on experience rather than just theoretical knowledge.</p>
        
        <p>Thank you for visiting, and I hope you find my work valuable and inspiring!</p>
      `,
    },
  }
  
  return posts[slug as keyof typeof posts] || null
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return generateSEOMetadata({
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
      path: `/blog/${params.slug}`,
    })
  }

  return generateSEOMetadata({
    title: `${post.title} - ${config.name}`,
    description: post.description,
    path: `/blog/${params.slug}`,
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  if (!config.features.blog) {
    notFound()
  }

  const post = getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      <Section>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/blog" className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            {/* Article Header */}
            <article className="space-y-8">
              <header className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </header>

              {/* Article Content */}
              <div 
                className="max-w-none text-muted-foreground leading-relaxed space-y-4
                           [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-foreground [&>h1]:mb-4
                           [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h2]:mb-3 [&>h2]:mt-8
                           [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mb-2 [&>h3]:mt-6
                           [&>p]:mb-4 [&>p]:leading-relaxed
                           [&>ul]:mb-4 [&>ul]:pl-6 [&>ul]:list-disc
                           [&>ol]:mb-4 [&>ol]:pl-6 [&>ol]:list-decimal
                           [&>li]:mb-1
                           [&>strong]:text-foreground [&>strong]:font-semibold
                           [&>code]:bg-muted [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm
                           [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Article Footer */}
              <footer className="pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-sm text-muted-foreground">
                    Written by <span className="text-foreground font-medium">{config.name}</span>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/contact">
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </Section>
    </div>
  )
}
