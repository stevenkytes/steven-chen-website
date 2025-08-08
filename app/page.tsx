import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ResumeSection } from '@/components/resume-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ContactSection />
    </main>
  )
}
