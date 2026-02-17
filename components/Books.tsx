'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ShoppingCart, MessageCircle, Book, BookOpen } from 'lucide-react'

const books = [
  {
    title: 'AU-DELÀ DU TEMPLE',
    author: 'JONAS MABALO IKI',
    authorSlug: 'jonas-mabalo-iki',
    bookSlug: 'au-dela-du-temple',
    authorImage: '/images/auteurs/jonas-mabalo-iki.jpeg',
    genre: 'Spiritualité',
    image: '/images/01.jpg',
    amazonLink: 'https://amazon.fr/dp/XXXXXX1',
    whatsappLink: 'https://wa.me/+243812463366?text=Bonjour%2C%20je%20souhaite%20acheter%20le%20livre%20AU-DELÀ%20DU%20TEMPLE',
  },
  {
    title: 'DIEU, LE CHRÉTIEN ET L’ARGENT',
    author: 'THIERRY MBALA NKANGA',
    authorSlug: 'thierry-mbala-nkanga',
    bookSlug: 'dieu-le-chretien-et-l-argent',
    authorImage: '/images/auteurs/thierry-mbala-nkanga.jpg',
    genre: 'Bien-être',
    image: '/images/02.jpg',
    amazonLink: 'https://a.co/d/022owNET',
    whatsappLink: 'https://wa.me/+243813507216?text=Bonjour%2C%20je%20souhaite%20acheter%20le%20livre%20DIEU%2C%20LE%20CHRÉTIEN%20ET%20L’ARGENT',
  },
  {
    title: 'Proche de ta destinée',
    author: 'ALAIN NTETE MATONDO',
    authorSlug: 'alain-ntete-matondo',
    bookSlug: 'proche-de-ta-destinee',
    authorImage: '/images/auteurs/alain-ntete-matondo.jpg',
    genre: 'Philosophie',
    image: '/images/03.jpg',
    amazonLink: 'https://a.co/d/05aFFvQb',
    whatsappLink: 'https://wa.me/+243898983721?text=Bonjour%2C%20je%20souhaite%20acheter%20le%20livre%20Proche%20de%20ta%20destinée',
  },
  {
    title: 'JE M’EN VAIS SANS MA PROMESSE',
    author: 'Felly Ilunga',
    authorSlug: 'felly-ilunga',
    bookSlug: 'je-m-en-vais-sans-ma-promesse',
    authorImage: '/images/auteurs/felly-ilunga.jpg',
    genre: 'Spiritualité',
    image: '/images/04.jpg',
    amazonLink: 'https://a.co/d/02hqcBqUs',
    whatsappLink: 'https://wa.me/243XXXXXXXX?text=Bonjour%2C%20je%20souhaite%20acheter%20le%20livre%20JE%20M’EN%20VAIS%20SANS%20MA%20PROMESSE',
  },
  {
    title: 'Pensées Positives',
    author: 'Jean Martin',
    authorSlug: 'jean-martin',
    bookSlug: 'pensees-positives',
    authorImage: '/images/auteurs/jean-martin.jpg',
    genre: 'Développement',
    image: '/images/05.jpg',
    amazonLink: 'https://amazon.fr/dp/XXXXXX5',
    whatsappLink: 'https://wa.me/243XXXXXXXX?text=Bonjour%2C%20je%20souhaite%20acheter%20le%20livre%20Pensées%20Positives',
  },
  {
    title: 'La Voie du Guerrier',
    author: 'Thomas Renaud',
    authorSlug: 'thomas-renaud',
    bookSlug: 'la-voie-du-guerrier',
    authorImage: '/images/auteurs/thomas-renaud.jpg',
    genre: 'Spiritualité',
    image: '/images/06.jpg',
    amazonLink: 'https://amazon.fr/dp/XXXXXX6',
    whatsappLink: 'https://wa.me/243XXXXXXXX?text=Bonjour%2C%20je%20souhaite%20acheter%20le%20livre%20La%20Voie%20du%20Guerrier',
  },
]

