'use client'

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Button from './atoms/Button'
import { useState } from 'react'
import toast from 'react-hot-toast'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    toast.loading('Sending message...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      console.log('Response:', data) // Debug log

      if (!res.ok) {
        throw new Error(data.message || 'Failed to send message')
      }
      
      toast.dismiss()
      toast.success('Message sent successfully!')
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      toast.dismiss()
      toast.error(error instanceof Error ? error.message : 'Failed to send message')
      setStatus('error')
    }
  }

  return (
    <footer className="bg-[#DEE2E6] text-black py-20" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Contact Form - Takes up 3 columns */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-[#212529] focus:ring-1 focus:ring-[#212529] transition-colors duration-200 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-[#212529] focus:ring-1 focus:ring-[#212529] transition-colors duration-200 text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus:border-[#212529] focus:ring-1 focus:ring-[#212529] transition-colors duration-200 h-32 text-black"
                  required
                />
              </div>
              <Button>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
              {status === 'success' && (
                <p className="text-green-500 mt-2">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>

          {/* Social Links - Takes up 1 column, select of edit the social media depending on your needs */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-6">Social Media</h2>
            <div className="space-y-4">
              <a
                href="https://wa.me/522223375683?text=Hi%20Vahagn%2C%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-600"
              >
                <FaWhatsapp size={24} /> WhatsApp
              </a>
              <a 
                href="https://github.com/VahagnCh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-600"
              >
                <FaGithub size={24} /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/vahagnc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-600"
              >
                <FaLinkedin size={24} /> LinkedIn
              </a>
              <a 
                href="https://x.com/VahagnCha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-600"
              >
                <FaXTwitter size={24} /> @VahagnCha
              </a>
              <a
                href="https://www.instagram.com/vahagnch/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-600"
              >
                <FaInstagram size={24} /> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-20 pt-8 border-t border-gray-400">
          <p>&copy; {new Date().getFullYear()} Vahagn Chavushyan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 