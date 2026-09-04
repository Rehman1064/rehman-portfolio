import { motion } from 'framer-motion'
import { Award, GraduationCap, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { portfolio, type Certificate } from '@/data/portfolio'

function CertificateCard({ certificate }: { certificate: Certificate }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      aria-expanded={flipped}
      aria-label={`${certificate.title} — ${flipped ? 'hide' : 'show'} details`}
      className="focus-ring block h-full min-h-40 w-full text-left [perspective:1200px]"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 flex flex-col justify-center gap-2 rounded-xl border border-border bg-surface p-6 [backface-visibility:hidden]">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-2/10 text-accent-2">
            <Award className="h-4 w-4" aria-hidden="true" />
          </span>
          <h3 className="text-sm font-bold text-text">{certificate.title}</h3>
          <p className="font-mono text-xs text-text-faint">{certificate.issuer}</p>
          <span className="mt-auto font-mono text-[11px] text-text-faint">click to flip</span>
        </div>
        <div
          className="absolute inset-0 flex flex-col justify-center rounded-xl border border-accent-2/40 bg-surface p-6 [backface-visibility:hidden]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <p className="text-sm leading-relaxed text-text-muted">{certificate.description}</p>
        </div>
      </motion.div>
    </button>
  )
}

export function Education() {
  const { education, certificates } = portfolio

  return (
    <section id="education" aria-label="Education" className="py-16">
      <Container>
        <SectionHeading
          title="Education & Certifications"
          description="Where the foundations came from — click a certificate for details."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((entry, i) => (
            <Reveal key={entry.degree} delay={i * 0.08}>
              <SpotlightCard className="h-full">
                <div className="p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-text">{entry.degree}</h3>
                  <p className="mt-1 text-sm text-accent-2">{entry.school}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-text-faint">
                    <span>
                      {entry.start} — {entry.end}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {entry.location}
                    </span>
                  </div>
                  <span className="mt-4 inline-flex rounded-md border border-border bg-bg-elevated px-3 py-1.5 font-mono text-sm text-text-muted">
                    {entry.detail}
                  </span>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}

          {certificates.map((certificate, i) => (
            <Reveal key={certificate.title} delay={0.08 + i * 0.08}>
              <CertificateCard certificate={certificate} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
