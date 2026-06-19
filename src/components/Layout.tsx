import { ReactNode, useEffect, useRef } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spacing = 8
    const baseRadius = 1
    const dots: { x: number; y: number; phase: number; speed: number }[] = []

    for (let x = spacing / 2; x < canvas.width; x += spacing) {
      for (let y = spacing / 2; y < canvas.height; y += spacing) {
        dots.push({
          x,
          y,
          phase: Math.random() * Math.PI * 2,
          speed: 0.5 + Math.random() * 0.5
        })
      }
    }

    let targetMouseX = -1000
    let targetMouseY = -1000
    let mouseX = -1000
    let mouseY = -1000

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX
      targetMouseY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Smooth easing - lerp with 0.05 factor for very slow follow
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      dots.forEach(dot => {
        const dx = mouseX - dot.x
        const dy = mouseY - dot.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 130
        const mouseInfluence = Math.max(0, 1 - distance / maxDistance)

        const radius = baseRadius + mouseInfluence * 1.2

        // Barely-there monochrome dots, a faint glow around the cursor
        ctx.fillStyle = `rgba(255, 255, 255, ${0.025 + mouseInfluence * 0.09})`
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col text-zinc-100 relative">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="relative flex min-h-screen flex-col" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
