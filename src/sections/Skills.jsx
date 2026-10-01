import {
  SiPython,
  SiJavascript,
  SiHtml5,
 
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si"

import SkillCard from "../components/SkillCard"

function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: "CSS" },
        { name: "SQL", icon: "SQL" },
      ],
    },

    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "FastAPI", icon: <SiFastapi /> },
      ],
    },

    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },

    {
      title: "AI / ML",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Keras", icon: <SiKeras /> },
        { name: "OpenCV", icon: <SiOpencv /> },
      ],
    },

    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Vercel", icon: <SiVercel /> },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] text-white px-6 py-32"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-500 text-sm tracking-[0.3em] mb-4">
          SKILLS
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Technologies I work with.
        </h2>

        <div className="mt-16 space-y-14">

          {skillGroups.map((group) => (
            <div key={group.title}>

              <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-5">
                {group.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {group.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills