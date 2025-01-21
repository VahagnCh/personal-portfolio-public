'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const Header = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`
      bg-[#212529] text-white px-6 py-4 
      fixed top-0 left-0 right-0 w-full z-50
      transition-shadow duration-300
      ${isScrolled ? 'shadow-lg' : ''}
    `}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="logo">
          // Add here your initials or logo
          <Link href="/" className="text-2xl font-bold">XXX</Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>

        {/* Navigation Menu */}
        <nav className={`
          md:block
          ${isMenuOpen ? 'block' : 'hidden'}
          absolute md:relative
          top-full left-0
          w-full md:w-auto
          bg-[#212529] md:bg-transparent
          z-50
          border-t md:border-0 border-gray-700
        `}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-0">
            <li>
              <Link 
                href="/" 
                className="block py-2 md:py-0 hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            {isHomePage ? (
              <>
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => handleScroll(e, 'about')}
                    className="block py-2 md:py-0 hover:text-gray-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => handleScroll(e, 'services')}
                    className="block py-2 md:py-0 hover:text-gray-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleScroll(e, 'contact')}
                    className="block py-2 md:py-0 hover:text-gray-300"
                  >
                    Contact
                  </a>
                </li>
              </>
            ) : null}
            <li>
              <Link 
                href="/projects" 
                className="block py-2 md:py-0 hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="https://stt.hashnode.dev" 
                className="block py-2 md:py-0 hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header 