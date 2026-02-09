'use client'

import Hero from '@/components/Hero'
import NewsSection from '@/components/NewsSection'
import WorksSection from '@/components/WorksSection'
import AboutSection from '@/components/AboutSection'
import VisionSection from '@/components/VisionSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <NewsSection />
      <WorksSection />
      <AboutSection />
      <VisionSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  )
}
