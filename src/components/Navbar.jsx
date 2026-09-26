function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight"
        >
          TAWAB
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a
            href="#about"
            className="hover:text-white transition-colors"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-white transition-colors"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="hover:text-white transition-colors"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 text-sm text-zinc-400">
          <a
            href="https://github.com/Tawab44"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar