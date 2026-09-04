import { Suspense, lazy, useEffect } from 'react'
import { Footer } from '@/components/Footer'
import { GridBackground } from '@/components/GridBackground'
import { Nav } from '@/components/Nav'
import { ScrollProgress } from '@/components/ScrollProgress'
import { ScrollToTop } from '@/components/ScrollToTop'
import { TechMarquee } from '@/components/TechMarquee'
import { portfolio } from '@/data/portfolio'
import { About } from '@/sections/About'
import { Education } from '@/sections/Education'
import { Hero } from '@/sections/Hero'
import { Skills } from '@/sections/Skills'

const Experience = lazy(() =>
  import('@/sections/Experience').then((m) => ({ default: m.Experience })),
)
const Projects = lazy(() => import('@/sections/Projects').then((m) => ({ default: m.Projects })))
const Contact = lazy(() => import('@/sections/Contact').then((m) => ({ default: m.Contact })))

function SectionFallback() {
  return (
    <div className="flex justify-center py-28">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent"
        role="status"
        aria-label="Loading section"
      />
    </div>
  )
}

function App() {
  useEffect(() => {
    document.title = portfolio.meta.siteTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', portfolio.meta.siteDescription)
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-accent px-4 py-2 font-mono text-sm text-bg transition-transform focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      <GridBackground />
      <ScrollProgress />
      <Nav />

      <main id="main-content">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Education />
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
