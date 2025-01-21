'use client'

import Image from 'next/image'
import Button from './atoms/Button'

const Hero = () => {
  return (
    <div className="bg-[#DEE2E6] py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-2">
            Hello
          </h1>
          <h2 className="text-4xl font-bold mb-4">
            I&apos;m Vahagn
          </h2>
          <p className="text-gray-600 mb-8">
            Software Developer and web3 enthusiast
          </p>
          <Button>Hire Me</Button>
        </div>

        {/* Right Content - Image */}
        <div className="md:w-1/2 relative">
          <div className="bg-[#212529] rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative overflow-hidden">
            <Image
              src="https://github.com/VahagnCh.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 