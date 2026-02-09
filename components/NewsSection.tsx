'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const newsItems = [
  {
    date: '2026-01-12',
    title: 'ERMERS Studio site relaunch',
  },
  {
    date: '2025-11-03',
    title: 'New realtime 3D product demo released',
  },
  {
    date: '2025-08-19',
    title: 'Now taking 2 new client projects for Q4',
  },
]

export default function NewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="news" 
      ref={ref}
      className="py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      aria-labelledby="news-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="news-heading" className="text-4xl md:text-5xl font-bold mb-16">
          News
        </h2>

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.date}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-border pb-6 hover:border-accent transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <time 
                  dateTime={item.date}
                  className="text-sm text-muted font-mono md:w-32 flex-shrink-0"
                >
                  {item.date}
                </time>
                <h3 className="text-xl md:text-2xl font-medium group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
