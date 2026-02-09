'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const works = [
  {
    date: '2026-01-05',
    teaser: 'Interactive product launch with motion-driven storytelling',
    title: 'Aurora Launch Experience',
    tags: ['web', 'motion', 'branding'],
  },
  {
    date: '2025-12-10',
    teaser: 'Realtime 3D configurator prototype',
    title: 'Mono Configurator',
    tags: ['3d', 'realtime', 'ui'],
  },
  {
    date: '2025-09-02',
    teaser: 'Conversion-focused landing system',
    title: 'Signal Pages',
    tags: ['performance', 'seo', 'design'],
  },
]

export default function WorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="works" 
      ref={ref}
      className="py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      aria-labelledby="works-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="works-heading" className="text-4xl md:text-5xl font-bold mb-16">
          Selected Works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              {/* Visual placeholder */}
              <div className="aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 via-accent/10 to-transparent relative">
                <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-accent/30 rounded-full group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              <time 
                dateTime={work.date}
                className="text-xs text-muted font-mono block mb-2"
              >
                {work.date}
              </time>

              <p className="text-sm text-muted mb-3 line-clamp-2">
                {work.teaser}
              </p>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {work.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-border text-muted font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
