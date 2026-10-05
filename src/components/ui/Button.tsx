import type { AnchorHTMLAttributes } from 'react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
}

const MAX_MAGNET_PX = 6

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * MAX_MAGNET_PX
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * MAX_MAGNET_PX
    el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'focus-ring inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-[box-shadow,background-color] duration-200 [transition:transform_0.15s_ease-out,box-shadow_0.2s,background-color_0.2s]',
        variant === 'primary' &&
          'bg-accent text-white shadow-[0_1px_2px_rgba(0,0,0,0.35)] hover:bg-accent-3 hover:shadow-[0_8px_24px_-6px_var(--color-accent-soft)]',
        variant === 'secondary' &&
          'border border-border bg-surface text-text hover:border-border-hover hover:bg-bg-elevated',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
