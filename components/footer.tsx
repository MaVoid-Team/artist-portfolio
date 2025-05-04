import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">
              ARTIST<span className="text-primary">PORTFOLIO</span>
            </h3>
            <p className="text-muted-foreground">
              Showcasing artistic vision and creative expression through a diverse collection of works.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Navigation</h4>

            <nav className="grid gap-2">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Social</h4>
            <nav className="grid gap-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Behance
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Contact</h4>
            <div className="grid gap-2 text-muted-foreground">
              <p>artist@example.com</p>
              <p>123 Art Street, Creative District</p>
              <p>Monday-Friday, 10am-6pm</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Artist Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
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
