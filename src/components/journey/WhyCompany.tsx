import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

type WhyCompanyProps = {
  company: string
  accentColor: string
  whyPoints: string[]
  contact: { email: string; linkedin: string; github: string }
}

export default function WhyCompany({
  company,
  accentColor,
  whyPoints,
  contact,
}: WhyCompanyProps): JSX.Element {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  })

  return (
    <section
      ref={ref}
      className="px-4 md:px-6 py-16 md:py-24 max-w-3xl mx-auto"
    >
      <div
        className="journey-reveal"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-zinc-200 mb-10">
          Why{' '}
          <span style={{ color: accentColor }}>{company}</span>
        </h2>

        <div className="flex flex-col gap-6 mb-16">
          {whyPoints.map((point, i) => (
            <div key={i} className="flex gap-4">
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-zinc-900 mt-0.5"
                style={{ backgroundColor: accentColor }}
              >
                {i + 1}
              </span>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
            style={{ backgroundColor: accentColor }}
          >
            Get in touch
          </a>

          <div className="flex gap-6 text-sm">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
