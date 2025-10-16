import React from 'react'

const ProjectCard = ({ title, description, tech = [], github, demo, linkedin }) => {
  return (
    <article data-animate className="rounded-md bg-[#1e293b]/80 text-white border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm p-4 sm:p-6 md:p-7 flex flex-col h-full hover:border-green-400/50 hover:shadow-[0_12px_40px_rgba(34,197,94,0.25)] transition-all duration-200 ease-out hover:-translate-y-0.5">
      <header>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
      </header>
      <p className="mt-2 sm:mt-3 text-xs sm:text-base text-gray-100/40 leading-relaxed">{description}</p>
      {tech.length > 0 && (
        <ul className="mt-3 sm:mt-4 flex flex-wrap gap-2 text-[11px] sm:text-xs text-gray-200/90">
          {tech.map((t) => (
            <li key={t} className="rounded-none border border-white/15 bg-white/10 px-2 py-1">{t}</li>
          ))}
        </ul>
      )}
      <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4">
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="rounded-md active:scale-95 border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white/90 hover:text-white hover:border-white/40">GitHub</a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className="rounded-md active:scale-95 border border-green-400/40 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white/90 hover:text-white hover:border-green-400">Live Demo</a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer" className="rounded-md active:scale-95 border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white/90 hover:text-white hover:border-white/40">LinkedIn</a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard