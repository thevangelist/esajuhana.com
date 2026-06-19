import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import type { Milestone } from '../../types/journey'

type TimelineMilestoneProps = {
  milestone: Milestone
  index: number
}

const categoryLabel: Record<Milestone['category'], string> = {
  origin: 'Origin',
  creative: 'Creative',
  professional: 'Professional',
  leadership: 'Leadership',
  present: 'Present',
}

export default function TimelineMilestone({
  milestone,
  index,
}: TimelineMilestoneProps): JSX.Element {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.15,
  })

  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      data-year={milestone.year}
      className="milestone-item relative grid grid-cols-[1fr] md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-start"
    >
      {/* Left content (desktop only) */}
      <div
        className={`hidden md:block ${isLeft ? '' : 'order-3'}`}
      >
        {isLeft && (
          <div
            className="journey-reveal text-right pr-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: '0.1s',
            }}
          >
            <MilestoneContent milestone={milestone} />
          </div>
        )}
      </div>

      {/* Center line + dot */}
      <div className="hidden md:flex flex-col items-center relative">
        <div className="w-3 h-3 rounded-full bg-zinc-600 border-2 border-zinc-500 relative z-10" />
      </div>

      {/* Right content (desktop) */}
      <div
        className={`hidden md:block ${isLeft ? 'order-3' : ''}`}
      >
        {!isLeft && (
          <div
            className="journey-reveal pl-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: '0.1s',
            }}
          >
            <MilestoneContent milestone={milestone} />
          </div>
        )}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center pt-1">
          <div className="w-3 h-3 rounded-full bg-zinc-600 border-2 border-zinc-500 shrink-0" />
          <div className="w-px flex-1 bg-zinc-800 mt-2" />
        </div>
        <div
          className="journey-reveal flex-1 pb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '0.1s',
          }}
        >
          <MilestoneContent milestone={milestone} />
        </div>
      </div>
    </div>
  )
}

function MilestoneContent({ milestone }: { milestone: Milestone }): JSX.Element {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl md:text-3xl font-bold text-zinc-300">
          {milestone.year}
        </span>
        <span className="text-xs tracking-wider uppercase text-zinc-600">
          {categoryLabel[milestone.category]}
        </span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-zinc-200 mb-2">
        {milestone.title}
      </h3>
      <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
        {milestone.description}
      </p>
    </div>
  )
}
