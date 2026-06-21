export default function Showcase() {
  return (
    <section className="flex flex-1 items-center justify-center px-6 py-16 md:py-24">
      <div className="w-full max-w-2xl">
        <a
          href="https://dembrandt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-reveal group block rounded-3xl p-8 md:p-14 text-center"
        >
          <img
            src="/dembrandt-logo.png"
            alt="Dembrandt"
            className="mx-auto h-9 md:h-12 w-auto opacity-95 transition-opacity duration-300 group-hover:opacity-100"
          />

          <p className="mx-auto mt-8 md:mt-10 max-w-md text-lg md:text-2xl font-medium text-zinc-200 leading-snug">
            Extract Design Systems from any URL.
            <br />
            Generate DESIGN.md in seconds.
          </p>

          <span className="mt-8 md:mt-10 inline-flex items-center gap-2 text-base font-medium text-zinc-400 transition-colors duration-200 group-hover:text-zinc-50">
            dembrandt.com
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </span>
        </a>
        <div className="glass-reveal mt-4 rounded-2xl px-6 py-4 text-center opacity-40 hover:opacity-70 transition-opacity duration-300">
          <p className="text-sm text-zinc-500 leading-snug">
            more things are coming.<br />
            <span className="text-zinc-600">a lot has been built.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
