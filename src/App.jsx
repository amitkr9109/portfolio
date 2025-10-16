import './App.css'
import Lenis from 'lenis'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Achievements from './pages/Achievements'
import RainBackground from './components/RainBackground'

function App() {
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      direction: 'vertical',
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const unlisten = () => {
      lenis.scrollTo(0, { immediate: true })
    }

    unlisten()

    return () => {
      lenis.destroy()
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <RainBackground />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="py-24 container mx-auto px-4">Page not found.</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
