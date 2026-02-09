'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Web Experiences',
    description: 'Modern web applications built with Next.js, React, and thoughtful animation. Custom design systems that scale with your brand.',
    icon: '🌐',
  },
  {
    title: 'Realtime & 3D',
    description: 'Interactive prototypes using Three.js and R3F. Lightweight 3D experiences that run smoothly across devices.',
    icon: '✨',
  },
  {
    title: 'Build & Optimize',
    description: 'Performance audits, accessibility improvements, and SEO strategy. Code that's fast, maintainable, and future-proof.',
    icon: '⚡',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="service" 
      ref={ref}
      className="py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      aria-labelledby="services-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Visual placeholder */}
              <div className="aspect-square mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-accent/10 to-transparent flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
