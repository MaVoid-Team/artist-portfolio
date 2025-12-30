"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ArtworkModal from "@/components/artwork-modal"
import { artworks } from "@/lib/data"
import Image from "next/image"

export default function GalleryPage() {
  const [selectedArtwork, setSelectedArtwork] = useState(null)

  return (
    <main className="container py-12 md:py-24">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Gallery
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {artworks.map((artwork, index) => (
          <ArtworkCard key={index} artwork={artwork} index={index} onClick={() => setSelectedArtwork(artwork)} />
        ))}
      </div>

      {selectedArtwork && <ArtworkModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />}
    </main>
  )
}

function ArtworkCard({ artwork, index, onClick }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="aspect-square overflow-hidden">
          <Image
            src={artwork.imageUrl || "/placeholder.svg"}
            alt={artwork.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-3 sm:p-4 text-white">
            <h3 className="text-lg sm:text-xl font-semibold">{artwork.title}</h3>
            <p className="text-xs sm:text-sm opacity-80">{artwork.medium}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
