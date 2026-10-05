import { Reveal } from '@/components/ui/Reveal'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { portfolio } from '@/data/portfolio'

const statColors = ['text-accent', 'text-accent-2', 'text-accent-3']

export function About() {
  const { about, hero } = portfolio
  const [paragraphA, paragraphB] = about.paragraphs.slice(1)

  return (
    <section id="about" aria-label={about.heading} className="py-16">
      <Container>
        <SectionHeading title={about.heading} />

        <div className="grid gap-5 lg:grid-cols-4 lg:grid-rows-2">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <SpotlightCard className="h-full border-accent/15 bg-gradient-to-br from-accent/5 to-transparent">
              <div className="flex h-full flex-col p-7">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {hero.name} — {hero.title}
                </span>
                <p className="mt-4 text-lg leading-relaxed text-text">{about.paragraphs[0]}</p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-2">
            <SpotlightCard className="h-full">
              <p className="p-6 leading-relaxed text-text-muted">{paragraphA}</p>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-2">
            <SpotlightCard className="h-full">
              <p className="p-6 leading-relaxed text-text-muted">{paragraphB}</p>
            </SpotlightCard>
          </Reveal>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {about.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.24 + i * 0.06}>
              <SpotlightCard>
                <p className="p-6">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-text-faint">
                    {stat.label}
                  </span>
                  <span
                    className={`mt-1 block text-3xl font-bold ${statColors[i % statColors.length]}`}
                  >
                    {stat.value}
                  </span>
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
