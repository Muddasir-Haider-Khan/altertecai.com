"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src="/logo1.png" alt="Altertec AI" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/services" className="text-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/process" className="text-foreground hover:text-foreground transition-colors">
              Process
            </Link>

  {/* hide for temp 
            <Link href="/why-ai-now" className="text-muted-foreground hover:text-foreground transition-colors">
              Why AI Now
            </Link>
            <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
              Case Studies
            </Link>

*/}

            <Link href="/partners" className="text-foreground hover:text-foreground transition-colors">
              Partners
            </Link>
            <Link href="/contact" className="text-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden sm:inline-flex bg-foreground/5">
              <Link href="/contact">Book Free AI Audit</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/process"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </Link>

                   {/* hide 
   
              <Link
                href="/why-ai-now"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why AI Now
              </Link>
              <Link
                href="/case-studies"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>

              */}
              <Link
                href="/partners"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Partners
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="w-full sm:hidden ">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Book Free AI Audit
                </Link>
              </Button>
{/* hide for temp 
              <div className="flex items-center justify-between pt-2">
                <span className="text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              */}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
