'use client'

import Button from './atoms/Button'
import Link from 'next/link'

const About = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white py-20" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left side - Title */}
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
          </div>
          
          {/* Right side - Content switch this to your own content*/}
          <div className="md:w-2/3">
            <p className="text-gray-600 mb-6 text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <p className="text-gray-600 mb-8 text-center md:text-left">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat <strong>cupidatat non proident</strong>, sunt in 
              <strong>culpa qui officia</strong> deserunt mollit <strong>anim id est laborum</strong>. 
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                <Button variant="solid">Hire Me</Button>
              </a>
              <Link href="/projects">
                <Button variant="solid">Projects</Button>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">View CV</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 