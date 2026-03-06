import { motion } from 'framer-motion'
import WaypointMarker from './trail/WaypointMarker'
import TopoBackground from './trail/TopoBackground'
import ForestTreeline from './trail/ForestTreeline'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const fadePop = (delay) => ({
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: 'easeOut', delay },
})

export default function Hero() {
  const scrollToStory = (e) => {
    e.preventDefault()
    const el = document.getElementById('origin')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 48px 100px',
        background: 'var(--color-bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <TopoBackground variant="valley" />
      <WaypointMarker number="1" label="Trailhead" />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: '64px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <motion.span className="label" {...fadeUp(0)}>
            Sam Otto
          </motion.span>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: 'clamp(48px, 6vw, 72px)',
              lineHeight: 1.1,
              color: 'var(--color-text)',
            }}
          >
            <motion.span style={{ display: 'block' }} {...fadeUp(0.2)}>Finance student.</motion.span>
            <motion.span style={{ display: 'block' }} {...fadeUp(0.35)}>Community builder.</motion.span>
            <motion.span style={{ display: 'block' }} {...fadeUp(0.5)}>Genuinely can't stop</motion.span>
            <motion.span style={{ display: 'block' }} {...fadeUp(0.6)}>asking "why not?"</motion.span>
          </h1>

          <motion.p
            style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', color: 'var(--color-muted)', lineHeight: 1.6 }}
            {...fadeUp(0.75)}
          >
            Cal Poly San Luis Obispo&nbsp;&nbsp;·&nbsp;&nbsp;Finance&nbsp;&nbsp;·&nbsp;&nbsp;AI &amp; Automation
          </motion.p>

          <motion.a
            href="#origin"
            onClick={scrollToStory}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: '16px',
              color: 'var(--color-green)',
              textDecoration: 'none',
              width: 'fit-content',
            }}
            {...fadeUp(0.9)}
          >
            Read my story
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-block', fontSize: '18px' }}
            >
              ↓
            </motion.span>
          </motion.a>
        </div>

        {/* Right: Photo */}
        <motion.div
          style={{
            position: 'relative',
            borderRadius: '6px',
            overflow: 'hidden',
            aspectRatio: '3 / 4',
            background: 'var(--color-surface)',
            maxHeight: '560px',
          }}
          {...fadePop(0.3)}
        >
          {/* PHOTO PLACEHOLDER — Replace img src with: /images/hero.jpg */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'var(--color-surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: 'var(--color-muted)', fontSize: '13px', fontFamily: 'var(--font-sans)' }}>
              hero.jpg
            </span>
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(45, 80, 22, 0.06)', pointerEvents: 'none' }} />
        </motion.div>
      </div>

      {/* Forest treeline at bottom — creates immersive entry into the trail */}
      <ForestTreeline />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          section { padding: 100px 24px 60px !important; }
        }
      `}</style>
    </section>
  )
}
