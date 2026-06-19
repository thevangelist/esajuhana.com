export type MilestoneCategory = 'origin' | 'creative' | 'professional' | 'leadership' | 'present'

export type Milestone = {
  year: number
  title: string
  description: string
  category: MilestoneCategory
  image?: string
}

export type PhotoBreak = {
  src: string
  alt: string
  caption?: string
  afterMilestoneIndex: number
}

export type ApplicationTarget = {
  slug: string
  company: string
  role: string
  team?: string
  accentColor: string
  tagline: string
  whyPoints: string[]
  contact: { email: string; linkedin: string; github: string }
  milestones: Milestone[]
  photoBreaks?: PhotoBreak[]
}
