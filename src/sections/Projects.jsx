import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import Reveal from "../components/Reveal"




function Projects() {
  return (
    <Reveal>
    <section
      id="projects"
      className="bg-[#0a0a0a] text-white px-6 py-32"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-500 text-sm tracking-[0.3em] mb-4">
          SELECTED WORK
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Things I've built.
        </h2>

        <div className="mt-16">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}

        </div>

      </div>
    </section></Reveal>
  )
}

export default Projects