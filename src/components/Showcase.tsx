export default function Showcase() {
  return (
    <section className="p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 md:mb-6 text-lg md:text-2xl lg:text-3xl font-black">
          Recent work
        </h2>
        <div className="flex flex-col gap-4 md:gap-6">
          <a
            href="https://dembrandt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 md:p-12 border-2 border-zinc-800 hover:border-yellow-400 transition-all duration-300 group cursor-pointer"
          >
            <h3 className="text-2xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-6 text-yellow-400">
              Dembrandt
            </h3>
            <p className="text-sm md:text-xl lg:text-2xl text-zinc-400 leading-relaxed mb-4 md:mb-8">
              Extract design systems from any website with one command.
            </p>
            <span className="inline-flex items-center gap-2 md:gap-3 text-sm md:text-lg font-bold text-zinc-400 group-hover:text-yellow-400 transition-colors duration-200">
              Check it out
              <span className="group-hover:translate-x-2 transition-transform duration-200">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
