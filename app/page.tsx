import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Books from '@/components/Books'
import Blog from '@/components/Blog'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Books />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}