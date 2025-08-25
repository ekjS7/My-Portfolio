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
          <li><strong>Core Skills</strong>: Fundamental technologies and methodologies I've learned</li>
          <li><strong>Learning Documentation</strong>: Insights and knowledge gained through practical application</li>
        </ul>
        
        <h2>My Learning Philosophy</h2>
        <p>I believe in <strong>learning by doing</strong>. Each lab and project represents real hands-on experience rather than just theoretical knowledge.</p>
        
        <p>Thank you for visiting, and I hope you find my work valuable and inspiring!</p>
      `,
    },
    'red-team-methodology': {
      title: 'My Red Team Learning Methodology',
      description: 'How I approach offensive security learning through practical labs and structured practice',
      date: '2024-01-10',
      readTime: '5 min read',
      tags: ['red-team', 'methodology', 'learning'],
      content: `
        <p>As a cybersecurity student diving deep into offensive security, I've developed a structured methodology for learning red team techniques that combines theoretical understanding with practical application.</p>
        
        <h2>The Foundation: Understanding Before Attacking</h2>
        <p>Before attempting any offensive technique, I always start by understanding the underlying technology:</p>
        <ul>
          <li><strong>Protocol Analysis</strong>: Deep dive into how the target protocol or application works</li>
          <li><strong>Architecture Understanding</strong>: Map out the system architecture and potential attack surfaces</li>
          <li><strong>Documentation Review</strong>: Study official documentation, RFCs, and security advisories</li>
        </ul>
        
        <h2>Hands-On Learning Approach</h2>
        <p>My practical learning follows a systematic progression:</p>
        
        <h3>1. Controlled Environment Setup</h3>
        <p>Every attack technique starts in a controlled lab environment where I can:</p>
        <ul>
          <li>Set up vulnerable applications and systems safely</li>
          <li>Practice techniques without legal or ethical concerns</li>
          <li>Document the complete attack chain</li>
          <li>Understand the impact and detection possibilities</li>
        </ul>
        
        <h3>2. Tool Mastery and Custom Development</h3>
        <p>Rather than just using existing tools, I focus on:</p>
        <ul>
          <li><strong>Understanding tool internals</strong>: How does Burp Suite actually work?</li>
          <li><strong>Custom script development</strong>: Writing Python scripts for specific attack scenarios</li>
          <li><strong>Automation</strong>: Creating repeatable attack workflows</li>
        </ul>
        
        <h3>3. Real-World Application</h3>
        <p>Through platforms like TryHackMe and HackTheBox, I apply learned techniques to:</p>
        <ul>
          <li>Complex, multi-stage attack scenarios</li>
          <li>Different operating systems and environments</li>
          <li>Time-pressured situations that simulate real engagements</li>
        </ul>
        
        <h2>Current Focus Areas</h2>
        <p>My red team learning currently emphasizes:</p>
        
        <h3>🕸️ Advanced Web Application Security</h3>
        <ul>
          <li><strong>Client-Side Attacks</strong>: XSS, CSRF, DOM manipulation</li>
          <li><strong>Server-Side Vulnerabilities</strong>: SSTI, XXE, deserialization attacks</li>
          <li><strong>HTTP Protocol Attacks</strong>: Request smuggling, cache poisoning</li>
        </ul>
        
        <h3>🔍 Post-Exploitation Techniques</h3>
        <ul>
          <li><strong>Privilege Escalation</strong>: Linux and Windows techniques</li>
          <li><strong>Persistence Mechanisms</strong>: Maintaining access while avoiding detection</li>
          <li><strong>Lateral Movement</strong>: Network propagation and credential harvesting</li>
        </ul>
        
        <h2>Documentation and Knowledge Sharing</h2>
        <p>Every lab exercise includes:</p>
        <ul>
          <li><strong>Detailed Write-ups</strong>: Step-by-step documentation of the attack process</li>
          <li><strong>Defensive Insights</strong>: How the attack could be detected and prevented</li>
          <li><strong>Tool Comparisons</strong>: When to use different tools and techniques</li>
          <li><strong>Lessons Learned</strong>: What went wrong and how to improve</li>
        </ul>
        
        <h2>Ethical Considerations</h2>
        <p>Red team learning comes with responsibility:</p>
        <ul>
          <li><strong>Legal Compliance</strong>: Only testing on systems I own or have explicit permission to test</li>
          <li><strong>Responsible Disclosure</strong>: Following proper protocols when discovering real vulnerabilities</li>
          <li><strong>Defensive Mindset</strong>: Always considering how attacks can be prevented</li>
        </ul>
        
        <h2>Looking Forward</h2>
        <p>My red team journey continues to evolve with new challenges and techniques. The key is maintaining curiosity while staying grounded in ethical practice and defensive thinking.</p>
        
        <p>Remember: the goal isn't just to break things, but to understand them deeply enough to build better defenses.</p>
      `,
    },
    'blue-team-detection-engineering': {
      title: 'Building Detection Capabilities: A Blue Team Perspective',
      description: 'Insights from building and tuning security monitoring and detection systems',
      date: '2024-01-05',
      readTime: '7 min read',
      tags: ['blue-team', 'detection', 'monitoring'],
      content: `
        <p>While offensive security gets much of the attention, I've found that defensive security and detection engineering provide equally fascinating challenges. Building effective detection capabilities requires a deep understanding of both normal system behavior and attack patterns.</p>
        
        <h2>The Detection Engineering Mindset</h2>
        <p>Detection engineering isn't just about deploying tools—it's about building a systematic approach to identifying malicious activity while minimizing false positives. My approach centers on:</p>
        
        <h3>🎯 Threat-Informed Defense</h3>
        <ul>
          <li><strong>Threat Modeling</strong>: Understanding what adversaries are likely to do in your environment</li>
          <li><strong>MITRE ATT&CK Mapping</strong>: Aligning detection capabilities with known attack techniques</li>
          <li><strong>Intelligence Integration</strong>: Using threat intelligence to prioritize detection development</li>
        </ul>
        
        <h2>My Detection Development Process</h2>
        
        <h3>1. Baseline Establishment</h3>
        <p>Before detecting anomalies, you must understand normal:</p>
        <ul>
          <li><strong>Network Traffic Patterns</strong>: Using tools like TShark and Zeek to establish communication baselines</li>
          <li><strong>System Behavior</strong>: Understanding normal process execution, file access, and user activity</li>
          <li><strong>Application Logs</strong>: Identifying typical versus suspicious application behavior</li>
        </ul>
        
        <h3>2. Detection Logic Development</h3>
        <p>My detection rules follow a structured approach:</p>
        
        <h4>Signature-Based Detection</h4>
        <ul>
          <li><strong>Known Bad Indicators</strong>: File hashes, IP addresses, domain names</li>
          <li><strong>Attack Patterns</strong>: Specific command sequences or network patterns</li>
          <li><strong>Vulnerability Exploitation</strong>: Detecting known exploit attempts</li>
        </ul>
        
        <h4>Behavioral Detection</h4>
        <ul>
          <li><strong>Anomaly Detection</strong>: Identifying deviations from established baselines</li>
          <li><strong>Sequence Analysis</strong>: Detecting suspicious chains of events</li>
          <li><strong>Statistical Analysis</strong>: Using data science techniques to identify outliers</li>
        </ul>
        
        <h3>3. Testing and Tuning</h3>
        <p>Every detection rule undergoes rigorous testing:</p>
        <ul>
          <li><strong>Purple Team Exercises</strong>: Collaborating with red team activities to test detection coverage</li>
          <li><strong>Historical Data Analysis</strong>: Testing rules against historical logs to identify false positives</li>
          <li><strong>Performance Impact Assessment</strong>: Ensuring detection rules don't impact system performance</li>
        </ul>
        
        <h2>Tools and Technologies</h2>
        
        <h3>Network Analysis</h3>
        <ul>
          <li><strong>Wireshark & TShark</strong>: Deep packet inspection and analysis</li>
          <li><strong>Zeek (formerly Bro)</strong>: Network security monitoring and analysis</li>
          <li><strong>Suricata</strong>: High-performance network IDS/IPS</li>
        </ul>
        
        <h3>Log Analysis and SIEM</h3>
        <ul>
          <li><strong>Splunk</strong>: Advanced log analysis and correlation</li>
          <li><strong>Elastic Stack</strong>: Log aggregation, analysis, and visualization</li>
          <li><strong>Custom Python Scripts</strong>: Specialized analysis and automation</li>
        </ul>
        
        <h2>Real-World Lab Scenarios</h2>
        
        <h3>Friday Overtime Challenge</h3>
        <p>In this TryHackMe lab, I analyzed network traffic to identify:</p>
        <ul>
          <li>Suspicious network connections indicating potential data exfiltration</li>
          <li>Malware communication patterns</li>
          <li>Timeline reconstruction of the attack</li>
        </ul>
        
        <h3>Summit Cloud Security Lab</h3>
        <p>Cloud-focused detection engineering where I:</p>
        <ul>
          <li>Configured AWS CloudTrail and VPC Flow Logs</li>
          <li>Built detection rules for suspicious API calls</li>
          <li>Implemented automated response mechanisms</li>
        </ul>
        
        <h2>Detection Engineering Challenges</h2>
        
        <h3>The False Positive Problem</h3>
        <p>The biggest challenge in detection engineering is balancing sensitivity with specificity:</p>
        <ul>
          <li><strong>Context Awareness</strong>: Understanding business processes to reduce false positives</li>
          <li><strong>Tuning Methodologies</strong>: Systematic approaches to rule refinement</li>
          <li><strong>User Feedback Loops</strong>: Incorporating analyst feedback to improve detection quality</li>
        </ul>
        
        <h3>Scale and Performance</h3>
        <ul>
          <li><strong>Data Volume Management</strong>: Handling large volumes of security data efficiently</li>
          <li><strong>Real-Time Processing</strong>: Balancing detection speed with accuracy</li>
          <li><strong>Resource Optimization</strong>: Ensuring detection systems don't overwhelm infrastructure</li>
        </ul>
        
        <h2>Incident Response Integration</h2>
        <p>Detection is only valuable if it enables effective response:</p>
        
        <ul>
          <li><strong>Playbook Development</strong>: Creating standardized response procedures</li>
          <li><strong>Evidence Preservation</strong>: Ensuring detection systems preserve forensic evidence</li>
          <li><strong>Threat Hunting Integration</strong>: Using detection gaps to inform proactive hunting</li>
        </ul>
        
        <h2>Continuous Improvement</h2>
        <p>Detection engineering is an iterative process:</p>
        
        <ul>
          <li><strong>Metrics and KPIs</strong>: Measuring detection effectiveness and coverage</li>
          <li><strong>Gap Analysis</strong>: Identifying blind spots in detection capabilities</li>
          <li><strong>Threat Evolution Tracking</strong>: Adapting detection as threats evolve</li>
        </ul>
        
        <h2>The Blue Team Advantage</h2>
        <p>Working in blue team roles has taught me that defense is not reactive—it's proactive, intelligent, and creative. The best defenders think like attackers but build like engineers.</p>
        
        <p>Understanding both offensive and defensive perspectives makes for stronger security professionals. Every red team technique I learn informs better blue team detection, and every detection gap I identify suggests new red team research directions.</p>
        
        <h2>Future Directions</h2>
        <p>My blue team journey continues to explore:</p>
        <ul>
          <li><strong>Machine Learning Applications</strong>: Using ML for advanced threat detection</li>
          <li><strong>Cloud-Native Security</strong>: Adapting detection engineering for cloud environments</li>
          <li><strong>Threat Intelligence Integration</strong>: Leveraging external threat data for better detection</li>
        </ul>
        
        <p>The ultimate goal? Building detection systems that are fast, accurate, and enable teams to respond effectively to real threats while maintaining operational efficiency.</p>
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
