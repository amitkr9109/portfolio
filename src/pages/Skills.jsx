import SkillCard from '../components/SkillCard'

const skills = [
  { title: 'C', icon: <span className="text-base sm:text-lg md:text-xl">🅲</span> },
  { title: 'JavaScript', icon: <span className="text-base sm:text-lg md:text-xl">🟨</span> },
  { title: 'MongoDB', icon: <span className="text-base sm:text-lg md:text-xl">🍃</span> },
  { title: 'Express.js', icon: <span className="text-base sm:text-lg md:text-xl">🚂</span> },
  { title: 'React.js', icon: <span className="text-base sm:text-lg md:text-xl">⚛️</span> },
  { title: 'Node.js', icon: <span className="text-base sm:text-lg md:text-xl">🟩</span> },
  { title: 'Tailwind CSS', icon: <span className="text-base sm:text-lg md:text-xl">🌬️</span> },
  { title: 'GSAP', icon: <span className="text-base sm:text-lg md:text-xl">✨</span> },
  { title: 'Redis', icon: <span className="text-base sm:text-lg md:text-xl">🧠</span> },
  { title: 'Git', icon: <span className="text-base sm:text-lg md:text-xl">🔧</span> },
  { title: 'GitHub', icon: <span className="text-base sm:text-lg md:text-xl">🐙</span> },
  { title: 'Postman', icon: <span className="text-base sm:text-lg md:text-xl">📮</span> },
]

export default function Skills() {
  return (
    <section data-section className="py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Skills</h1>
        <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300">Your core technologies and tools.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {skills.map((s) => (
            <SkillCard key={s.title} icon={s.icon} title={s.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

