import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <BlogSection />
      <Footer />
    </main>
  )
}
