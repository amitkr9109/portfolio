import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Navbar() {
  const navRef = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const el = navRef.current
    if (!el) return
    const tabs = el.querySelectorAll('[data-tab]')
    tabs.forEach((tab) => {
      const onEnter = () => {
        gsap.to(tab, { boxShadow: '0 0 12px 2px rgba(34,197,94,0.6)', borderColor: 'rgba(34,197,94,0.8)', duration: 0.18, ease: 'power2.out' })
      }
      const onLeave = () => {
        gsap.to(tab, { boxShadow: '0 0 0 0 rgba(0,0,0,0)', borderColor: 'rgba(255,255,255,0.15)', duration: 0.22, ease: 'power2.inOut' })
      }
      tab.addEventListener('mouseenter', onEnter)
      tab.addEventListener('mouseleave', onLeave)
    })
    return () => {
      tabs.forEach((tab) => {
        tab.replaceWith(tab.cloneNode(true))
      })
    }
  }, [])

  const baseTab = 'data-tab rounded-none border border-white/15 px-3 py-2 md:px-4 md:py-2.5 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors'

  return (
    <header className="border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-base sm:text-lg font-semibold">Amit Kumar</Link>
        {/* Desktop nav */}
        <nav ref={navRef} className="hidden sm:flex items-center gap-2 md:gap-3 lg:gap-4">
          <NavLink to="/" className={({ isActive }) => `${baseTab} ${isActive ? 'border-green-400 text-white' : ''}`}>Home</NavLink>
          <NavLink to="/skills" className={({ isActive }) => `${baseTab} ${isActive ? 'border-green-400 text-white' : ''}`}>Skills</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${baseTab} ${isActive ? 'border-green-400 text-white' : ''}`}>Projects</NavLink>
          <NavLink to="/achievements" className={({ isActive }) => `${baseTab} ${isActive ? 'border-green-400 text-white' : ''}`}>Achievements</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${baseTab} ${isActive ? 'border-green-400 text-white' : ''}`}>Contact</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${baseTab} ${isActive ? 'border-green-400 text-white' : ''}`}>About</NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden rounded-none border border-white/15 px-3 py-2 text-sm text-gray-200 hover:text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`${open ? 'block' : 'hidden'} sm:hidden border-t border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50`}
        onClick={() => setOpen(false)}
      >
        <div className="container mx-auto px-4 py-3 grid grid-cols-2 gap-2">
          <NavLink to="/" className={({ isActive }) => `${baseTab} ${isActive ? 'border-green-400 text-white' : ''}`}>Home</NavLink>
          <NavLink to="/skills" className={({ isActive }) => `${baseTab} ${isActive ? 'border-green-400 text-white' : ''}`}>Skills</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${baseTab} ${isActive ? 'border-green-400 text-white' : ''}`}>Projects</NavLink>
          <NavLink to="/achievements" className={({ isActive }) => `${baseTab} ${isActive ? 'border-green-400 text-white' : ''}`}>Achievements</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${baseTab} ${isActive ? 'border-green-400 text-white' : ''}`}>Contact</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${baseTab} ${isActive ? 'border-green-400 text-white' : ''}`}>About</NavLink>
        </div>
      </div>
    </header>
  )
}

