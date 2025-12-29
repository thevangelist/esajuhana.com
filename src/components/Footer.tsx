export default function Footer() {
  return (
    <footer className="mt-auto p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-6">
          <div className="flex gap-4 md:gap-8">
            <a
              href="https://github.com/thevangelist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg font-bold text-zinc-500 hover:text-yellow-400 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/esajuhana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-lg font-bold text-zinc-500 hover:text-yellow-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-xs md:text-base text-zinc-600">
            © {new Date().getFullYear()} esajuhana.com
          </p>
        </div>
      </div>
    </footer>
  )
}
