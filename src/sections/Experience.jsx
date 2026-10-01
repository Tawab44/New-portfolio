function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] text-white px-6 py-32"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-500 text-sm tracking-[0.3em] mb-4">
          EXPERIENCE
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Where I've worked.
        </h2>

        <div className="mt-16 border-t border-zinc-800">

          <div className="py-10 border-b border-zinc-800 grid grid-cols-1 md:grid-cols-12 gap-6">

            <div className="md:col-span-3">
              <p className="text-zinc-500 text-sm">
                2025
              </p>
            </div>

            <div className="md:col-span-6">

              <h3 className="text-2xl font-medium">
                Web Development Intern
              </h3>

              <p className="mt-2 text-blue-400">
                CodSoft
              </p>

              <p className="mt-5 text-zinc-400 leading-relaxed">
                Worked on web development projects and built
                responsive user interfaces using modern web
                technologies.
              </p>

            </div>

            <div className="md:col-span-3 md:text-right">
              <span className="text-sm text-zinc-600">
                Internship
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience