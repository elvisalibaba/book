'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, User, ShoppingCart, MessageCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DieuLeChretienEtLArgentPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-black overflow-hidden">
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

        {/* Particules */}
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
            {/* Couverture */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="relative w-full max-w-xs mx-auto aspect-[2/3] rounded-2xl overflow-hidden border-4 border-[#E50914] shadow-2xl">
                  <Image src="/images/02.jpg" alt="Dieu, le chrétien et l'argent" fill className="object-cover" />
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h1 className="font-serif text-3xl text-white">Dieu, le chrétien et l'argent</h1>
                  <p className="text-[#E50914] font-medium mt-1">Thierry Mbala Nkanga</p>
                  <div className="mt-4 space-y-2 text-gray-300 text-sm">
                    <p><span className="font-semibold">Genre :</span> Bien-être / Vie chrétienne</p>
                    <p><span className="font-semibold">Format :</span> Numérique & Papier</p>
                    <p><span className="font-semibold">Prix :</span> 10$</p>
                  </div>
                  <div className="mt-6 flex flex-col gap-3">
                    <a href="https://amazon.fr/dp/XXXXXX2" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#E50914] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#b00710] transition-all shadow-lg"><ShoppingCart size={20} /> Acheter sur Amazon</a>
                    <a href="https://wa.me/243813507216?text=Bonjour%2C%20je%20souhaite%20acheter%20le%20livre%20Dieu%2C%20le%20chrétien%20et%20l'argent" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-all shadow-lg"><MessageCircle size={20} /> Commander sur WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-2 space-y-6 text-gray-200">
              <div>
                <h2 className="font-serif text-2xl text-white mb-4">Le livre</h2>
                <p className="leading-relaxed">
                  Dans cet ouvrage, le Pasteur Thierry Mbala Nkanga aborde un sujet crucial pour tout chrétien : la relation avec l'argent. À travers une approche biblique et pratique, il démystifie les idées reçues et propose une vision équilibrée de la gestion financière selon Dieu. L'auteur montre que l'argent n'est pas mauvais en soi, mais que l'amour de l'argent est une racine de tous les maux. Il guide le lecteur vers une liberté financière qui honore Dieu et sert les autres.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-3 flex items-center gap-2"><User size={20} className="text-[#E50914]" /> À propos de l'auteur</h3>
                <p className="leading-relaxed">
                  Pasteur missionnaire engagé depuis 2003 en RDC, Thierry Mbala Nkanga est reconnu pour son ministère qui allie foi et action sociale. Conférencier et écrivain prolifique, ses livres sont des outils pratiques pour la vie chrétienne.
                </p>
                <Link href="/auteur/thierry-mbala-nkanga" className="inline-block mt-2 text-[#E50914] hover:underline">Voir la page de l'auteur →</Link>
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-3">Formats disponibles</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li><span className="font-semibold">Numérique (PDF, EPUB) :</span> 10$</li>
                  <li><span className="font-semibold">Papier (broché) :</span> 10$</li>
                </ul>
              </div>
              <div className="border-l-4 border-[#E50914] pl-4 italic text-gray-300 my-6">
                &quot;L'argent est un bon serviteur mais un mauvais maître.&quot;
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
