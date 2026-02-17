// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Background from '@/components/Background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Holistique Book',
  description: 'Éditeur spirituel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Background imageUrl="/images/bg-netflix.jpg">{children}</Background>
      </body>
    </html>
  )
}