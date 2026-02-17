'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ThierryMbalaNkangaPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-black overflow-hidden">
        {/* Arrière-plan flou */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/02.jpg')",
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
                    src="/images/auteurs/om.jpeg"
                    alt="Pasteur Thierry Mbala Nkanga"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h1 className="font-serif text-3xl text-white">Pasteur Thierry Mbala Nkanga</h1>
                  <p className="text-[#E50914] font-medium mt-1">Pasteur missionnaire, Enseignant, Auteur</p>
                  <div className="mt-4 space-y-2 text-gray-300 text-sm">
                    <p>📍 République Démocratique du Congo</p>
                    <p>📅 Ministère depuis 2003</p>
                    <p>👨‍👩‍👧‍👦 Marié et père de famille</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite : biographie */}
            <div className="md:col-span-2 space-y-6 text-gray-200">
              <div>
                <h2 className="font-serif text-2xl text-white mb-4">Le Leadership Holistique : Foi, Action et Transformation</h2>
                <p className="leading-relaxed">
                  Le Pasteur Thierry Mbala Nkanga est reconnu comme un serviteur de Dieu, un pasteur missionnaire et un leader de développement 
                  dont le ministère est un pont entre la ferveur spirituelle et l&apos;action sociale concrète. Engagé sur le terrain depuis 2003, 
                  il œuvre dans plusieurs régions de la République Démocratique du Congo, portant globalement l&apos;homme et la société.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-3">Enseignant et Auteur</h3>
                <p className="leading-relaxed">
                  Le Pasteur Thierry Mbala Nkanga est également un conférencier recherché, un enseignant de la Parole percutant et un écrivain 
                  prolifique. Ses ouvrages, inspirés de la Bible et de son expérience pastorale, se concentrent sur la vie chrétienne pratique, 
                  la gestion spirituelle et matérielle, et le développement personnel. Ils sont des outils essentiels pour transformer l&apos;homme 
                  dans toutes les dimensions de son existence.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-3">Vie personnelle et héritage</h3>
                <p className="leading-relaxed">
                  Marié et père de famille, il incarne la foi qu&apos;il prêche, inspirant d&apos;autres à aimer Dieu, à servir les autres et à bâtir 
                  des communautés prospères et équilibrées en Christ.
                </p>
              </div>

              {/* Citation ou point clé */}
              <div className="border-l-4 border-[#E50914] pl-4 italic text-gray-300 my-6">
                &quot;Un leadership qui transforme allie la puissance de la foi à l&apos;action concrète au service des communautés.&quot;
              </div>

              {/* Lien vers le livre */}
              <div className="pt-6">
                <Link
                  href="/#livres"
                  className="inline-flex items-center gap-2 bg-[#E50914] text-white px-6 py-3 rounded-full font-medium hover:bg-[#b00710] transition-all shadow-lg"
                >
                  <BookOpen size={20} />
                  Découvrir ses livres
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