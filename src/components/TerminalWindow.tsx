import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TerminalWindowProps {
  title?: string
  className?: string
  children: ReactNode
}

/** Mac-style terminal chrome used to present short bits of copy with engineering flavor. */
export function TerminalWindow({ title, className, children }: TerminalWindowProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-2xl shadow-black/40',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-accent-3/70" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-accent-4/70" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-accent-2/70" aria-hidden="true" />
        {title ? <span className="ml-2 font-mono text-xs text-text-faint">{title}</span> : null}
      </div>
      <div className="space-y-3 p-5 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  )
}
