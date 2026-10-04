import Reveal from "../components/Reveal"

function About() {
  return (
    <Reveal>
    <section
      id="about"
      className="bg-[#0a0a0a] text-white px-6 py-32"
    >
      
      <div className="max-w-6xl mx-auto">

        <div className="max-w-3xl">

          <p className="text-blue-500 text-sm tracking-[0.3em] mb-4">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Building useful things with code.
          </h2>

          <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
            I'm a B.E. Information Technology student and software
            developer interested in building modern web applications
            and AI-powered solutions.
          </p>
          <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
            I enjoy turning ideas into practical products with clean
            interfaces, thoughtful user experiences, and reliable
            technology behind them.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-800 pt-10">

          <div>
            <p className="text-zinc-500 text-sm">
              EDUCATION
            </p>
            <p className="mt-2 text-white">
              B.E. Information Technology
            </p>
          </div>

          <div>
            <p className="text-zinc-500 text-sm">
              LOCATION
            </p>
            <p className="mt-2 text-white">
              Maharashtra, India
            </p>
          </div>

          <div>
            <p className="text-zinc-500 text-sm">
              FOCUS
            </p>
            <p className="mt-2 text-white">
              Web Development & AI
            </p>
          </div>

        </div>

      </div>
    </section>
     </Reveal>

  )
}

export default About