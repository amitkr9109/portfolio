export default function Contact() {
  return (
    <section data-section className="py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300">Let’s connect. Reach out via any platform below or drop a message.</p>

        {/* Contact Me quick links */}
        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
          <a
            href="mailto:amitkr910219@gmail.com"
            aria-label="Email"
            className="group grid place-items-center h-12 w-12 sm:h-14 sm:w-14 rounded-none border border-white/15 bg-white/5 text-white/90 backdrop-blur-sm hover:border-green-400/50 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.25)]"
          >
            <span className="text-lg sm:text-xl">✉️</span>
          </a>
          <a
            href="https://www.linkedin.com/in/amit-kumar-3937a8282/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="group grid place-items-center h-12 w-12 sm:h-14 sm:w-14 rounded-none border border-white/15 bg-white/5 text-white/90 backdrop-blur-sm hover:border-green-400/50 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.25)]"
          >
            <span className="text-lg sm:text-xl">in</span>
          </a>
          <a
            href="https://github.com/amitkr9109"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group grid place-items-center h-12 w-12 sm:h-14 sm:w-14 rounded-none border border-white/15 bg-white/5 text-white/90 backdrop-blur-sm hover:border-green-400/50 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.25)]"
          >
            <span className="text-lg sm:text-xl">🐙</span>
          </a>
        </div>
        <div className="mt-10 sm:mt-12 max-w-xl">
          <form className="grid grid-cols-1 gap-3 sm:gap-4">
            <input className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Name" />
            <input className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email" />
            <textarea rows="4" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Message" />
            <button type="button" className="justify-self-start rounded-md bg-white text-black px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium hover:bg-gray-100">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

