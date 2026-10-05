import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { portfolio } from '@/data/portfolio'

const iconMap = { github: FaGithub, linkedin: FaLinkedin, email: Mail, twitter: FaXTwitter }

export function Contact() {
  const { contact, social } = portfolio
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — the mailto button still works.
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="py-16">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 bg-grid opacity-40"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent/15 to-accent-3/15 blur-[100px]"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent-2/30 bg-accent-2/10 px-4 py-1.5 text-xs font-semibold text-accent-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse-slow" aria-hidden="true" />
              {contact.availability}
            </p>
            <h2 className="text-gradient mx-auto mt-6 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              {contact.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-text-muted">{contact.description}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={`mailto:${contact.email}`}>
                {contact.email}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="focus-ring inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent/50 hover:bg-bg-elevated"
              >
                {copied ? (
                  <>
                    Copied
                    <Check className="h-4 w-4 text-accent-2" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Copy email
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-faint">
              <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="focus-ring inline-flex items-center gap-1.5 hover:text-text">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {contact.phone}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {contact.location}
              </span>
            </div>

            <div className="mt-8 flex items-center justify-center gap-5">
              {social.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring text-text-muted transition-colors hover:text-accent"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
