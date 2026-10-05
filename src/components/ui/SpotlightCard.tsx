import type { ReactNode } from 'react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  /** Adds a subtle 3D tilt that follows the cursor, on top of the spotlight glow. */
  tilt?: boolean
}

const MAX_TILT_DEG = 6

/**
 * Card wrapper with a mouse-tracked radial glow (and optional 3D tilt).
 * Position/rotation are written straight to the node's style (no re-render)
 * for cheap, smooth motion, and reset on mouse leave.
 */
export function SpotlightCard({ children, className, tilt = false }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--spot-x', `${x}px`)
    el.style.setProperty('--spot-y', `${y}px`)

    if (tilt && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const px = x / rect.width - 0.5
      const py = y / rect.height - 0.5
      el.style.transform = `perspective(800px) rotateX(${(-py * MAX_TILT_DEG).toFixed(2)}deg) rotateY(${(px * MAX_TILT_DEG).toFixed(2)}deg)`
    }
  }

  const handleMouseLeave = () => {
    if (ref.current && tilt) {
      ref.current.style.transform = ''
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group/spot relative overflow-hidden rounded-xl border border-border bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-[border-color,box-shadow,transform] duration-300 hover:border-border-hover hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)]',
        tilt && 'will-change-transform',
        className,
      )}
      style={tilt ? { transformStyle: 'preserve-3d' } : undefined}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            'radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), var(--color-accent-soft), transparent 70%)',
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}
