"use client"

import { Mail, Linkedin, Instagram, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 section-padding bg-white dark:bg-slate-900">
      <div className="max-content-width">
        <div className="animate-slide-up text-center">
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="prose-custom text-sm mb-4 dark:text-slate-300">
              Based in New York City
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:hello@stevenchen.me"
                className="text-slate-400 hover:text-teal transition-colors duration-200 dark:text-slate-300 dark:hover:text-teal"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/stevenchentw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal transition-colors duration-200 dark:text-slate-300 dark:hover:text-teal"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/stevenchenphotography"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal transition-colors duration-200 dark:text-slate-300 dark:hover:text-teal"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
