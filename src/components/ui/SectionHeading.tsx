import { Reveal } from '@/components/ui/Reveal'

interface SectionHeadingProps {
  title: string
  description?: string
}

/** Accent rule + title + description heading used at the top of every section. */
export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-8 max-w-2xl">
      <span className="block h-1 w-10 rounded-full bg-accent" aria-hidden="true" />
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-text-muted">{description}</p> : null}
    </Reveal>
  )
}
