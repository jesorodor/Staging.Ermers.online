'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Top', href: '#top' },
  { label: 'News', href: '#news' },
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Vision', href: '#vision' },
  { label: 'Service', href: '#service' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : ''
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#top" 
            className="text-xl font-bold tracking-tight hover:text-accent transition-colors"
            aria-label="ERMERS home"
          >
            ERMERS
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-sm tracking-wide transition-colors relative ${
                    activeSection === item.href.slice(1)
                      ? 'text-accent'
                      : 'text-muted hover:text-fg'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu indicator */}
          <div className="md:hidden text-sm text-muted">
            Menu
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
