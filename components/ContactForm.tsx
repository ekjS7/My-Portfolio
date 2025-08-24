'use client'

import { useState } from 'react'

import { Send, Mail, MessageSquare, User } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { generateEmailUrl } from '@/lib/utils'
import config from '@/siteconfig'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = `Portfolio Contact: ${formData.subject}`
    const body = `Hi ${config.name.split(' ')[0]},

${formData.message}

Best regards,
${formData.name}
${formData.email}`

    const emailUrl = generateEmailUrl(config.email, subject, body)
    window.location.href = emailUrl
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
          <User className="h-4 w-4" />
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                   transition-all placeholder-muted-foreground"
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                   transition-all placeholder-muted-foreground"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                   transition-all placeholder-muted-foreground"
          placeholder="Cybersecurity Internship Opportunity"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                   transition-all placeholder-muted-foreground resize-vertical"
          placeholder="Hi! I'm interested in discussing cybersecurity opportunities..."
        />
      </div>

      {/* Submit Button */}
      <div className="transform transition-transform duration-200 hover:scale-102 active:scale-98">
        <Button
          type="submit"
          disabled={!isFormValid}
          className="w-full"
          size="lg"
        >
          <Send className="h-4 w-4" />
          Send Message
        </Button>
      </div>

      {/* Note */}
      <p className="text-xs text-muted-foreground text-center">
        This form will open your default email client. Alternatively, you can email me directly at{' '}
        <a 
          href={`mailto:${config.email}`}
          className="text-primary hover:underline"
        >
          {config.email}
        </a>
      </p>
    </form>
  )
}
