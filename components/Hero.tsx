'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const covers = [
  {
    id: 1,
    image: '/images/vv.jpg',
    title: 'Libérez la puissance de votre histoire',
    subtitle: 'Nous transformons votre sagesse en un livre qui marque les esprits',
  },
  {
    id: 2,
    image: '/images/vvv.jpg',
    title: 'De l’idée au best‑seller',
    subtitle: 'Accompagnement complet : écriture, édition, distribution',
  },
  {
    id: 3,
    image: '/images/vvvvv.jpg',
    title: 'Votre message mérite d’être entendu',
    subtitle: 'Devenez l’auteur inspirant que le monde attend',
  },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % covers.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const handleCoverChange = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Arrière-plan flou de l'image active (effet Netflix) */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${covers[activeIndex].image})`,
              filter: 'blur(30px) scale(1.1)',
            }}
          />
          <div className="absolute inset-0 bg-black/70" /> {/* Overlay sombre */}
        </motion.div>
      </AnimatePresence>

      {/* Conteneur principal pour le contenu (texte à gauche, images à droite) */}
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center md:items-center justify-between">
        {/* Bloc texte à gauche */}
        <div className="w-full md:w-1/2 z-20 pt-16 md:pt-0 md:pr-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
                {covers[activeIndex].title}
              </h1>
              <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-200/90 drop-shadow">
                {covers[activeIndex].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
                <Link
                  href="#services"
                  className="px-6 md:px-8 py-2 md:py-3 bg-[#E50914] text-white rounded font-medium hover:bg-[#b20710] hover:scale-105 transition-all shadow-lg text-center text-sm md:text-base"
                >
                  Découvrir nos services
                </Link>
                <Link
                  href="#contact"
                  className="px-6 md:px-8 py-2 md:py-3 bg-white/10 text-white rounded font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all text-center text-sm md:text-base"
                >
                  Parler de mon projet
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Conteneur des images à droite */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-end md:items-center justify-center md:justify-end">
          <div className="relative w-full h-full flex items-center justify-center md:justify-end">
            {covers.map((cover, index) => {
              const isActive = index === activeIndex
              const zIndex = isActive ? 30 : 10 + (index - activeIndex + 3) % 3
              const offset = (index - activeIndex + 3) % 3

              let rotate = 0
              let scale = 1
              let translateX = 0
              let translateY = 0
              let blur = false

              // Positionnement différent selon l'écart avec l'active
              if (offset === 0) {
                rotate = 0
                scale = 1.1
                translateX = 0
                translateY = 0
                blur = false
              } else if (offset === 1) {
                rotate = 5
                scale = 0.85
                translateX = 80
                translateY = 20
                blur = true
              } else {
                rotate = -5
                scale = 0.8
                translateX = -80
                translateY = 30
                blur = true
              }

              // Ajustements responsive
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
              if (isMobile) {
                if (offset === 0) {
                  translateX = 0
                  translateY = -30
                  scale = 0.9
                } else if (offset === 1) {
                  translateX = 50
                  translateY = -10
                  scale = 0.7
                } else {
                  translateX = -50
                  translateY = -10
                  scale = 0.7
                }
              }

              return (
                <motion.div
                  key={cover.id}
                  className="absolute will-change-transform"
                  style={{
                    zIndex,
                    left: isMobile ? '50%' : 'auto',
                    right: isMobile ? 'auto' : '10%',
                    top: isMobile ? '50%' : 'auto',
                    bottom: isMobile ? 'auto' : '5%',
                    x: isMobile ? '-50%' : '0',
                    y: isMobile ? '-50%' : '0',
                  }}
                  animate={{
                    x: isMobile ? `calc(-50% + ${translateX}px)` : translateX,
                    y: isMobile ? `calc(-50% + ${translateY}px)` : translateY,
                    rotate,
                    scale,
                    filter: blur ? 'blur(4px)' : 'blur(0px)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 25,
                    mass: 1,
                  }}
                  whileHover={{
                    scale: isActive ? 1.15 : scale * 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    animate={
                      !isActive
                        ? {
                            y: [0, -5, 0],
                            rotate: [rotate, rotate + 0.5, rotate],
                          }
                        : {}
                    }
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Image
                      src={cover.image}
                      alt={cover.title}
                      width={260}
                      height={390}
                      className="rounded-lg shadow-2xl"
                      style={{
                        boxShadow: isActive
                          ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(229,9,20,0.5)'
                          : '0 20px 30px -10px rgba(0,0,0,0.6)',
                      }}
                      priority={isActive}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Indicateurs (pastilles) - style Netflix */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-40">
        {covers.map((cover, index) => (
          <button
            key={cover.id}
            onClick={() => handleCoverChange(index)}
            className="group relative"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-[#E50914]'
                  : 'w-1.5 bg-white/40 group-hover:w-4 group-hover:bg-white/60'
              }`}
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
              {cover.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}