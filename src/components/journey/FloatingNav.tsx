import { useEffect, useState } from 'react'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import type { Milestone } from '../../types/journey'

type FloatingNavProps = {
  milestones: Milestone[]
}

export default function FloatingNav({
  milestones,
}: FloatingNavProps): JSX.Element {
  const progress = useScrollProgress()
  const [activeYear, setActiveYear] = useState<number>(milestones[0]?.year ?? 0)
  const years = milestones.map((m) => m.year)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.milestone-item')
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) {
          const year = Number(
            (visible[0].target as HTMLElement).dataset.year
          )
          if (year) setActiveYear(year)
        }
      },
      { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function scrollToYear(year: number): void {
    const el = document.querySelector<HTMLElement>(
      `[data-year="${year}"]`
    )
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <>
      {/* Desktop: fixed right side */}
      <nav className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-50">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => scrollToYear(year)}
            className={`text-xs font-mono transition-colors duration-200 text-right ${
              year === activeYear
                ? 'text-zinc-100'
                : 'text-zinc-600 hover:text-zinc-400'
            }`}
          >
            {year}
          </button>
        ))}
      </nav>

      {/* Mobile: bottom progress bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 h-1 bg-zinc-900">
        <div
          className="h-full bg-zinc-500 transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </>
  )
}
