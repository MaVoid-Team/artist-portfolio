"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ArtworkModal({ artwork, onClose }) {
  // Close modal when pressing escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 20 }}
          className="bg-card relative max-w-4xl w-[95%] max-h-[90vh] overflow-auto rounded-lg shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10 md:right-4 md:top-4"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-black flex items-center justify-center p-2 sm:p-4">
              <Image
                src={artwork.imageUrl || "/placeholder.svg"}
                alt={artwork.title}
                className="max-h-[50vh] md:max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-4 md:p-6 space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">{artwork.title}</h2>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  {artwork.medium}
                </span>
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  {artwork.year}
                </span>
                {artwork.dimensions && (
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {artwork.dimensions}
                  </span>
                )}
              </div>

              <div className="pt-3 md:pt-4 space-y-3 md:space-y-4">
                <p className="text-sm md:text-base text-muted-foreground">{artwork.description}</p>

                {artwork.story && (
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">About this piece</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{artwork.story}</p>
                  </div>
                )}

                {artwork.price && (
                  <div className="pt-3 md:pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-xs md:text-sm text-muted-foreground">Price</span>
                        <p className="text-lg md:text-xl font-bold">{artwork.price}</p>
                      </div>
                      <Button size="sm" className="text-xs md:text-sm">
                        Inquire
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
