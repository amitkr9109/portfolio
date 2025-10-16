import React from 'react'

const SkillCard = ({ icon, title }) => {
  return (
    <div className="group rounded-md border border-white/10 bg-white/10 text-white p-4 sm:p-5 md:p-6 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-200 ease-out hover:border-green-400/50 hover:bg-white/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:-translate-y-0.5">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 grid place-items-center rounded-none bg-white/10 border border-white/10 text-white/90 transition-colors group-hover:bg-white/15">
          {icon}
        </div>
        <h3 className="text-sm sm:text-base md:text-lg font-medium tracking-tight">{title}</h3>
      </div>
    </div>
  )
}


export default SkillCard