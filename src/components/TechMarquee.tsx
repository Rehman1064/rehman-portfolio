import { portfolio } from '@/data/portfolio'

const allSkills = portfolio.skills.flatMap((group) => group.skills)

/** Infinite scrolling strip of every tool/language, purely decorative and skimmable at a glance. */
export function TechMarquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-border bg-bg-elevated/60 py-5"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="animate-marquee flex w-max gap-10">
        {[...allSkills, ...allSkills].map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="font-mono text-sm tracking-wide text-text-faint"
          >
            {skill}
            <span className="ml-10 text-accent-3/50">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
