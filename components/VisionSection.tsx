'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function VisionSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section 
      id="vision" 
      ref={ref}
      className="relative py-40 px-6 lg:px-12 overflow-hidden"
      aria-labelledby="vision-heading"
    >
      {/* Gradient tunnel effect */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-accent/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-tl from-accent/30 via-transparent to-accent/10 rounded-full blur-2xl animate-pulse" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          style={{ opacity }}
          className="space-y-8"
        >
          <h2 id="vision-heading" className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Build digital worlds
            <br />
            that people actually feel.
          </h2>

          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto">
            The best experiences aren't just functional—they're memorable. They spark curiosity, invite exploration, and leave a lasting impression.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
