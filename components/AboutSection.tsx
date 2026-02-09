'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      title: 'Clarity',
      description: 'Every pixel serves a purpose. Clean interfaces that communicate instantly.',
    },
    {
      title: 'Performance',
      description: 'Speed is a feature. Optimized code that feels instant on every device.',
    },
    {
      title: 'Craft',
      description: 'Attention to detail. Thoughtful motion and refined interactions throughout.',
    },
  ]

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-32 px-6 lg:px-12 bg-gradient-to-b from-bg via-accent/5 to-bg"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-12">
            About
          </h2>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl md:text-2xl text-muted leading-relaxed mb-6">
              ERMERS is a small studio where design and engineering converge. We build digital experiences that people actually want to use—fast, beautiful, and purposeful.
            </p>
            <p className="text-xl md:text-2xl text-muted leading-relaxed">
              From initial concept through final deployment, we handle the full spectrum: strategy, visual design, motion, development, and optimization. No handoffs, no compromises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="border-l-2 border-accent pl-6"
              >
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
