import { useEffect } from 'react'
import { ModalProvider } from './context/ModalContext'
import JoinModal from './components/JoinModal'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Highlights from './sections/Highlights'
import Trailer from './sections/Trailer'
import Learn from './sections/Learn'
import Freelance from './sections/Freelance'
import Agenda from './sections/Agenda'
import VideoTestimonials from './sections/VideoTestimonials'
import Format from './sections/Format'
import Audience from './sections/Audience'
import Host from './sections/Host'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <ModalProvider>
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Trailer />
        <Learn />
        <Freelance />
        <Agenda />
        <VideoTestimonials />
        <Format />
        <Audience />
        <Host />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <JoinModal />
    </ModalProvider>
  )
}
