"use client"

import { Camera, Music, Users, Briefcase, TrendingUp, Code } from 'lucide-react'

export function AboutSection() {
  const interests = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Entrepreneurship",
      description: "Building innovative solutions and leading teams to create meaningful impact in the tech industry."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Angel Investing",
      description: "Supporting early-stage startups and helping founders turn their visions into reality."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Prototyping",
      description: "Rapidly developing and testing new ideas to validate concepts and drive innovation."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Asian American Advocacy",
      description: "Actively involved in supporting and empowering Asian American communities and professionals."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography",
      description: "Capturing moments and stories through the lens, with a passion for travel and coffee culture."
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Violin & Music",
      description: "Expressing creativity through music, bringing discipline and artistry to every performance."
    }
  ]

  return (
    <section id="about" className="py-20 section-padding bg-white dark:bg-slate-900">
      <div className="max-content-width">
        <div className="animate-slide-up">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy dark:text-white mb-8 text-left">
            About Me
          </h2>
          
          <div className="prose-custom text-lg mb-12 max-w-3xl text-left dark:text-slate-300">
            <p className="mb-6">
              I'm a multifaceted professional who thrives at the intersection of technology, business, and community. 
              My journey spans entrepreneurship, angel investing, and advocacy work, all while maintaining a deep 
              appreciation for the arts and creative expression.
            </p>
            <p className="mb-6">
              When I'm not building the next big thing or mentoring founders, you'll find me exploring new places 
              with my camera, perfecting my coffee brewing technique, or practicing violin. I believe that diverse 
              experiences and perspectives fuel innovation and creativity.
            </p>
            <p>
              I'm passionate about creating opportunities for underrepresented communities in tech and using my 
              platform to drive meaningful change in the Asian American community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                <div className="text-teal mb-4">
                  {interest.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-navy dark:text-white mb-3">
                  {interest.title}
                </h3>
                <p className="prose-custom text-sm dark:text-slate-300">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
