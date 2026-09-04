import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { NodeGraph, WebDevNodeGraph } from '@/components/NodeGraph'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { portfolio } from '@/data/portfolio'
import { useTypewriter } from '@/hooks/useTypewriter'

const MAX_AVATAR_TILT_DEG = 10

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const avatarRef = useRef<HTMLDivElement>(null)
  const { hero } = portfolio
  const typedRole = useTypewriter(hero.roles ?? [hero.title])
  const displayedTitle = prefersReducedMotion ? hero.title : typedRole

  const handleAvatarMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = avatarRef.current
    if (!el || prefersReducedMotion) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(600px) rotateX(${(-py * MAX_AVATAR_TILT_DEG).toFixed(2)}deg) rotateY(${(px * MAX_AVATAR_TILT_DEG).toFixed(2)}deg)`
  }

  const handleAvatarLeave = () => {
    if (avatarRef.current) avatarRef.current.style.transform = ''
  }

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center pt-16"
    >
      <Container className="grid items-center gap-16 py-20 lg:grid-cols-2 lg:py-0">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            ref={avatarRef}
            onMouseMove={handleAvatarMove}
            onMouseLeave={handleAvatarLeave}
            className="relative mb-8 h-20 w-20 shrink-0 will-change-transform"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent to-accent-3 opacity-70 blur-md" />
            <img
              src={hero.avatar}
              alt={`Portrait of ${hero.name}`}
              width={80}
              height={80}
              className="relative h-20 w-20 rounded-2xl border border-border object-cover"
            />
            <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-bg bg-accent-3">
              <span className="sr-only">Available for work</span>
            </span>
          </div>

          <h1 className="text-gradient animate-gradient-x bg-[length:200%_auto] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {hero.name}
          </h1>
          <p className="mt-3 font-mono text-lg text-text sm:text-xl" aria-live="off">
            {displayedTitle}
            <span className="animate-blink text-accent-2" aria-hidden="true">
              _
            </span>
            <span className="sr-only">{hero.title}</span>
          </p>
          <p className="mt-6 max-w-lg text-lg text-text-muted">{hero.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <NodeGraph />
          <WebDevNodeGraph />
        </motion.div>
      </Container>
    </section>
  )
}
