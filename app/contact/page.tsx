"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formData)
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className="container max-w-4xl py-8 px-4 sm:px-6 md:py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in commissioning a piece or have questions about my work? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mt-8 md:mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:artist@example.com" className="text-primary hover:underline">
                  israa.frahat2015@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Studio:</span>
                <span>123 Art Street, Creative District</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Hours:</span>
                <span>Always Available</span>
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Follow</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/_esraafarahat/" className="hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="https://www.facebook.com/share/16BzzAaLk1/" className="hover:text-primary transition-colors">
                  Facebook
                </a>
                {/* <a href="#" className="hover:text-primary transition-colors">
                  Behance
                </a> */}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full mt-2">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </motion.div>
    </main>
  )
}
