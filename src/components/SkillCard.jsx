function SkillCard({ icon, name }) {
  return (
    <div className="group flex items-center gap-4 border border-zinc-800 rounded-xl px-5 py-4 bg-zinc-950/40 hover:border-zinc-600 hover:bg-zinc-900/60 transition-all duration-300">

      <div className="w-10 h-10 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 transition-colors text-2xl">
        {icon}
      </div>

      <span className="text-zinc-300 group-hover:text-white transition-colors">
        {name}
      </span>

    </div>
  )
}

export default SkillCard