export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-6">
      <div className="hairline mx-auto max-w-4xl pt-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-6">
          <div className="flex gap-6 md:gap-8">
            <a
              href="https://github.com/thevangelist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-50"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/esajuhana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-50"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} esajuhana.com
          </p>
        </div>
      </div>
    </footer>
  )
}
