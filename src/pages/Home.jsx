import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Amit Kumar — Portfolio'
  }, [])

  return (
    <>
      <section data-section className="py-16 sm:py-20 md:py-28 flex sm:flex-row flex-col lg:gap-0 gap-32">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">Hi, I’m Amit 👋</h1>
          <p className="mt-3 sm:mt-4 md:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">Full Stack Web developer building performance, accessible, and responsive web experiences.</p>
          <div className="paragraph-div lg:w-1/2 lg:pt-32 pt-5">
            <p className='text-sm sm:text-base md:text-lg text-gray-500 '>I build fast, accessible, and responsive web applications using React.js, Node.js, and Express.js. I am passionate about creating smooth user interfaces, maintaining excellent UI/UX, and writing clean, maintainable code. I craft modern user experiences while also delivering scalable backend integrations when needed.</p>
          </div>
        </div>
        <div className="image group relative overflow-hidden rounded-xl lg:w-1/2 lg:h-[70vh] w-full h-[50vh] hover:border-2 hover:border-green-400">
          <img className='w-full h-full object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105' src="./image-1.jpg" alt="Amit Kumar" />
          <div className="pointer-events-none absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-60"></div>
        </div>
      </section>
       <div className="marque-div py-8 sm:py-10 md:py-12">
         <div className="marquee border-t border-b border-white/10 bg-white/5">
           <div className="marquee-track px-6 py-4 text-white/90">
             <span className="mx-4 text-sm sm:text-base md:text-lg">⚛️ React</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">🟩 Node.js</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">🚂 Express</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">🍃 MongoDB</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">🌬️ Tailwind</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">✨ GSAP</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">🐙 GitHub</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">🧪 Postman</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">⚛️ React</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">🟩 Node.js</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">🚂 Express</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">🍃 MongoDB</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">🌬️ Tailwind</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">✨ GSAP</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">🐙 GitHub</span>
             <span className="mx-4 text-sm sm:text-base md:text-lg">🧪 Postman</span>
           </div>
         </div>
       </div>
    </>
  )
}

