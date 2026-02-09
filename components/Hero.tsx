'use client'

import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

const Hero3D = lazy(() => import('./Hero3D'))

export default function Hero() {
  return (
    <section 
      id="top" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<HeroFallback />}>
          <Hero3D />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          Design. Code. Motion.
          <br />
          <span className="text-muted">The whole experience.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12"
        >
          Crafting modern web experiences with taste and speed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="#works"
            className="px-8 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors font-medium"
          >
            View Works
          </a>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-sm text-muted flex items-center gap-2 mt-8"
          >
            <span>Scroll to explore</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
              <path d="M6 1V11M6 11L1 6M6 11L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function HeroFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-accent/20 via-bg to-accent/10" />
  )
}
