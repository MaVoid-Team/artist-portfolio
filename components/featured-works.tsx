"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { featuredArtworks } from "@/lib/data"
import Image from "next/image"

export default function FeaturedWorks() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Works</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of signature pieces that showcase the artist's unique style and creative vision.
          </p>
        </motion.div>

        <div className="grid gap-12 md:gap-24">
          {featuredArtworks.map((artwork, index) => (
            <FeaturedArtworkItem key={index} artwork={artwork} index={index} progress={scrollYProgress} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline">
            <Link href="/gallery">
              View All Works
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function FeaturedArtworkItem({ artwork, index, progress }) {
  const isEven = index % 2 === 0
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [isEven ? -100 : 100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1])

  return (
    <motion.div ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-8 items-center" style={{ opacity }}>
      <motion.div
        className="overflow-hidden rounded-lg"
        style={{ x: isEven ? x : undefined }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={artwork.imageUrl || "/placeholder.svg"}
          alt={artwork.title}
          className="w-full h-auto aspect-[4/3] object-cover"
        />
      </motion.div>

      <motion.div
        className={`space-y-4 ${isEven ? "md:pl-6" : "md:pr-6 md:order-first"}`}
        style={{ x: !isEven ? x : undefined }}
      >
        <h3 className="text-xl sm:text-2xl font-bold">{artwork.title}</h3>
        <p className="text-muted-foreground text-sm sm:text-base">{artwork.description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm rounded-full bg-primary/10 text-primary">
            {artwork.medium}
          </span>
          <span className="inline-block px-3 py-1 text-xs sm:text-sm rounded-full bg-primary/10 text-primary">
            {artwork.year}
          </span>
        </div>
        <Button asChild variant="link" className="p-0">
          <Link href={`/gallery`} className="group flex items-center">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}
