import { lazy, Suspense } from 'react'
import { useHash } from './hooks/useHash'
import { linearApplication } from './data/applications/linear'
import type { ApplicationTarget } from './types/journey'
import Layout from './components/Layout'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

const ApplicationJourney = lazy(
  () => import('./components/journey/ApplicationJourney')
)

const applications: Record<string, ApplicationTarget> = {
  [linearApplication.slug]: linearApplication,
}

function App(): JSX.Element {
  const hash = useHash()
  const target = applications[hash]

  if (target) {
    return (
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-zinc-600">
            Loading...
          </div>
        }
      >
        <ApplicationJourney target={target} />
      </Suspense>
    )
  }

  return (
    <Layout>
      <Showcase />
      <Footer />
    </Layout>
  )
}

export default App
