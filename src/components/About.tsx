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
              I am a passionate Software Developer with expertise in web development and blockchain technologies. 
              With a strong foundation in modern development practices and a keen interest in emerging technologies, 
              I strive to create efficient and innovative solutions for complex problems.
            </p>
            
            <p className="text-gray-600 mb-8 text-center md:text-left">
              My experience spans across various domains including <strong>full-stack development, </strong>
              <strong>smart contract development</strong>, and <strong>software architecture</strong>. I&apos;m constantly learning 
              and adapting to new technologies to deliver the best possible solutions.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                <Button variant="solid">Hire Me</Button>
              </a>
              <Link href="/projects">
                <Button variant="solid">Projects</Button>
              </Link>
              <Link href="https://www.linkedin.com/in/vahagnc/" target="_blank" rel="noopener noreferrer">
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