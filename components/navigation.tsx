"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-md border-b border-slate-700">
      <div className="section-padding max-content-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-heading font-bold text-xl text-teal">
            SC
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-300 hover:text-teal transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-teal transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('resume')}
              className="text-slate-300 hover:text-teal transition-colors duration-200"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-teal transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-slate-300 hover:text-teal transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-300 hover:text-teal transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="text-left text-slate-300 hover:text-teal transition-colors duration-200"
              >
                Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-slate-300 hover:text-teal transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
