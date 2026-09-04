/** Decorative fixed grid + drifting aurora-gradient backdrop, sits behind all page content. */
export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg" aria-hidden="true">
      <div className="absolute left-[-10%] top-[-15%] h-[600px] w-[700px] animate-drift-a rounded-full bg-accent/20 blur-[130px]" />
      <div className="absolute right-[-15%] top-[10%] h-[500px] w-[550px] animate-drift-b rounded-full bg-accent-2/20 blur-[130px]" />
      <div className="absolute bottom-[-20%] left-[20%] h-[520px] w-[600px] animate-drift-c rounded-full bg-accent-3/15 blur-[130px]" />
      <div className="absolute inset-0 bg-grid bg-grid-fade" />
      <div className="absolute inset-0 bg-noise" />
    </div>
  )
}
