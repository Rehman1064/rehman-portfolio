import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { portfolio } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export function Experience() {
  const { experience } = portfolio
  const [activeIndex, setActiveIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const active = experience[activeIndex]

  return (
    <section id="experience" aria-label="Experience" className="py-16">
      <Container>
        <SectionHeading
          title="Experience"
          description="Click a role to see what I actually did there."
        />

        <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
          <Reveal>
            <div
              role="tablist"
              aria-label="Experience roles"
              className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
            >
              {experience.map((entry, i) => (
                <button
                  key={`${entry.company}-${entry.role}`}
                  role="tab"
                  type="button"
                  id={`experience-tab-${i}`}
                  aria-selected={activeIndex === i}
                  aria-controls="experience-panel"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    'focus-ring shrink-0 rounded-lg border px-4 py-3 text-left transition-colors',
                    activeIndex === i
                      ? 'border-accent/40 bg-surface text-text shadow-[0_1px_2px_rgba(0,0,0,0.3)]'
                      : 'border-border text-text-muted hover:border-border-hover hover:text-text',
                  )}
                >
                  <span className="block text-xs font-medium text-text-faint">
                    {entry.start} — {entry.end}
                  </span>
                  <span className="mt-1 block text-sm font-semibold">{entry.company}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SpotlightCard className="h-full">
              <div
                id="experience-panel"
                role="tabpanel"
                aria-labelledby={`experience-tab-${activeIndex}`}
                className="relative overflow-hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeIndex}
                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6"
                  >
                    <h3 className="text-lg font-bold text-text">{active.role}</h3>
                    <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                      <span className="flex items-center gap-1.5 font-semibold text-accent">
                        <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                        {active.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-text-faint">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {active.location}
                      </span>
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {active.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 24)} className="flex gap-3 text-text-muted">
                          <span
                            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-text-faint"
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
