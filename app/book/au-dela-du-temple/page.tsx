'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, User, ShoppingCart, MessageCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AuDelaDuTemplePage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-black overflow-hidden">
        {/* Arrière-plan flou avec l'image du livre */}
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 md:py-32">
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
            {/* Colonne gauche : couverture et infos rapides */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="relative w-full max-w-xs mx-auto aspect-[2/3] rounded-2xl overflow-hidden border-4 border-[#E50914] shadow-2xl">
                  <Image
                    src="/images/01.jpg"
                    alt="Au-delà du temple"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h1 className="font-serif text-3xl text-white">Au-delà du temple</h1>
                  <p className="text-[#E50914] font-medium mt-1">Jonas Mabalo Iki</p>
                  <div className="mt-4 space-y-2 text-gray-300 text-sm">
                    <p><span className="font-semibold">Genre :</span> Spiritualité</p>
                    <p><span className="font-semibold">Format :</span> Numérique & Papier</p>
                    <p><span className="font-semibold">Prix :</span> 10$</p>
                  </div>

                  {/* Boutons d'achat */}
                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href="https://amazon.fr/dp/XXXXXX1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#E50914] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#b00710] transition-all shadow-lg"
                    >
                      <ShoppingCart size={20} />
                      Acheter sur Amazon
                    </a>
                    <a
                      href="https://wa.me/243812463366?text=Bonjour%2C%20je%20souhaite%20acheter%20le%20livre%20Au-delà%20du%20temple"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-all shadow-lg"
                    >
                      <MessageCircle size={20} />
                      Commander sur WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite : description et détails */}
            <div className="md:col-span-2 space-y-6 text-gray-200">
              <div>
                <h2 className="font-serif text-2xl text-white mb-4">Le livre</h2>
                <p className="leading-relaxed">
                  <span className="text-[#E50914] font-semibold">Le Temple brûle-t-il pendant que la Cité s'écroule ?</span> Ce livre est une interpellation radicale lancée à l'Église de la République Démocratique du Congo et d'Afrique. Depuis trop longtemps, le Corps du Christ semble avoir abdiqué son mandat prophétique, se contentant d'une foi confinée, impuissante face à la corruption endémique et à la prédation économique. L'auteur, Mabalo Iki Jonas, pose un diagnostic implacable : le silence de l'Église n'est pas une neutralité, c'est un &quot;péché d'indifférence&quot; qui offre une couverture spirituelle aux forces d'iniquité.
                </p>
                <p className="mt-3 leading-relaxed">
                  <span className="text-[#E50914] font-semibold">Au-delà du temple</span> est bien plus qu'un essai théologique ; c'est une feuille de route vers l'Évangile Holistique. En s'appuyant sur le concept de <span className="italic">Basileia</span> (le Royaume), l'auteur démontre que la foi ne doit pas seulement sauver l'âme, mais restaurer la dignité humaine et exiger la justice sociale.
                </p>
              </div>

              {/* Auteur */}
              <div>
                <h3 className="font-serif text-xl text-white mb-3 flex items-center gap-2">
                  <User size={20} className="text-[#E50914]" />
                  À propos de l'auteur
                </h3>
                <p className="leading-relaxed">
                  Pasteur missionnaire pour les Assemblées de Dieu du Congo auprès de l'Ouganda, Jonas Iki Mabalo dirige actuellement La Borne Missionary Center à Kampala. Diplômé en Droit de l'Université de Kinshasa (UNIKIN) et titulaire d'une Maîtrise en Missiologie (Lomé), il est doctorant au Séminaire Panafricain de Théologie. Son parcours incarne le message holistique qu'il défend.
                </p>
                <Link
                  href="/auteur/jonas-mabalo-iki"
                  className="inline-block mt-2 text-[#E50914] hover:underline"
                >
                  Voir la page de l'auteur →
                </Link>
              </div>

              {/* Formats */}
              <div>
                <h3 className="font-serif text-xl text-white mb-3">Formats disponibles</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li><span className="font-semibold">Numérique (PDF, EPUB) :</span> 10$</li>
                  <li><span className="font-semibold">Papier (broché) :</span> 10$</li>
                </ul>
              </div>

              {/* Extrait / Citation */}
              <div className="border-l-4 border-[#E50914] pl-4 italic text-gray-300 my-6">
                &quot;Le silence de l'Église n'est pas une neutralité, c'est un péché d'indifférence.&quot;
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
