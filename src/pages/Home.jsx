import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Amit Kumar — Portfolio'
  }, [])

  return (
    <section data-section className="py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">Hi, I’m Amit 👋</h1>
        <p className="mt-3 sm:mt-4 md:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Full Stack Web developer building performant, accessible web experiences.
        </p>
      </div>
    </section>
  )
}

