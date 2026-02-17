'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const articles = [
  { title: '10 conseils pour écrire un livre spirituel', category: 'Conseils', image: '/images/blog1.jpg' },
  { title: 'Comment choisir son éditeur ?', category: 'Guide', image: '/images/blog2.jpg' },
  { title: 'L’importance du rituel d’écriture', category: 'Inspiration', image: '/images/blog3.jpg' },
  { title: 'Les tendances de l’édition 2025', category: 'Actualité', image: '/images/blog4.jpg' },
  { title: 'Publier un livre auto-édité', category: 'Guide', image: '/images/blog5.jpg' }, // exemple
]

export default function Blog() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current
      const cardWidth = clientWidth * 0.8 // largeur approximative d'une carte
      const scrollTo = direction === 'left' ? scrollLeft - cardWidth : scrollLeft + cardWidth
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section id="blog" className="relative py-16 md:py-24 overflow-hidden bg-black">
      {/* Arrière-plan flou (image du premier article) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/blog1.jpg')",
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
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            Blog Éditorial
          </h2>
          <div className="w-20 h-1 bg-[#E50914] mt-4 mb-4" />
          <p className="text-gray-300 text-base md:text-lg max-w-2xl">
            Articles, conseils et réflexions sur l'édition spirituelle contemporaine.
          </p>
        </motion.div>

        {/* Carrousel */}
        <div className="relative group mt-8 md:mt-12">
          {/* Boutons de navigation */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-2 md:p-3 rounded-full backdrop-blur-sm border border-white/10 hover:bg-[#E50914] hover:scale-110 transition-all opacity-70 hover:opacity-100 shadow-lg"
            aria-label="Précédent"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-2 md:p-3 rounded-full backdrop-blur-sm border border-white/10 hover:bg-[#E50914] hover:scale-110 transition-all opacity-70 hover:opacity-100 shadow-lg"
            aria-label="Suivant"
          >
            <ChevronRight size={24} />
          </button>

          {/* Conteneur du carrousel avec défilement par carte */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-6"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
            }}
          >
            {articles.map((article, idx) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 scroll-snap-align-start"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:border-[#E50914] transition-all duration-300 group/card">
                  <div className="relative h-40 sm:h-44 md:h-48 w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                    <span className="absolute top-2 left-2 bg-[#E50914] text-white text-xs font-medium px-2 py-1 rounded-full z-10">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white text-base md:text-lg line-clamp-2">
                      {article.title}
                    </h3>
                    <Link
                      href="#"
                      className="inline-block mt-2 text-[#E50914] hover:underline text-sm font-medium group/link"
                    >
                      Lire l'article
                      <span className="inline-block transition-transform group-hover/link:translate-x-1"> →</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicateurs de position */}
          <div className="flex justify-center gap-2 mt-4">
            {articles.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (carouselRef.current) {
                    const card = carouselRef.current.children[idx] as HTMLElement
                    if (card) {
                      carouselRef.current.scrollTo({
                        left: card.offsetLeft,
                        behavior: 'smooth',
                      })
                    }
                  }
                }}
                className="group"
              >
                <span className="block h-1 rounded-full transition-all duration-300 bg-white/40 group-hover:bg-white/60 w-2 group-hover:w-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}