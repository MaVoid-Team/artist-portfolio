"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="container py-8 px-4 sm:px-6 md:py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid gap-12 md:gap-16"
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">About the Artist</h1>
            <div className="space-y-3 md:space-y-4 text-sm sm:text-base text-muted-foreground">
              <p>
                With over 15 years of artistic exploration, I've developed a distinctive style that blends traditional
                techniques with contemporary vision. My work explores the intersection of natural forms and human
                emotion, creating pieces that resonate on both visual and emotional levels.
              </p>
              <p>
                After studying at the Royal Academy of Arts, I established my studio in the heart of the Creative
                District, where I continue to push the boundaries of my practice and explore new mediums and techniques.
              </p>
              <p>
                My work has been exhibited in galleries across Europe and North America, and is held in several private
                collections. I'm particularly interested in the dialogue between artist and viewer, and how art can
                create spaces for reflection and connection.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative aspect-square rounded-lg overflow-hidden mt-6 md:mt-0"
          >
            <img
              src="/placeholder.svg?height=800&width=800"
              alt="Artist portrait"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-6 md:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">Artistic Philosophy</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold">Exploration</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                I believe in constant exploration and experimentation, pushing the boundaries of my practice to discover
                new forms of expression and communication.
              </p>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold">Connection</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Art creates a unique space for connection - between the artist and viewer, between individuals, and
                between humans and their environment.
              </p>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold">Authenticity</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                I strive for authenticity in my work, creating pieces that reflect genuine emotion and experience rather
                than following trends or expectations.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold">Education & Experience</h2>
          <div className="grid gap-6">
            <div className="grid md:grid-cols-[200px_1fr] gap-4">
              <div className="font-medium">2010 - 2014</div>
              <div>
                <h3 className="text-xl font-semibold">Royal Academy of Arts</h3>
                <p className="text-muted-foreground">Master of Fine Arts, Painting</p>
              </div>
            </div>
            <div className="grid md:grid-cols-[200px_1fr] gap-4">
              <div className="font-medium">2015 - 2018</div>
              <div>
                <h3 className="text-xl font-semibold">Artist in Residence</h3>
                <p className="text-muted-foreground">Contemporary Arts Center</p>
              </div>
            </div>
            <div className="grid md:grid-cols-[200px_1fr] gap-4">
              <div className="font-medium">2018 - Present</div>
              <div>
                <h3 className="text-xl font-semibold">Independent Studio Practice</h3>
                <p className="text-muted-foreground">Creative District Studio</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold">Selected Exhibitions</h2>
          <div className="grid gap-6">
            <div className="grid md:grid-cols-[200px_1fr] gap-4">
              <div className="font-medium">2023</div>
              <div>
                <h3 className="text-xl font-semibold">Chromatic Visions</h3>
                <p className="text-muted-foreground">Solo Exhibition, Modern Art Gallery</p>
              </div>
            </div>
            <div className="grid md:grid-cols-[200px_1fr] gap-4">
              <div className="font-medium">2022</div>
              <div>
                <h3 className="text-xl font-semibold">Emerging Voices</h3>
                <p className="text-muted-foreground">Group Exhibition, International Arts Festival</p>
              </div>
            </div>
            <div className="grid md:grid-cols-[200px_1fr] gap-4">
              <div className="font-medium">2021</div>
              <div>
                <h3 className="text-xl font-semibold">Reflections</h3>
                <p className="text-muted-foreground">Solo Exhibition, Contemporary Space</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center pt-8">
          <Button asChild size="lg">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </main>
  )
}
