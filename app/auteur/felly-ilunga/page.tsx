'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FellyIlungaPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-black overflow-hidden">
        {/* Arrière-plan flou avec l'image du livre */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/04.jpg')", // Image du livre "JE M’EN VAIS SANS MA PROMESSE"
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 md:py-32">
          {/* Bouton retour */}
          <Link
            href="/#livres"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#E50914] transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Retour aux livres
          </Link>

          {/* Contenu principal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Colonne gauche : photo et infos rapides */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="relative w-64 h-64 mx-auto md:w-full md:h-auto aspect-square rounded-2xl overflow-hidden border-4 border-[#E50914] shadow-2xl">
                  <Image
                    src="/images/auteurs/moi.png"
                    alt="Felly Ilunga"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h1 className="font-serif text-3xl text-white">Felly Ilunga</h1>
                  <p className="text-[#E50914] font-medium mt-1">Jeune auteur, passionné de l'Évangile</p>
                  <div className="mt-4 space-y-2 text-gray-300 text-sm">
                    <p>📍 République Démocratique du Congo</p>
                    <p>📖 Premier livre : "JE M’EN VAIS SANS MA PROMESSE"</p>
                    <p>✍️ D'autres brouillons en gestation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite : biographie */}
            <div className="md:col-span-2 space-y-6 text-gray-200">
              <div>
                <h2 className="font-serif text-2xl text-white mb-4">Un cœur pour l'Évangile et l'écriture</h2>
                <p className="leading-relaxed">
                  Felly Ilunga est un jeune chrétien, passionné de l'Évangile et du bien-être des enfants de Dieu. 
                  Il se lance avec son tout premier livre que vous avez entre vos mains, <span className="text-[#E50914] font-semibold">"JE M’EN VAIS SANS MA PROMESSE"</span>. 
                  Pourtant, tant d'autres brouillons sont en gestation et, par la grâce de Dieu, dans les jours à venir, 
                  ceux-ci seront également publiés.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-3">Origines et héritage familial</h3>
                <p className="leading-relaxed">
                  Il est issu d'une famille modeste chrétienne. Son défunt père fut pasteur d'une église locale dans la partie 
                  centre de la République Démocratique du Congo, où il implanta plusieurs extensions de cette église. Sa mère 
                  fut un grand soutien dans le ministère de son père.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-3">Parcours de vie</h3>
                <p className="leading-relaxed">
                  Vivant loin de ses parents, il a été pris en charge par des amis, des connaissances ainsi que certains membres 
                  de sa famille. Grâce à Dieu, il a pu accomplir au moins un cursus scolaire moyen. Il aime l'écriture et s'est 
                  disponibilisé pour s'y consacrer pleinement.
                </p>
              </div>

              {/* Citation personnelle */}
              <div className="border-l-4 border-[#E50914] pl-4 italic text-gray-300 my-6">
                &quot;Écrire, c'est partager la lumière reçue pour éclairer le chemin des autres.&quot;
              </div>

              {/* Lien vers le livre */}
              <div className="pt-6">
                <Link
                  href="/#livres"
                  className="inline-flex items-center gap-2 bg-[#E50914] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b00710] transition-all shadow-lg"
                >
                  <BookOpen size={20} />
                  Découvrir son livre
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}