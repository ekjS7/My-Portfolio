import { generateSEOMetadata } from '@/lib/seo'
import config from '@/siteconfig'
import Section from '@/components/ui/Section'
import ContactForm from '@/components/ContactForm'
import SocialLinks from '@/components/SocialLinks'
import { Card, CardContent } from '@/components/ui/Card'
import { Mail, MapPin, Calendar } from 'lucide-react'
import ClientWrapper from '@/components/ClientWrapper'

export const metadata = generateSEOMetadata({
  title: `Contact - ${config.name}`,
  description: `Get in touch with ${config.name} for cybersecurity opportunities, collaboration, or questions about security research.`,
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <Section>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Interested in cybersecurity collaboration, internship opportunities, or have questions 
                about my lab work? I'd love to hear from you.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="floating-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <ClientWrapper>
                    <ContactForm />
                  </ClientWrapper>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <Card className="floating-card">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <Mail className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <a 
                            href={`mailto:${config.email}`}
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {config.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/20">
                          <MapPin className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">Ho Chi Minh City, Vietnam</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <Calendar className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="font-medium">Availability</p>
                          <p className="text-muted-foreground">Open to internships & collaboration</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="floating-card">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Connect Online</h2>
                    <ClientWrapper>
                      <SocialLinks />
                    </ClientWrapper>
                    <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <p className="text-sm text-blue-400 mb-2 font-medium">
                        TryHackMe Profile
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Check out my progress and completed challenges on TryHackMe platform
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="floating-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      I typically respond to emails within 24-48 hours. For urgent matters 
                      related to security research or collaboration opportunities, please 
                      mention "URGENT" in the subject line.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
