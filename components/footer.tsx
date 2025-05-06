import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col md:flex-row items-center justify-between py-8 md:py-6">
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-2 mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              NexaBank
            </span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Secure and innovative banking for the digital age
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Company</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Careers
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Press
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Support</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Help Center
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container border-t py-6">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} NexaBank. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
