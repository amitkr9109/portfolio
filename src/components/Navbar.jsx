import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold">Amit Kumar</Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}>Projects</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-gray-600 hover:text-black'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

