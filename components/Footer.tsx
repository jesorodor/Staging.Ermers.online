'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">ERMERS</div>
            <p className="text-sm text-muted">
              Design. Code. Motion.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-8 text-sm">
              <li>
                <a href="#news" className="text-muted hover:text-accent transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#works" className="text-muted hover:text-accent transition-colors">
                  Works
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#service" className="text-muted hover:text-accent transition-colors">
                  Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted">
          <p>&copy; {currentYear} ERMERS Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
