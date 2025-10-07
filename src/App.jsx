import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Achievements from './pages/Achievements'
import { Routes, Route } from 'react-router-dom'
import RainBackground from './components/RainBackground'

function App() {
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
