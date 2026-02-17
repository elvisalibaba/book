'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, User, ShoppingCart, MessageCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProcheDeTaDestineePage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/03.jpg')",
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
                  <Image src="/images/03.jpg" alt="Proche de ta destinée" fill className="object-cover" />
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h1 className="font-serif text-3xl text-white">Proche de ta destinée</h1>
                  <p className="text-[#E50914] font-medium mt-1">Alain NTETE MATONDO</p>
                  <div className="mt-4 space-y-2 text-gray-300 text-sm">
                    <p><span className="font-semibold">Genre :</span> Développement personnel / Spiritualité</p>
                    <p><span className="font-semibold">Format :</span> Numérique & Papier</p>
                    <p><span className="font-semibold">Prix :</span> 10$</p>
                  </div>
                  <div className="mt-6 flex flex-col gap-3">
                    <a href="https://amazon.fr/dp/XXXXXX3" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#E50914] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#b00710] transition-all shadow-lg"><ShoppingCart size={20} /> Acheter sur Amazon</a>
                    <a href="https://wa.me/243XXXXXXXX?text=Bonjour%2C%20je%20souhaite%20acheter%20le%20livre%20Proche%20de%20ta%20destinée" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-all shadow-lg"><MessageCircle size={20} /> Commander sur WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6 text-gray-200">
              <div>
                <h2 className="font-serif text-2xl text-white mb-4">Le livre</h2>
                <p className="leading-relaxed">
                  <span className="text-[#E50914] font-semibold">Proche de ta destinée</span> est un ouvrage destiné au grand public et au Corps du Christ en particulier. Il nous permet de comprendre le plan de Dieu dans nos vies. Beaucoup de gens vivent dans le désordre, l'envie, la convoitise, dans le meurtre, la fornication parce qu'ils n'ont pas d'estime personnelle et ignorent leur destinée. Ils vivent dans ce monde pour être comme les autres, oubliant que Dieu les a créés différemment, avec des potentialités exceptionnelles qu'ils devraient découvrir, afin de les mettre en œuvre pour devenir ce que Dieu a prévu pour eux.
                </p>
                <p className="mt-3">Tu seras le produit fini et la marque déposée de Dieu si tu découvres ta destinée et que tu te mets à la matérialiser.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-3 flex items-center gap-2"><User size={20} className="text-[#E50914]" /> À propos de l'auteur</h3>
                <p className="leading-relaxed">
                  Alain NTETE MATONDO est le Visionnaire et Pasteur responsable de la Mission Mondiale pour le Salut, "CORTEGE DE VICTOIRE". Il coordonne également l'ONG SYDED. Consultant en projet de développement et entrepreneuriat, il est gradué en théologie et licencié en Management de projet.
                </p>
                <Link href="/auteur/alain-ntete-matondo" className="inline-block mt-2 text-[#E50914] hover:underline">Voir la page de l'auteur →</Link>
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-3">Formats disponibles</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li><span className="font-semibold">Numérique (PDF, EPUB) :</span> 10$</li>
                  <li><span className="font-semibold">Papier (broché) :</span> 10$</li>
                </ul>
              </div>
              <div className="border-l-4 border-[#E50914] pl-4 italic text-gray-300 my-6">
                &quot;Tu seras le produit fini et la marque déposée de Dieu si tu découvres ta destinée.&quot;
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}