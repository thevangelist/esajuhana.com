import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

type ParallaxPhotoProps = {
  src: string
  alt: string
  caption?: string
}

export default function ParallaxPhoto({
  src,
  alt,
  caption,
}: ParallaxPhotoProps): JSX.Element {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.05,
    rootMargin: '100px',
  })
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleScroll = (): void => {
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight
      // -1 to 1 range: -1 when element is below viewport, 1 when above
      const progress = 1 - (rect.top + rect.height / 2) / (viewportH + rect.height)
      // Subtle shift: max ±30px
      setOffset((progress - 0.5) * 60)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={(node) => {
        // Share ref between intersection observer and parallax
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
        containerRef.current = node
      }}
      className="journey-reveal relative overflow-hidden my-8 md:my-16 mx-auto max-w-4xl px-4 md:px-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      <div className="relative overflow-hidden rounded-sm aspect-[16/9] bg-zinc-900">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover will-change-transform"
            style={{ transform: `translateY(${offset}px) scale(1.1)` }}
            loading="lazy"
          />
        ) : (
          /* Placeholder template — swap src later */
          <div
            className="w-full h-full flex items-center justify-center will-change-transform"
            style={{ transform: `translateY(${offset}px) scale(1.1)` }}
          >
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full border border-zinc-700 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="16" height="14" rx="2" stroke="#52525b" strokeWidth="1.5" />
                  <circle cx="7" cy="8" r="1.5" stroke="#52525b" strokeWidth="1.5" />
                  <path d="M2 14l4-4 3 3 4-5 5 6" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-xs text-zinc-700 font-mono">{alt}</p>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <p className="text-xs text-zinc-600 mt-2 text-center font-mono">
          {caption}
        </p>
      )}
    </div>
  )
}
