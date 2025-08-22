"use client"

import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ResumeSection() {
  const experience = [
    {
      title: "Angel Investor",
      company: "Independent",
      period: "2020 - Present",
      description: "Investing in early-stage startups across fintech, healthtech, and consumer technology sectors."
    },
    {
      title: "Founder & CEO",
      company: "TechVenture Inc.",
      period: "2018 - 2022",
      description: "Built and scaled a B2B SaaS platform serving 500+ enterprise clients with $10M+ ARR."
    },
    {
      title: "Senior Product Manager",
      company: "Innovation Labs",
      period: "2015 - 2018",
      description: "Led product development for consumer mobile applications with 1M+ active users."
    },
    {
      title: "Software Engineer",
      company: "Tech Solutions",
      period: "2013 - 2015",
      description: "Developed scalable web applications and APIs using modern JavaScript frameworks."
    }
  ]

  const education = [
    {
      degree: "MBA",
      school: "MIT Sloan School of Management"
    },
    {
      degree: "AB Economics",
      school: "Princeton University"
    }
  ]

  return (
    <section id="resume" className="py-20 section-padding bg-slate-50 dark:bg-slate-800">
      <div className="max-content-width">
        <div className="animate-slide-up">
          <div className="text-left mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy dark:text-white mb-6 text-left">
              Resume
            </h2>
            <p className="prose-custom text-lg mb-8 max-w-2xl text-left dark:text-slate-300">
              A comprehensive overview of my professional journey, combining technical expertise 
              with business acumen and community leadership.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="font-heading font-semibold text-2xl text-navy dark:text-white mb-8">
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-teal/30 dark:border-teal/50">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-teal rounded-full dark:bg-teal"></div>
                    <div className="mb-2">
                      <h4 className="font-heading font-semibold text-lg text-navy dark:text-white">
                        {job.title}
                      </h4>
                      <p className="text-teal font-medium dark:text-teal">{job.company}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{job.period}</p>
                    </div>
                    <p className="prose-custom text-sm dark:text-slate-400">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Skills */}
            <div>
              <h3 className="font-heading font-semibold text-2xl text-navy dark:text-white mb-8">
                Education
              </h3>
              <div className="space-y-6 mb-12">
                {education.map((edu, index) => (
                  <div key={index} className="p-6 bg-white dark:bg-slate-700 rounded-lg">
                    <h4 className="font-heading font-semibold text-lg text-navy dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-teal font-medium mb-1 dark:text-teal">{edu.school}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-heading font-semibold text-2xl text-navy dark:text-white mb-6">
                Key Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Strategic Planning",
                  "Product Management",
                  "Angel Investing",
                  "Team Leadership",
                  "Full-Stack Development",
                  "Community Building",
                  "Public Speaking",
                  "Photography"
                ].map((skill, index) => (
                  <div key={index} className="px-4 py-2 bg-teal/10 text-teal rounded-lg text-center font-medium dark:bg-teal/20 dark:text-teal-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
