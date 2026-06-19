import { useEffect } from 'react'
import type { ApplicationTarget } from '../../types/journey'
import JourneyIntro from './JourneyIntro'
import JourneyTimeline from './JourneyTimeline'
import FloatingNav from './FloatingNav'
import BranchingTree from './BranchingTree'
import WhyCompany from './WhyCompany'

type ApplicationJourneyProps = {
  target: ApplicationTarget
}

export default function ApplicationJourney({
  target,
}: ApplicationJourneyProps): JSX.Element {
  // Inject noindex meta tag
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)

    // Update page title
    const originalTitle = document.title
    document.title = `${target.tagline} — ${target.company}`

    return () => {
      document.head.removeChild(meta)
      document.title = originalTitle
    }
  }, [target.tagline, target.company])

  return (
    <div className="journey-page min-h-screen text-zinc-100">
      <FloatingNav milestones={target.milestones} />
      <JourneyIntro
        company={target.company}
        tagline={target.tagline}
        role={target.role}
        team={target.team}
        accentColor={target.accentColor}
      />
      <JourneyTimeline milestones={target.milestones} photoBreaks={target.photoBreaks} />
      <BranchingTree
        accentColor={target.accentColor}
        company={target.company}
      />
      <WhyCompany
        company={target.company}
        accentColor={target.accentColor}
        whyPoints={target.whyPoints}
        contact={target.contact}
      />
    </div>
  )
}
