import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { Container } from '@/components/ui/Container'
import { portfolio } from '@/data/portfolio'

const iconMap = { github: FaGithub, linkedin: FaLinkedin, email: Mail, twitter: FaXTwitter }

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-xs text-text-faint">
          © {new Date().getFullYear()} {portfolio.hero.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {portfolio.social.map((link) => {
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
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </Container>
    </footer>
  )
}
