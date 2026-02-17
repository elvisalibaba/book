'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Arrière-plan flou (image de bibliothèque) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bibliotheque.jpg')",
            filter: 'blur(40px) scale(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Particules légères */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Colonne 1 : Logo et description */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#E50914] flex items-center justify-center text-white font-bold text-sm">
                HB
              </div>
              <span className="font-serif text-xl text-white">Holistique Book</span>
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Éditeur spirituel dédié à la transmission des sagesses.
            </p>
          </div>

          {/* Colonne 2 : Édition */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Édition</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#E50914] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#livres" className="text-gray-400 hover:text-[#E50914] transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="#a-propos" className="text-gray-400 hover:text-[#E50914] transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Ressources */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#blog" className="text-gray-400 hover:text-[#E50914] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#E50914] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E50914] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Légal */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mentions-legales" className="text-gray-400 hover:text-[#E50914] transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-gray-400 hover:text-[#E50914] transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-gray-400 hover:text-[#E50914] transition-colors">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur et copyright */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Holistique Book. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}