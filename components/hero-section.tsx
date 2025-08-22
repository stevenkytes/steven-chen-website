"use client"

import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center section-padding bg-gradient-to-br from-navy to-slate-900">
      <div className="max-content-width animate-fade-in">
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight text-left">
          I'm Steven Chen
        </h1>
        
        <p className="font-body text-lg md:text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed text-left">
          Entrepreneur, angel investor, prototyper, Asian American advocate, photographer, and violinist
        </p>
      </div>
    </section>
  )
}
