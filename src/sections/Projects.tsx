import { ExternalLink } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { portfolio, type Project } from '@/data/portfolio'
import { cn } from '@/lib/utils'

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <SpotlightCard className="group" tilt>
        <article className="flex h-full flex-col">
          <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              width={900}
              height={600}
              className={cn(
                'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105',
                project.imageFocus === 'top' && 'object-top',
                project.imageFocus === 'bottom' && 'object-bottom',
              )}
            />
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <h3 className="text-lg font-bold text-text">{project.title}</h3>
              {project.featured && (
                <span className="rounded-full bg-gradient-to-r from-accent to-accent-3 px-2.5 py-1 text-[11px] font-semibold text-white">
                  Featured
                </span>
              )}
            </div>
            <p className="mt-2 flex-1 text-sm text-text-muted">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-3"
                  >
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </article>
      </SpotlightCard>
    </Reveal>
  )
}

export function Projects() {
  const { projects } = portfolio
  const tags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags))), [projects])
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const filtered = activeTag ? projects.filter((p) => p.tags.includes(activeTag)) : projects

  return (
    <section id="projects" aria-label="Projects" className="py-16">
      <Container>
        <SectionHeading
          title="Projects"
          description="A few things I've built — filter by tag to narrow it down."
        />

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by tag">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            aria-pressed={activeTag === null}
            className={cn(
              'focus-ring rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors',
              activeTag === null
                ? 'border-accent/40 bg-surface text-text shadow-[0_1px_2px_rgba(0,0,0,0.3)]'
                : 'border-border text-text-muted hover:border-border-hover hover:text-text',
            )}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
              className={cn(
                'focus-ring rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors',
                activeTag === tag
                  ? 'border-accent/40 bg-surface text-text shadow-[0_1px_2px_rgba(0,0,0,0.3)]'
                  : 'border-border text-text-muted hover:border-border-hover hover:text-text',
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={(i % 2) * 0.08} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-text-faint">
            No projects tagged "{activeTag}" yet.
          </p>
        )}
      </Container>
    </section>
  )
}
