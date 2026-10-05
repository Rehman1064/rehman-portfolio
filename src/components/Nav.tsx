import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { portfolio } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

const sectionIds = portfolio.nav.map((link) => link.href.replace('#', ''))

export function Nav() {
  const activeId = useActiveSection(sectionIds)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          aria-label="Scroll to top"
          className="focus-ring text-base font-bold tracking-tight text-text"
        >
          {portfolio.hero.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {portfolio.nav.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'focus-ring relative rounded-md px-4 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-text' : 'text-text-muted hover:text-text',
                )}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                )}
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="focus-ring rounded-md p-2 text-text md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Primary mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-surface md:hidden"
          >
            <Container className="flex flex-col py-3">
              {portfolio.nav.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeId === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'focus-ring rounded-md px-2 py-3 text-sm font-medium',
                      isActive ? 'text-accent' : 'text-text-muted',
                    )}
                  >
                    {link.label}
                  </a>
                )
              })}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
