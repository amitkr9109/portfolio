import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const formRef = useRef()

  const [isSending, setIsSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true)
          setError(false)
          setIsSending(false)
          formRef.current.reset()
        },
        () => {
          setError(true)
          setIsSending(false)
        }
      )
  }

  return (
    <section data-section className="py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300">Let’s connect. Reach out via any platform below or drop a message.</p>

        <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
          <a
            href="https://www.linkedin.com/in/amit-kumar-3937a8282/"
            target="_blank"
            rel="noreferrer"
            className="group grid place-items-center h-12 w-12 sm:h-14 sm:w-14 rounded-sm border border-white/15 bg-white/5 text-white/90 backdrop-blur-sm hover:border-green-400/50 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.25)]"
          >
            <span className="text-lg sm:text-xl">in</span>
          </a>
          <a
            href="https://github.com/amitkr9109"
            target="_blank"
            rel="noreferrer"
            className="group grid place-items-center h-12 w-12 sm:h-14 sm:w-14 rounded-sm border border-white/15 bg-white/5 text-white/90 backdrop-blur-sm hover:border-green-400/50 hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.25)]"
          >
            <span className="text-lg sm:text-xl">🐙</span>
          </a>
        </div>

        <div className="mt-10 sm:mt-12 max-w-xl">
          <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 sm:gap-4">
            <input name="name" required placeholder="Name" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input name="email" required type="email" placeholder="Email" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <textarea name="message" required rows="4" placeholder="Message" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <button
              type="submit"
              disabled={isSending}
              className="justify-self-start rounded-md bg-orange-400 text-black px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium hover:bg-orange-500 cursor-pointer active:scale-95 disabled:opacity-70"
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </form>

          {success && <p className="text-green-400 mt-3">✅ Message sent successfully to email!</p>}
          {error && <p className="text-red-400 mt-3">❌ Something went wrong. Try again later.</p>}
        </div>
      </div>
    </section>
  )
}

export default Contact