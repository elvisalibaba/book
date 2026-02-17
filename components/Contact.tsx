'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden bg-black">
      {/* Arrière-plan flou (image de bibliothèque ou autre) */}
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
        {/* En-tête de section (optionnel, mais on peut mettre un titre) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            Contact
          </h2>
          <div className="w-20 h-1 bg-[#E50914] mx-auto mt-4 mb-4" />
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Discutons de votre projet d'édition spirituelle
          </p>
        </motion.div>

        {/* Carte de contact en deux colonnes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2"
        >
          {/* Coordonnées - fond rouge Netflix avec dégradé */}
          <div className="bg-gradient-to-br from-[#E50914] to-[#b00710] text-white p-8 md:p-10">
            <h3 className="font-serif text-2xl md:text-3xl mb-4">Parlons de votre projet</h3>
            <p className="mb-8 text-gray-100 text-lg">
              Que vous ayez un manuscrit ou une idée, nous sommes là pour vous accompagner.
            </p>
            <div className="space-y-5">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 border border-white/30">
                  <MessageCircle size={20} />
                </span>
                <a href="https://wa.me/1234567890" className="hover:underline text-lg">
                  +243 814 233 151
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 border border-white/30">
                  <Mail size={20} />
                </span>
                <a href="mailto:contact@holistique-book.fr" className="hover:underline text-lg">
                  contact@holistique-book.com
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 border border-white/30">
                  <MapPin size={20} />
                </span>
                <span className="text-lg">Immeuble 130, Avenue Kwango, Kinshasa/Gombe</span>
              </motion.div>
            </div>
          </div>

          {/* Formulaire */}
          <form className="p-8 md:p-10 space-y-5">
            <div>
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <select className="w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent transition-all appearance-none">
                <option value="" disabled selected className="bg-gray-800">Type de projet</option>
                <option value="manuscrit" className="bg-gray-800">Manuscrit</option>
                <option value="correction" className="bg-gray-800">Correction</option>
                <option value="design" className="bg-gray-800">Design</option>
                <option value="distribution" className="bg-gray-800">Distribution</option>
              </select>
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Votre message"
                className="w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:border-transparent transition-all resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#E50914] text-white px-6 py-4 rounded-lg font-medium text-lg shadow-lg hover:shadow-[#E50914]/50 transition-all flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Envoyer
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}