type JourneyIntroProps = {
  company: string
  tagline: string
  role: string
  team?: string
  accentColor: string
}

export default function JourneyIntro({
  company,
  tagline,
  role,
  team,
  accentColor,
}: JourneyIntroProps): JSX.Element {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      <p className="text-sm tracking-[0.3em] uppercase text-zinc-500 mb-6">
        {company}
        {team ? ` / ${team}` : ''}
      </p>
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-zinc-100 mb-6 leading-tight">
        {tagline}
      </h1>
      <p className="text-lg md:text-xl text-zinc-400 mb-12">
        Application for{' '}
        <span style={{ color: accentColor }}>{role}</span>
      </p>
      <div className="text-zinc-600 text-sm tracking-widest uppercase animate-bounce">
        Scroll
      </div>
      <p className="text-zinc-700 text-xs mt-2">Esa Lahikainen</p>
    </section>
  )
}
