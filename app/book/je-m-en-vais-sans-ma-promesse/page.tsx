'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, User, ShoppingCart, MessageCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function JeMEnVaisSansMaPromessePage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/04.jpg')",
              filter: 'blur(40px) scale(1.2)',
            }}
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div key={i} className="absolute bg-white/5 rounded-full" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, width: Math.random()*4+1, height: Math.random()*4+1 }} animate={{ y: [0, -20, 0], opacity: [0.1,0.3,0.1] }} transition={{ duration: Math.random()*10+10, repeat: Infinity, ease: 'linear' }} />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 md:py-32">
          <Link href="/#livres" className="inline-flex items-center gap-2 text-gray-300 hover:text-[#E50914] transition-colors mb-8">
            <ArrowLeft size={20} /> Retour aux livres
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="relative w-full max-w-xs mx-auto aspect-[2/3] rounded-2xl overflow-hidden border-4 border-[#E50914] shadow-2xl">
                  <Image src="/images/04.jpg" alt="Je m'en vais sans ma promesse" fill className="object-cover" />
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h1 className="font-serif text-3xl text-white">Je m'en vais sans ma promesse</h1>
                  <p className="text-[#E50914] font-medium mt-1">Felly Ilunga</p>
                  <div className="mt-4 space-y-2 text-gray-300 text-sm">
                    <p><span className="font-semibold">Genre :</span> Spiritualité / Témoignage</p>
                    <p><span className="font-semibold">Format :</span> Numérique & Papier</p>
                    <p><span className="font-semibold">Prix :</span> 10$</p>
                  </div>
                  <div className="mt-6 flex flex-col gap-3">
                    <a href="https://amazon.fr/dp/XXXXXX4" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#E50914] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#b00710] transition-all shadow-lg"><ShoppingCart size={20} /> Acheter sur Amazon</a>
                    <a href="https://wa.me/243977602740?text=Bonjour%2C%20je%20souhaite%20acheter%20le%20livre%20Je%20m'en%20vais%20sans%20ma%20promesse" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-all shadow-lg"><MessageCircle size={20} /> Commander sur WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6 text-gray-200">
              <div>
                <h2 className="font-serif text-2xl text-white mb-4">Le livre</h2>
                <p className="leading-relaxed">
                  Premier ouvrage de Felly Ilunga, <span className="text-[#E50914] font-semibold">"Je m'en vais sans ma promesse"</span> est un témoignage poignant de foi et de persévérance. L'auteur y partage son parcours de vie, marqué par l'absence parentale, la précarité, mais aussi la grâce de Dieu qui l'a soutenu. À travers ces pages, il encourage chacun à ne pas abandonner ses rêves et à croire que Dieu tient ses promesses, même quand tout semble perdu.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-3 flex items-center gap-2"><User size={20} className="text-[#E50914]" /> À propos de l'auteur</h3>
                <p className="leading-relaxed">
                  Felly Ilunga est un jeune chrétien passionné par l'Évangile et le bien-être des enfants de Dieu. Issu d'une famille modeste, il a surmonté de nombreuses difficultés pour réaliser son rêve d'écriture. Il prépare actuellement d'autres ouvrages.
                </p>
                <Link href="/auteur/felly-ilunga" className="inline-block mt-2 text-[#E50914] hover:underline">Voir la page de l'auteur →</Link>
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-3">Formats disponibles</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li><span className="font-semibold">Numérique (PDF, EPUB) :</span> 10$</li>
                  <li><span className="font-semibold">Papier (broché) :</span> 10$</li>
                </ul>
              </div>
              <div className="border-l-4 border-[#E50914] pl-4 italic text-gray-300 my-6">
                &quot;Dieu ne fait pas de promesses sans les accomplir.&quot;
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
