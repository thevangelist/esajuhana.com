import type { ApplicationTarget } from '../../types/journey'
import { baseMilestones } from '../milestones'

export const linearApplication: ApplicationTarget = {
  slug: 'linear',
  company: 'Linear',
  role: 'Designer, Web & Brand',
  team: 'Magic Team',
  accentColor: '#5E6AD2',
  tagline: 'The path to Linear',
  whyPoints: [
    "I've been designing interfaces since Winamp skins in 2000 \u2014 25 years of craft before craft was a job title.",
    "I don't just design. I build. HTML, CSS, TypeScript, React \u2014 I ship the components, not just the Figma files.",
    '15 years across 6 companies. Domains from telecom to public sector, eCom to manufacturing, retail to supply chain. I know how real products work for real users.',
    "I've worked embedded in marketing, design, and dev teams \u2014 I know each discipline's best practices, workflows, and blind spots. I've been called \"the glue between stakeholders.\"",
    'I built Dembrandt \u2014 an open-source tool that extracts design tokens from any website. I build tools for builders.',
  ],
  contact: {
    email: 'esa@esajuhana.com',
    linkedin: 'https://linkedin.com/in/esajuhana',
    github: 'https://github.com/thevangelist',
  },
  milestones: baseMilestones,
  photoBreaks: [
    {
      src: '',
      alt: 'Early design work',
      caption: 'Photo placeholder — early design era',
      afterMilestoneIndex: 2,
    },
    {
      src: '',
      alt: 'Professional years',
      caption: 'Photo placeholder — professional era',
      afterMilestoneIndex: 5,
    },
    {
      src: '',
      alt: 'Present day',
      caption: 'Photo placeholder — present day',
      afterMilestoneIndex: 7,
    },
  ],
}
