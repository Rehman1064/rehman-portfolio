import { useScrollProgress } from '@/hooks/useScrollProgress'

/** Thin gradient bar pinned to the very top, filling as the reader scrolls down the page. */
export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-accent via-accent-2 to-accent-3 transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
