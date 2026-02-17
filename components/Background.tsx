'use client'

import { ReactNode } from 'react'

interface BackgroundProps {
  children: ReactNode
  imageUrl?: string
}

export default function Background({ children, imageUrl = '/images/001.jpg' }: BackgroundProps) {
  return (
    <div className="relative min-h-screen">
      {/* Image de fond floutée */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 backdrop-blur-md bg-black/40" /> {/* Overlay sombre + flou */}
      </div>
      <div className="relative z-0">{children}</div>
    </div>
  )
}