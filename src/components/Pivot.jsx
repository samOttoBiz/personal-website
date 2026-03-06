import { motion } from 'framer-motion'
import WaypointMarker from './trail/WaypointMarker'
import SectionPath from './trail/SectionPath'

const sectionAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: 'easeOut' },
}

/* Inline ridge mountain silhouette at section bottom */
function RidgeMountains() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '120px',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="xMidYMax meet"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Far ridge */}
        <polygon
          points="0,120 160,55 320,80 480,28 640,70 800,18 960,60 1120,35 1280,65 1440,40 1440,120"
          fill="rgba(196, 134, 42, 0.06)"
        />
        {/* Near ridge */}
        <polygon
          points="0,120 120,85 280,100 440,72 600,95 760,65 920,88 1080,70 1240,90 1440,75 1440,120"
          fill="rgba(196, 134, 42, 0.10)"
        />
      </svg>
    </motion.div>
  )
}

export default function Pivot() {
  return (
    <section
      id="pivot"
      style={{
        padding: '120px 48px 160px',
        background: 'var(--color-bg-sky)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <WaypointMarker number="3" label="The Click" />

      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div {...sectionAnim}>
          <span className="label" style={{ marginBottom: '24px', display: 'block' }}>
            02 — The Pivot
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 'clamp(36px, 4vw, 52px)',
              lineHeight: 1.15,
              color: 'var(--color-text)',
              marginBottom: '48px',
            }}
          >
            I didn't find AI.<br />
            AI found me mid-spreadsheet.
          </h2>
        </motion.div>

        <motion.div
          {...sectionAnim}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.8, color: 'var(--color-text)' }}>
            First internship. They handed me an Excel file and some expectations. I had a basic grasp of spreadsheets — enough to manage a VLOOKUP, maybe a chart.
          </p>

          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.8, color: 'var(--color-text)' }}>
            Instead I started building macros. The most complicated tools in Excel. I paired curiosity with AI as an amplifier — not a shortcut — and realized I could do more, move faster, and solve harder problems than I had any right to at that point. That was the click.
          </p>

          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.8, color: 'var(--color-text)' }}>
            Finance wasn't separate from technology. It was waiting for it. And I was exactly the kind of person who could sit at that intersection — comfortable with ambiguity, comfortable with tools, and genuinely curious about what happens when you combine them.
          </p>

          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.8, color: 'var(--color-text)' }}>
            A mentor said something around this time that I still think about every day:
          </p>
        </motion.div>

        {/* Upgraded stone marker quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          style={{
            margin: '40px 0',
            background: 'var(--color-surface)',
            borderLeft: '4px solid var(--color-amber)',
            padding: '28px 32px',
            borderRadius: '4px',
            boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '28px',
            lineHeight: 1.45,
            color: 'var(--color-amber)',
          }}
        >
          "Speed and directional accuracy beats perfection every time."
        </motion.blockquote>

        <motion.div
          {...sectionAnim}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.8, color: 'var(--color-text)' }}>
            In school, 100% was the definition of success. In the real world, moving fast on enough things beats moving perfectly on one thing. I adopted this completely and still work through that lesson every day.
          </p>
        </motion.div>
      </div>

      {/* Amber ridge mountains — atmospheric bottom edge */}
      <RidgeMountains />

      {/* Trail path to next section */}
      <SectionPath variant="center" />

      <style>{`
        @media (max-width: 768px) {
          #pivot { padding: 80px 24px 120px !important; }
        }
      `}</style>
    </section>
  )
}
