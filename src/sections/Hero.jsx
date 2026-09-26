function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white px-6"
    >
      <div className="max-w-4xl text-center">

        <p className="text-blue-500 text-sm tracking-[0.3em] mb-6">
          HELLO, I'M
        </p>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          TAWAB
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-zinc-400">
          Software Developer
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-zinc-500 leading-relaxed">
          I build modern web applications and AI-powered solutions
          with a focus on clean design and practical user experiences.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-700 rounded-full font-medium text-white hover:border-zinc-500 transition-colors"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero