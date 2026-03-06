import { motion } from 'framer-motion'
import { useIsInScrollRange, useScrollRangeOpacity } from '../hooks/useIsInScrollRange'

export default function HeroBeat() {
  const visible = useIsInScrollRange(0.00, 0.15)
  const sectionOpacity = useScrollRangeOpacity(0.00, 0.15)
  if (!visible) return null

  return (
    <section
      id="hero"
      style={{
        position: 'absolute',
        top: '0vh',
        left: 0,
        right: 0,
        zIndex: 10,
        padding: '100px 0 80px',
        pointerEvents: 'none',
        opacity: sectionOpacity,
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Summit photo — full-bleed hero background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <img
          src="/images/summit.jpg"
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'brightness(0.38) saturate(0.85)',
            display: 'block',
          }}
        />
        {/* Gradient: darkest at bottom so text stays readable */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(8,6,4,0.30) 0%, rgba(8,6,4,0.55) 100%)',
          }}
        />
      </motion.div>

      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 48px', pointerEvents: 'auto', position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(196,134,42,0.90)',
            marginBottom: '20px',
          }}
        >
          Sam Otto
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.80, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: 'clamp(38px, 5.5vw, 72px)',
            lineHeight: 1.1,
            color: 'rgba(247,244,239,0.97)',
            maxWidth: '14ch',
            marginBottom: '28px',
          }}
        >
          From "bottom of the top" to writing my own legend.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.70, ease: [0.22, 1, 0.36, 1], delay: 0.30 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(16px, 2vw, 19px)',
            lineHeight: 1.75,
            color: 'rgba(247,244,239,0.88)',
            maxWidth: '40ch',
            marginBottom: '10px',
          }}
        >
          I put my whole heart into whatever I'm building.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.60, ease: [0.22, 1, 0.36, 1], delay: 0.40 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            lineHeight: 1.7,
            color: 'rgba(247,244,239,0.60)',
          }}
        >
          A journey shaped by setbacks, relationships, and relentless optimism.
        </motion.p>
      </div>

      {/* Scroll prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeIn', delay: 1.0 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(247,244,239,0.45)',
          }}
        >
          Scroll to begin my journey
        </span>
        {/* Animated chevron */}
        <motion.svg
          width="16" height="10" viewBox="0 0 16 10" fill="none"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M1 1L8 8L15 1" stroke="rgba(247,244,239,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>
    </section>
  )
}