export default function Books() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current
      const cardWidth = clientWidth * 0.8
      const scrollTo = direction === 'left' ? scrollLeft - cardWidth : scrollLeft + cardWidth
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section id="livres" className="relative py-16 md:py-24 overflow-hidden bg-black">
      {/* Arrière-plan flou */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/ffff.jpg')",
            filter: 'blur(40px) scale(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Particules */}
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
            Œuvres Inspirantes
          </h2>
          <div className="w-20 h-1 bg-[#E50914] mt-4 mb-4" />
          <p className="text-gray-300 text-base md:text-lg max-w-2xl">
            Découvrez nos publications qui éclairent, élèvent et transforment.
          </p>
        </motion.div>

        {/* Carrousel */}
        <div className="relative group mt-8 md:mt-12">
          {/* Boutons navigation */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-2 md:p-3 rounded-full backdrop-blur-sm border border-white/10 hover:bg-[#E50914] hover:scale-110 transition-all opacity-70 hover:opacity-100 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-2 md:p-3 rounded-full backdrop-blur-sm border border-white/10 hover:bg-[#E50914] hover:scale-110 transition-all opacity-70 hover:opacity-100 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Conteneur du carrousel */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-6"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
            }}
          >
            {books.map((book, idx) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="flex-shrink-0 w-48 sm:w-56 md:w-64 scroll-snap-align-start"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative h-72 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl group/card bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#E50914] transition-all duration-300">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                  />

                  {/* Overlay avec informations */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                    {/* Genre */}
                    <span className="text-xs text-[#E50914] bg-black/60 px-2 py-1 rounded-full self-start mb-2 border border-[#E50914]/30">
                      {book.genre}
                    </span>

                    {/* Titre cliquable vers la page du livre */}
                    <Link
                      href={`/book/${book.bookSlug}`}
                      className="text-white font-semibold text-sm sm:text-base md:text-lg leading-tight hover:text-[#E50914] transition-colors"
                    >
                      {book.title}
                    </Link>

                    {/* Auteur avec photo cliquable */}
                    <Link
                      href={`/auteur/${book.authorSlug}`}
                      className="flex items-center gap-2 mt-1 group/link"
                    >
                      <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/30 group-hover/link:border-[#E50914] transition-colors">
                        <Image
                          src={book.authorImage}
                          alt={book.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-white/80 text-xs sm:text-sm group-hover/link:text-[#E50914] transition-colors">
                        {book.author}
                      </span>
                    </Link>

                    {/* Prix et formats */}
                    <div className="flex items-center justify-between mt-2 text-xs sm:text-sm">
                      <span className="text-white font-bold bg-[#E50914]/20 px-2 py-0.5 rounded">
                        10$
                      </span>
                      <div className="flex gap-2 text-gray-300">
                        <span className="flex items-center gap-1" title="Format numérique">
                          <Book size={14} /> Num.
                        </span>
                        <span className="flex items-center gap-1" title="Format papier">
                          <BookOpen size={14} /> Pap.
                        </span>
                      </div>
                    </div>

                    {/* Boutons d'achat */}
                    <div className="flex gap-2 mt-3">
                      <a
                        href={book.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 bg-[#E50914] text-white text-xs sm:text-sm py-2 rounded-md hover:bg-[#b00710] transition-colors"
                      >
                        <ShoppingCart size={16} />
                        Amazon
                      </a>
                      <a
                        href={book.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 bg-green-600 text-white text-xs sm:text-sm py-2 rounded-md hover:bg-green-700 transition-colors"
                      >
                        <MessageCircle size={16} />
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Badge Nouveauté */}
                  {idx === 0 && (
                    <span className="absolute top-2 left-2 bg-[#E50914] text-white text-xs font-bold px-2 py-1 rounded">
                      Nouveauté
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center gap-2 mt-4">
            {books.map((_, idx) => (
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