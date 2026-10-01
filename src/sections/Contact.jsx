function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] text-white px-6 py-32"
    >
      <div className="max-w-6xl mx-auto">

        <div className="max-w-3xl">

          <p className="text-blue-500 text-sm tracking-[0.3em] mb-4">
            CONTACT
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            Let's build something.
          </h2>

          <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
            Have an opportunity, project, or idea you'd like to
            discuss? Feel free to reach out.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="inline-block mt-10 text-lg border-b border-white pb-2 hover:text-blue-400 hover:border-blue-400 transition-colors"
          >
            your-email@example.com ↗
          </a>

        </div>

        <div className="mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-6">

          <div className="flex gap-6 text-sm text-zinc-500">

            <a
              href="https://github.com/Tawab44"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="mailto:your-email@example.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>

          </div>

          <p className="text-sm text-zinc-600">
            © 2026 Tawab Shaikh
          </p>

        </div>

      </div>
    </section>
  )
}

export default Contact