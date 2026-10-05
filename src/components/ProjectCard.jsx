function ProjectCard({ project, number }) {
  return (
    <article className="group border-t border-zinc-800 py-10">

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Number */}
        <div className="md:col-span-1">
          <span className="text-sm text-zinc-600">
            {number}
          </span>
        </div>

        {/* Project */}
        <div className="md:col-span-8">

          {project.image && (
            <div className="mb-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          )}

          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="mt-5 max-w-2xl text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="px-3 py-1.5 text-xs text-zinc-400 border border-zinc-800 rounded-full"
              >
                {technology}
              </span>
            ))}
          </div>

        </div>

        {/* Links */}
        <div className="md:col-span-3 md:text-right">

          <div className="flex md:justify-end gap-5">

            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 hover:text-white"
              >
                Live Demo ↗
              </a>
            )}

            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 hover:text-white"
              >
                GitHub ↗
              </a>
            )}

          </div>

        </div>

      </div>

    </article>
  )
}

export default ProjectCard