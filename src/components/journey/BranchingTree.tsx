import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

type BranchingTreeProps = {
  accentColor: string
  company: string
}

export default function BranchingTree({
  accentColor,
  company,
}: BranchingTreeProps): JSX.Element {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="relative px-4 md:px-6 py-16 md:py-24">
      {/* Desktop: full SVG branches */}
      <div className="hidden md:block max-w-3xl mx-auto">
        <svg
          viewBox="0 0 600 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Trunk */}
          <path
            d="M300 0 V120"
            stroke="#52525b"
            strokeWidth="2"
            className={isVisible ? 'branch-animate' : ''}
            style={{ '--branch-delay': '0s' } as React.CSSProperties}
          />

          {/* Left branch: Design */}
          <path
            d="M300 120 C300 160, 140 160, 140 200"
            stroke="#71717a"
            strokeWidth="1.5"
            className={isVisible ? 'branch-animate' : ''}
            style={{ '--branch-delay': '0.3s' } as React.CSSProperties}
          />
          <text x="140" y="228" textAnchor="middle" fill="#71717a" fontSize="12" fontFamily="monospace">
            Design
          </text>
          <text x="140" y="246" textAnchor="middle" fill="#52525b" fontSize="10" fontFamily="monospace">
            Winamp → UX → Systems
          </text>

          {/* Center branch: Engineering */}
          <path
            d="M300 120 V200"
            stroke="#71717a"
            strokeWidth="1.5"
            className={isVisible ? 'branch-animate' : ''}
            style={{ '--branch-delay': '0.5s' } as React.CSSProperties}
          />
          <text x="300" y="228" textAnchor="middle" fill="#71717a" fontSize="12" fontFamily="monospace">
            Engineering
          </text>
          <text x="300" y="246" textAnchor="middle" fill="#52525b" fontSize="10" fontFamily="monospace">
            Frontend → React → OSS
          </text>

          {/* Right branch: Leadership */}
          <path
            d="M300 120 C300 160, 460 160, 460 200"
            stroke="#71717a"
            strokeWidth="1.5"
            className={isVisible ? 'branch-animate' : ''}
            style={{ '--branch-delay': '0.7s' } as React.CSSProperties}
          />
          <text x="460" y="228" textAnchor="middle" fill="#71717a" fontSize="12" fontFamily="monospace">
            Leadership
          </text>
          <text x="460" y="246" textAnchor="middle" fill="#52525b" fontSize="10" fontFamily="monospace">
            Company → CXO → Strategy
          </text>

          {/* Converging paths */}
          <path
            d="M140 260 C140 300, 300 290, 300 320"
            stroke="#52525b"
            strokeWidth="1"
            className={isVisible ? 'branch-animate' : ''}
            style={{ '--branch-delay': '1s' } as React.CSSProperties}
          />
          <path
            d="M300 260 V320"
            stroke="#52525b"
            strokeWidth="1"
            className={isVisible ? 'branch-animate' : ''}
            style={{ '--branch-delay': '1s' } as React.CSSProperties}
          />
          <path
            d="M460 260 C460 300, 300 290, 300 320"
            stroke="#52525b"
            strokeWidth="1"
            className={isVisible ? 'branch-animate' : ''}
            style={{ '--branch-delay': '1s' } as React.CSSProperties}
          />

          {/* Glowing endpoint */}
          <circle
            cx="300"
            cy="330"
            r="8"
            fill={accentColor}
            filter="url(#glow)"
            className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '1.4s' }}
          />
          <circle
            cx="300"
            cy="330"
            r="3"
            fill="white"
            className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '1.4s' }}
          />
          <text
            x="300"
            y="356"
            textAnchor="middle"
            fill={accentColor}
            fontSize="13"
            fontWeight="bold"
            fontFamily="monospace"
            className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '1.6s' }}
          >
            {company}
          </text>
        </svg>
      </div>

      {/* Mobile: simplified single convergence */}
      <div className="md:hidden flex flex-col items-center">
        <svg
          viewBox="0 0 200 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-48"
        >
          <defs>
            <filter id="glow-mobile">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Three lines converging */}
          <path d="M40 0 C40 80, 100 120, 100 160" stroke="#52525b" strokeWidth="1.5"
            className={isVisible ? 'branch-animate' : ''} style={{ '--branch-delay': '0.3s' } as React.CSSProperties} />
          <path d="M100 0 V160" stroke="#52525b" strokeWidth="1.5"
            className={isVisible ? 'branch-animate' : ''} style={{ '--branch-delay': '0.5s' } as React.CSSProperties} />
          <path d="M160 0 C160 80, 100 120, 100 160" stroke="#52525b" strokeWidth="1.5"
            className={isVisible ? 'branch-animate' : ''} style={{ '--branch-delay': '0.7s' } as React.CSSProperties} />

          {/* Labels */}
          <text x="40" y="-8" textAnchor="middle" fill="#52525b" fontSize="10" fontFamily="monospace">Design</text>
          <text x="100" y="-8" textAnchor="middle" fill="#52525b" fontSize="10" fontFamily="monospace">Code</text>
          <text x="160" y="-8" textAnchor="middle" fill="#52525b" fontSize="10" fontFamily="monospace">Lead</text>

          {/* Glowing endpoint */}
          <circle cx="100" cy="180" r="8" fill={accentColor} filter="url(#glow-mobile)"
            className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '1.2s' }} />
          <circle cx="100" cy="180" r="3" fill="white"
            className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '1.2s' }} />
          <text x="100" y="210" textAnchor="middle" fill={accentColor} fontSize="13" fontWeight="bold" fontFamily="monospace"
            className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '1.4s' }}>
            {company}
          </text>
        </svg>
      </div>
    </section>
  )
}
