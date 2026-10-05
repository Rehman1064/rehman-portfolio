/** Fixed, static backdrop: a faint brand-blue glow behind the hero, nothing else competing for attention. */
export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg" aria-hidden="true">
      <div className="absolute left-1/2 top-[-12%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
      <div className="absolute inset-x-0 top-0 h-[520px] bg-grid bg-grid-fade opacity-60" />
    </div>
  )
}
