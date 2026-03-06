import { motion } from 'framer-motion'
import { useIsInScrollRange, useScrollRangeOpacity } from '../hooks/useIsInScrollRange'
import BoulderQuote from '../markers/BoulderQuote'

const PARAS_BEFORE = [
  "First internship. They handed me an Excel file and some expectations. I had a basic grasp of spreadsheets — enough to manage a VLOOKUP, maybe a chart.",
  "Instead I started building macros. The most complicated tools in Excel. I paired curiosity with AI as an amplifier — not a shortcut — and realized I could do more, move faster, and solve harder problems than I had any right to at that point. That was the click.",
  "Finance wasn't separate from technology. It was waiting for it. And I was exactly the kind of person who could sit at that intersection — comfortable with ambiguity, comfortable with tools, and genuinely curious about what happens when you combine them.",
  "A mentor said something around this time that I still think about every day:",
]

const PARA_AFTER = "In school, 100% was the definition of success. In the real world, moving fast on enough things beats moving perfectly on one thing. I adopted this completely and still work through that lesson every day."

export default function PivotBeat() {
  const visible = useIsInScrollRange(0.24, 0.48)
  const sectionOpacity = useScrollRangeOpacity(0.24, 0.48)
  if (!visible) return null

  return (
    <section
      id="pivot"
      style={{
        position: 'absolute',
        top: '260vh',
        left: 0,
        right: 0,
        zIndex: 10,
        padding: '100px 0 80px',
        pointerEvents: 'none',
        opacity: sectionOpacity,
        transition: 'opacity 0.4s ease',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 48px', pointerEvents: 'auto' }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: 'rgba(196,134,42,0.80)',
            marginBottom: '20px',
          }}
        >
          02 — The Pivot
        </motion.div>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.15,
            color: 'var(--color-text)',
            marginBottom: '40px',
          }}
        >
          I didn't find AI.<br />
          AI found me mid-spreadsheet.
        </motion.h2>

        {/* Paragraphs before quote */}
        {PARAS_BEFORE.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '17px',
              lineHeight: 1.82,
              color: 'var(--color-text)',
              marginBottom: '22px',
            }}
          >
            {text}
          </motion.p>
        ))}

        {/* Boulder quote */}
        <BoulderQuote quote='"Speed and directional accuracy beats perfection every time."' />

        {/* Paragraph after */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '17px',
            lineHeight: 1.82,
            color: 'var(--color-text)',
            marginBottom: '22px',
          }}
        >
          {PARA_AFTER}
        </motion.p>
      </div>

      {/* Amber ridge mountains at section bottom */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <svg viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax meet" style={{ width: '100%', height: '100%', display: 'block' }}>
          <polygon
            points="0,120 160,55 320,80 480,28 640,70 800,18 960,60 1120,35 1280,65 1440,40 1440,120"
            fill="rgba(196,134,42,0.06)"
          />
          <polygon
            points="0,120 120,85 280,100 440,72 600,95 760,65 920,88 1080,70 1240,90 1440,75 1440,120"
            fill="rgba(196,134,42,0.10)"
          />
        </svg>
      </div>

      {/* Section path */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 1440 80" style={{ width: '100%', height: '100%', display: 'block' }}>
          <path
            d="M -20 55 C 300 20, 600 65, 720 40 C 840 15, 1100 60, 1460 45"
            stroke="rgba(45,80,22,0.12)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="8 5"
          />
        </svg>
      </div>
    </section>
  )
}
