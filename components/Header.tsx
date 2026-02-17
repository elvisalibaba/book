'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'Livres', href: '/#livres' },
  { name: 'Blog', href: '/#blog' },
  { name: 'À propos', href: '/#a-propos' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile quand on change de page
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Gestion du défilement fluide pour les ancres
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.split('#')[1]
      const targetElement = document.getElementById(targetId)
      if (targetElement && pathname === '/') {
        e.preventDefault()
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo HB avec rouge Netflix */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#E50914] text-white flex items-center justify-center font-bold text-lg shadow-md hover:shadow-[#E50914]/50 transition-shadow">
            HB
          </div>
          <span className="font-serif text-white text-lg hidden sm:block">Holistique Book</span>
        </Link>

        {/* Menu desktop */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-gray-200 hover:text-[#E50914] transition-colors duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bouton WhatsApp desktop (rouge Netflix) */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/243996869245" // Remplacez par votre numéro
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#E50914] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#b00710] hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>Prendre rendez-vous</span>
          </a>
        </div>

        {/* Bouton menu mobile */}
        <button
          className="lg:hidden p-2 rounded-md text-white"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden bg-black/95 backdrop-blur-lg"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white" aria-label="Fermer le menu">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-6 mt-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false)
                    handleLinkClick(e, item.href)
                  }}
                  className="text-2xl font-serif text-white hover:text-[#E50914]"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/243XXXXXXXX" // Remplacez par votre numéro
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E50914] text-white px-6 py-3 rounded-md shadow-md mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Devis WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton WhatsApp flottant mobile (rouge) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/243XXXXXXXX" // Remplacez par votre numéro
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#E50914] text-white px-5 py-3 rounded-md shadow-lg hover:bg-[#b00710] hover:scale-105 transition-all"
        >
          <span>Devis</span>
        </a>
      </div>
    </header>
  )
}
