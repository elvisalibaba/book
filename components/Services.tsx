'use client'

import { motion } from 'framer-motion'
import { Edit, PenTool, Palette, Globe } from 'lucide-react'
import Image from 'next/image'

const services = [
  { icon: Edit, title: 'Accompagnement éditorial', desc: 'De l’idée au manuscrit, nous vous guidons.' },
  { icon: PenTool, title: 'Correction & Révision', desc: 'Relecture attentive et amélioration stylistique.' },
  { icon: Palette, title: 'Design & Mise en Page', desc: 'Couverture et intérieur soignés.' },
  { icon: Globe, title: 'Distribution Internationale', desc: 'Vos livres disponibles partout.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden bg-black">
      {/* Arrière-plan flou (même image que le hero pour la cohérence) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/yu.jpg')",
            filter: 'blur(40px) scale(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-black/80" /> {/* Overlay sombre */}
      </div>

      {/* Particules légères (optionnel, reprendre du Hero si vous voulez) */}
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
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            Un Accompagnement Complet
          </h2>
          <div className="w-20 h-1 bg-[#E50914] mx-auto mt-4 mb-4" />
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            De la conception à la distribution, nous vous guidons à chaque étape.
          </p>
        </motion.div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="group relative bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#E50914]/20 border border-white/10 hover:border-[#E50914]/50 transition-all duration-300 cursor-pointer"
              >
                {/* Effet de surbrillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E50914]/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-6 flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon size={52} className="text-[#E50914] mb-4" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="font-semibold text-lg text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300">{service.desc}</p>
                </div>

                {/* Ligne décorative en bas */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E50914] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            )
          })}
        </div>

        {/* Espacement optionnel pour la section suivante */}
        <div className="h-8 md:h-12" />
      </div>
    </section>
  )
}