'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen } from 'lucide-react'
import Header from '@/components/Header'   // Assurez-vous que le chemin est correct
import Footer from '@/components/Footer'   // Idem

export default function JonasMabaloIkiPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-black overflow-hidden">
        {/* Arrière-plan flou */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/01.jpg')",
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
                    src="/images/auteurs/jonas-mabalo-iki.jpeg"
                    alt="Jonas Mabalo Iki"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h1 className="font-serif text-3xl text-white">Mabalo Iki Jonas</h1>
                  <p className="text-[#E50914] font-medium mt-1">Pasteur, Missiologue, Juriste</p>
                  <div className="mt-4 space-y-2 text-gray-300 text-sm">
                    <p>📍 Kampala, Ouganda</p>
                    <p>🎓 Droit (UNIKIN) · Maîtrise en Missiologie · Doctorant</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite : biographie */}
            <div className="md:col-span-2 space-y-6 text-gray-200">
              <div>
                <h2 className="font-serif text-2xl text-white mb-4">Le Temple brûle-t-il pendant que la Cité s'écroule ?</h2>
                <p className="leading-relaxed">
                  Ce livre est une interpellation radicale lancée à l'Église de la République Démocratique du Congo et d'Afrique. 
                  Depuis trop longtemps, le Corps du Christ semble avoir abdiqué son mandat prophétique, se contentant d'une foi confinée, 
                  impuissante face à la corruption endémique et à la prédation économique. L'auteur, Mabalo Iki Jonas, pose un diagnostic 
                  implacable : le silence de l'Église n'est pas une neutralité, c'est un &quot;péché d&apos;indifférence&quot; qui offre une couverture 
                  spirituelle aux forces d&apos;iniquité.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-3">AU-DELÀ DU TEMPLE</h3>
                <p className="leading-relaxed">
                  <span className="text-[#E50914] font-semibold">Au-delà du Temple</span> est bien plus qu'un essai théologique ; c'est une feuille de route vers 
                  l&apos;Évangile Holistique. En s'appuyant sur le concept de <span className="italic">Basileia</span> (le Royaume), l'auteur démontre que la foi ne doit 
                  pas seulement sauver l'âme, mais restaurer la dignité humaine et exiger la justice sociale.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-3">Portrait du leader</h3>
                <p className="leading-relaxed">
                  Pasteur missionnaire pour les Assemblées de Dieu du Congo auprès de l'Ouganda, Mabalo Iki Jonas dirige actuellement 
                  La Borne Missionary Center à Kampala. Son parcours incarne le message holistique qu'il défend :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                  <li>
                    Diplômé en Droit de l'Université de Kinshasa (UNIKIN), il apporte une rigueur légale et civique à l'analyse des enjeux nationaux.
                  </li>
                  <li>
                    Titulaire d'une Maîtrise en Missiologie (Lomé) et doctorant au Séminaire Panafricain de Théologie, il est une voix écoutée dans la formation des leaders de demain.
                  </li>
                </ul>
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
