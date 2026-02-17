'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check } from 'lucide-react'

export default function About() {
  return (
    <section id="a-propos" className="relative py-16 md:py-24 overflow-hidden bg-black">
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
        {[...Array(30)].map((_, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Bloc texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 hover:border-[#E50914]/50 transition-all shadow-2xl"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
              Holistique Book
            </h2>
            <div className="w-20 h-1 bg-[#E50914] mt-4 mb-4" />
            <p className="text-lg text-gray-200 leading-relaxed">
              Nous croyons en la puissance des mots pour transformer les vies. Notre mission est d'accompagner les auteurs avec intégrité et excellence.
            </p>

            {/* Valeurs */}
            <ul className="mt-6 space-y-3">
              {['Intégrité', 'Authenticité', 'Service'].map((value, idx) => (
                <motion.li
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 text-gray-200 text-lg"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E50914]/20 border border-[#E50914]/50">
                    <Check size={16} className="text-[#E50914]" />
                  </span>
                  {value}
                </motion.li>
              ))}
            </ul>

            {/* Statistiques */}
            <div className="mt-8 grid grid-cols-3 gap-2 md:gap-4">
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-[#E50914]">10+</div>
                <div className="text-xs md:text-sm text-gray-400">Années d'expertise</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-[#E50914]">50+</div>
                <div className="text-xs md:text-sm text-gray-400">Auteurs accompagnés</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-[#E50914]">15</div>
                <div className="text-xs md:text-sm text-gray-400">Pays de distribution</div>
              </div>
            </div>

            {/* Bouton */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-block bg-[#E50914] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-[#E50914]/50 transition-all"
              >
                Publication Internationale
              </a>
            </motion.div>
          </motion.div>

          {/* Grille d'images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Image 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              <Image
                src="/images/uuuu.jpg"
                alt="Auteur en lecture"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-2xl border border-white/10 group mt-8"
            >
              <Image
                src="/images/001.jpg"
                alt="Atelier éditorial"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Image 3 (pleine largeur) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-2xl border border-white/10 group col-span-2"
            >
              <Image
                src="/images/hero-editorial.png"
                alt="Bibliothèque"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
