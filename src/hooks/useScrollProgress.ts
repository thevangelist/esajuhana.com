import { useSyncExternalStore } from 'react'

let progress = 0

function calculateProgress(): number {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  if (docHeight <= 0) return 0
  return Math.min(1, Math.max(0, scrollTop / docHeight))
}

function subscribe(callback: () => void): () => void {
  const handler = () => {
    progress = calculateProgress()
    callback()
  }
  window.addEventListener('scroll', handler, { passive: true })
  return () => window.removeEventListener('scroll', handler)
}

function getSnapshot(): number {
  return progress
}

function getServerSnapshot(): number {
  return 0
}

export function useScrollProgress(): number {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
