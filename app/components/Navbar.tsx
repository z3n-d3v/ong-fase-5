import { useState } from "react"
import { Link } from "react-router"

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((open) => !open);
  }

  return (
    <header className="bg-green-600 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16 w-full px-4">
          {/* <!-- Logo --> */}
          <div className="flex-shrink-0">
            <a href="#">
              ONG Integra
            </a>
          </div>

          {/* <!-- Desktop Menu --> */}
          <nav className="hidden md:flex space-x-6 ml-auto">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/contact-us" className="hover:underline">Fale Conosco</Link>
          </nav>

          {/* <!-- Mobile Hamburger --> */}
          <div className="md:hidden">
            <button onClick={toggleOpen} id="mobile-menu-button" className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className={`${open ? '' : 'md:hidden hidden'} bg-green-600`}>
        <Link to="/" className="block px-4 py-2 hover:bg-green-800">Home</Link>
        <Link to="/contact-us" className="block px-4 py-2 hover:bg-green-800">Fale Conosco</Link>
      </div>
    </header >
  )
}