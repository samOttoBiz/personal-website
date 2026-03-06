import { useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValueEvent } from 'framer-motion'
import { useScrollContext } from '../context/ScrollContext'

// vh-based scroll targets for beats inside the 1000vh canvas
const CANVAS_TARGETS = {
  story:  0,      // top of page / hero
  work:   410,    // WorkBeat top: 410vh
  people: 670,    // PeopleBeat top: 660vh + padding offset so header is visible
}

const NAV_LINKS = [
  { label: 'Story',   scrollTo: 'story' },
  { label: 'Work',    scrollTo: 'work' },
  { label: 'People',  scrollTo: 'people' },
  { label: 'Stories', href: '#stories' },
  { label: 'About',   href: '#about' },
  { label: 'Connect', href: '#contact' },
]

export default function Nav() {
  const { pageProgress } = useScrollContext()
  const [menuOpen, setMenuOpen] = useState(false)
  const progressBarRef = useRef(null)
  const navRef = useRef(null)

  useMotionValueEvent(pageProgress, 'change', (v) => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${v * 100}%`
    }
    if (navRef.current) {
      // Fade from transparent (at top) to cream once scrolled past ~3% of page
      const t = Math.min(1, v / 0.03)
      navRef.current.style.background = `rgba(247,244,239,${(0.78 * t).toFixed(3)})`
      navRef.current.style.borderBottomColor = `rgba(0,0,0,${(0.06 * t).toFixed(3)})`
    }
  })

  const handleNavClick = (e, link) => {
    e.preventDefault()
    setMenuOpen(false)

    if (link.scrollTo !== undefined) {
      // Canvas beat: scroll by vh position on window
      const vh = window.innerHeight
      const targetPx = (CANVAS_TARGETS[link.scrollTo] * vh) / 100
      window.scrollTo({ top: targetPx, behavior: 'smooth' })
    } else {
      // Post-canvas section: find by id
      const id = link.href.replace('#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          background: 'rgba(247,244,239,0)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0)',
          transition: 'background 0.25s ease, border-bottom-color 0.25s ease',
        }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: '20px',
            color: 'var(--color-text)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
        >
          S.O.
        </a>

        <div className="desktop-nav" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href ?? '#'}
              onClick={(e) => handleNavClick(e, link)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                letterSpacing: '0.04em',
                color: 'var(--color-text)',
                textDecoration: 'none',
                opacity: 0.82,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.color = 'var(--color-green)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.82'
                e.currentTarget.style.color = 'var(--color-text)'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          className="hamburger"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '20px',
                height: '1.5px',
                background: 'var(--color-text)',
                borderRadius: '1px',
                transition: 'transform 0.22s ease, opacity 0.22s ease',
                transform: menuOpen
                  ? i === 0
                    ? 'rotate(45deg) translate(4.5px, 4.5px)'
                    : i === 2
                      ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                      : 'none'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'rgba(196,134,42,0.12)',
          }}
        >
          <div
            ref={progressBarRef}
            style={{
              height: '100%',
              width: '0%',
              background: 'rgba(196,134,42,0.70)',
              transition: 'width 0.05s linear',
            }}
          />
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(26,22,37,0.56)',
                zIndex: 190,
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '250px',
                background: '#1A1625',
                zIndex: 210,
                display: 'flex',
                flexDirection: 'column',
                padding: '88px 30px 40px',
                gap: '24px',
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href ?? '#'}
                  onClick={(e) => handleNavClick(e, link)}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '24px',
                    fontWeight: 600,
                    color: 'rgba(247,244,239,0.92)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}