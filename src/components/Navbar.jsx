import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-900">

      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-semibold tracking-tight"
        >
          TAWAB
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">

          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>

          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>

          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>

          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>

          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>

        </div>

        {/* Desktop Social */}
        <div className="hidden md:flex items-center gap-4 text-sm text-zinc-400">

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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-300 text-2xl"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-900 bg-[#0a0a0a]">

          <div className="px-6 py-6 flex flex-col gap-6 text-zinc-400">

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <div className="pt-4 border-t border-zinc-800 flex gap-6">

              <a
                href="https://github.com/Tawab44"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a href="#contact" onClick={closeMenu}>
                LinkedIn
              </a>

            </div>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar