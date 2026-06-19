import type { Milestone, PhotoBreak } from '../../types/journey'
import TimelineMilestone from './TimelineMilestone'
import ParallaxPhoto from './ParallaxPhoto'

type JourneyTimelineProps = {
  milestones: Milestone[]
  photoBreaks?: PhotoBreak[]
}

export default function JourneyTimeline({
  milestones,
  photoBreaks = [],
}: JourneyTimelineProps): JSX.Element {
  // Build a map of photo breaks keyed by the milestone index they follow
  const breakMap = new Map<number, PhotoBreak[]>()
  for (const pb of photoBreaks) {
    const existing = breakMap.get(pb.afterMilestoneIndex) ?? []
    existing.push(pb)
    breakMap.set(pb.afterMilestoneIndex, existing)
  }

  return (
    <section className="relative px-4 md:px-6 py-16 md:py-24 max-w-5xl mx-auto">
      {/* Vertical line (desktop only) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
        <div className="h-full w-full bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-600" />
      </div>

      <div className="flex flex-col gap-12 md:gap-16">
        {milestones.map((milestone, index) => (
          <div key={milestone.year}>
            <TimelineMilestone
              milestone={milestone}
              index={index}
            />
            {breakMap.get(index)?.map((pb, i) => (
              <ParallaxPhoto
                key={`photo-${index}-${i}`}
                src={pb.src}
                alt={pb.alt}
                caption={pb.caption}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
