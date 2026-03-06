import { motion } from 'framer-motion'

/**
 * BoulderQuote — organic boulder-shaped SVG containing a pull quote.
 * Positioned absolutely within the beat component at the desired location.
 */
export default function BoulderQuote({ quote, maxWidth = 520 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      style={{
        position: 'relative',
        maxWidth,
        margin: '48px auto',
      }}
    >
      {/* Boulder background SVG */}
      <svg
        viewBox="0 0 520 180"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 90 C 8 50, 30 20, 72 14 C 112 8, 150 18, 200 10 C 250 2, 290 12, 340 8 C 390 4, 430 18, 470 20 C 510 22, 520 50, 520 90 C 520 130, 508 158, 470 165 C 430 172, 390 162, 340 168 C 290 174, 250 162, 200 168 C 150 174, 110 160, 72 162 C 34 164, 8 132, 0 90 Z"
          fill="rgba(100,90,80,0.18)"
          stroke="rgba(100,90,80,0.12)"
          strokeWidth="1"
        />
      </svg>

      {/* Quote text */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '36px 48px',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(20px, 2.2vw, 26px)',
          lineHeight: 1.45,
          color: 'var(--color-amber)',
          textAlign: 'center',
        }}
      >
        {quote}
      </div>
    </motion.div>
  )
}
