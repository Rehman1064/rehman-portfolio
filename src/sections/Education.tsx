import { GraduationCap, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { portfolio } from '@/data/portfolio'

export function Education() {
  const { education } = portfolio

  return (
    <section id="education" aria-label="Education" className="py-16">
      <Container>
        <SectionHeading title="Education" description="Where the foundations came from." />

        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((entry, i) => (
            <Reveal key={entry.degree} delay={i * 0.08}>
              <SpotlightCard className="h-full">
                <div className="p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-text">{entry.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{entry.school}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-faint">
                    <span>
                      {entry.start} — {entry.end}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {entry.location}
                    </span>
                  </div>
                  <span className="mt-4 inline-flex rounded-md border border-border bg-bg-elevated px-3 py-1.5 text-sm font-medium text-text-muted">
                    {entry.detail}
                  </span>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
