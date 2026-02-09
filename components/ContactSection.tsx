'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Frontend only - no actual submission
    console.log('Form submitted:', formState)
    alert('This is a demo form. No actual submission occurs.')
  }

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-32 px-6 lg:px-12 bg-gradient-to-b from-bg to-accent/5"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-12">
            Let's work together
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact info & Recruit card */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
                <div className="space-y-3 text-muted">
                  <p>
                    <a href="mailto:hello@ermers.studio" className="hover:text-accent transition-colors">
                      hello@ermers.studio
                    </a>
                  </p>
                  <p>
                    <a href="https://twitter.com/ermers" className="hover:text-accent transition-colors">
                      Twitter / X
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/ermers" className="hover:text-accent transition-colors">
                      GitHub
                    </a>
                  </p>
                </div>
              </div>

              <div className="p-6 bg-accent/10 rounded-lg border border-accent/20">
                <h3 className="text-xl font-semibold mb-3">Recruit / Collaborate</h3>
                <p className="text-muted mb-4">
                  Always interested in working with talented designers and developers on exciting projects.
                </p>
                <a
                  href="mailto:careers@ermers.studio"
                  className="inline-block px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
                >
                  careers@ermers.studio
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
