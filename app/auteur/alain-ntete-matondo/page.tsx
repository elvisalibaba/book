'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AlainNteteMatondoPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-black overflow-hidden">
        {/* Arrière-plan flou avec l'image du livre */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/03.jpg')", // Image du livre "Proche de ta destinée"
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
                    src="/images/auteurs/alain.png"
                    alt="Alain NTETE MATONDO"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h1 className="font-serif text-3xl text-white">Alain NTETE MATONDO</h1>
                  <p className="text-[#E50914] font-medium mt-1">Pasteur, visionnaire, consultant en développement</p>
                  <div className="mt-4 space-y-2 text-gray-300 text-sm">
                    <p>📍 RDC</p>
                    <p>🎓 Graduat en théologie · Licence en Management de projet</p>
                    <p>📖 Auteur de "Proche de ta destinée"</p>
                    <p>👨‍👩‍👧 Marié à Marthe Basekawike Sailiki</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite : biographie détaillée */}
            <div className="md:col-span-2 space-y-6 text-gray-200">
              <div>
                <h2 className="font-serif text-2xl text-white mb-4">Le livre : "Proche de ta destinée"</h2>
                <p className="leading-relaxed">
                  <span className="text-[#E50914] font-semibold">Proche de ta destinée</span> est un ouvrage destiné au grand public et au Corps du Christ en particulier.
                  Il nous permet de comprendre le plan de Dieu dans nos vies. Beaucoup de gens vivent dans le désordre, l'envie,
                  la convoitise, dans le meurtre, la fornication parce qu'ils n'ont pas d'estime personnelle et ignorent leur destinée.
                  Ils vivent dans ce monde pour être comme les autres, oubliant que Dieu les a créés différemment, avec des potentialités
                  exceptionnelles qu'ils devraient découvrir, afin de les mettre en œuvre pour devenir ce que Dieu a prévu pour eux.
                </p>
                <p className="mt-3 leading-relaxed">
                  Tu seras le produit fini et la marque déposée de Dieu si tu découvres ta destinée et que tu te mets à la matérialiser.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-3">Visionnaire et pasteur</h3>
                <p className="leading-relaxed">
                  Alain NTETE MATONDO est le Visionnaire et Pasteur responsable de la Mission Mondiale pour le Salut, 
                  <span className="text-[#E50914]"> "CORTEGE DE VICTOIRE"</span>. Il assume également la coordination d'une ONG dénommée 
                  <span className="text-[#E50914]"> « Synergie pour le développement durable » (SYDED)</span> en sigle.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-3">Expertise professionnelle</h3>
                <p className="leading-relaxed">
                  Il est consultant en projet de développement et en entrepreneuriat. Détenteur d'un diplôme de graduat en théologie
                  et d'une licence en Management de projet, il allie sa vision spirituelle à une solide compétence technique pour
                  impacter la société.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-white mb-3">Vie familiale</h3>
                <p className="leading-relaxed">
                  Marié à Madame Marthe Basekawike Sailiki, de cette union naît une famille unie, soutien indispensable dans son ministère.
                </p>
              </div>

              {/* Citation clé */}
              <div className="border-l-4 border-[#E50914] pl-4 italic text-gray-300 my-6">
                &quot;Tu seras le produit fini et la marque déposée de Dieu si tu découvres ta destinée et que tu te mets à la matérialiser.&quot;
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