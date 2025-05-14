import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container py-6 sm:py-8 md:py-12">
        <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-4">
          <div className="space-y-3 col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg sm:text-xl">
              ARTIST<span className="text-primary">PORTFOLIO</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Showcasing artistic vision and creative expression through a diverse collection of works.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3">Navigation</h4>

            <nav className="grid gap-1.5">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3">Social</h4>
            <nav className="grid gap-1.5">
              <Link href="https://www.instagram.com/_esraafarahat/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </Link>
              <Link href="https://www.facebook.com/share/16BzzAaLk1/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Facebook
              </Link>
              {/* <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Behance
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </Link> */}
            </nav>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3">Contact</h4>
            <div className="grid gap-1.5 text-sm text-muted-foreground">
              <p>israa.frahat2015@gmail.com</p>
              <p>123 Art Street, Creative District</p>
              <p>Monday-Friday, 10am-6pm</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} 
          </p>
          <div className="flex gap-4 text-xs sm:text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
