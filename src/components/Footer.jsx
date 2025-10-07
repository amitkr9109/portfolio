export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Amit Kumar. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-black" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-black" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

