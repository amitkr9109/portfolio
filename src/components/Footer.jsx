export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="container mx-auto px-4 py-6 text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row gap-4 sm:gap-2 items-start sm:items-center justify-between">
        <p>© {new Date().getFullYear()} Amit Kumar. All rights reserved.</p>
        <div className="flex gap-3 sm:gap-4">
          <a className="hover:text-white" href="https://github.com/amitkr9109" target="_blank" rel="noreferrer"><i className="ri-github-fill"></i> GitHub</a>
          <a className="hover:text-white" href="https://www.linkedin.com/in/amit-kumar-3937a8282/" target="_blank" rel="noreferrer"><i className="ri-linkedin-box-fill"></i> LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

