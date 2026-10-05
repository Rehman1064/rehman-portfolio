import { Boxes, Cloud, Code2, Database, Globe, Users } from 'lucide-react'
import type { ComponentType } from 'react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { portfolio } from '@/data/portfolio'

const groupIcons: Record<string, ComponentType<{ className?: string }>> = {
  python: Code2,
  languages: Boxes,
  web: Globe,
  databases: Database,
  data: Cloud,
  soft: Users,
}

const groupColorCycle = [
  { icon: 'text-accent', iconBg: 'bg-accent/10' },
  { icon: 'text-accent-2', iconBg: 'bg-accent-2/10' },
  { icon: 'text-accent-3', iconBg: 'bg-accent-3/10' },
  { icon: 'text-accent-4', iconBg: 'bg-accent-4/10' },
]

export function Skills() {
  const { skills } = portfolio

  return (
    <section id="skills" aria-label="Skills" className="py-16">
      <Container>
        <SectionHeading
          title="Skills"
          description="The languages, frameworks, and tools I reach for — from scraping the web to shipping a full-stack app."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, i) => {
            const Icon = groupIcons[group.id] ?? Code2
            const colors = groupColorCycle[i % groupColorCycle.length]
            return (
              <Reveal key={group.id} delay={i * 0.08}>
                <SpotlightCard className="group h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${colors.iconBg} ${colors.icon}`}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-text">
                        {group.label}
                      </h3>
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md border border-border bg-bg-elevated px-3 py-1.5 text-sm font-medium text-text-muted transition-colors group-hover:text-text"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
