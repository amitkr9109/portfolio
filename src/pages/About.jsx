export default function About() {
  return (
    <section data-section className="py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">About</h1>
        <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl">
          A short bio and your skills.
        </p>

        <div className="mt-10 sm:mt-12 md:mt-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">Education</h2>
          <div className="mt-4 grid grid-cols-1">
            <div className="rounded-none border border-white/15 bg-white/5 backdrop-blur-sm p-4 sm:p-5 md:p-6">
              <div className="flex flex-col gap-1 sm:gap-1.5">
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-white">Technocrats Institute of Technology &amp; Science, Bhopal</h3>
                <p className="text-sm sm:text-base text-gray-300">Bachelor of Technology in Computer Science and Engineering</p>
                <p className="text-xs sm:text-sm text-gray-400">Sept 2022 – June 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

