import { useRef } from 'react'
import { motion, useMotionValueEvent } from 'framer-motion'
import { useScrollContext } from '../context/ScrollContext'

export default function CampfireScene() {
  const { smoothProgress } = useScrollContext()
  const wrapRef = useRef(null)
  const glowRef = useRef(null)

  useMotionValueEvent(smoothProgress, 'change', (v) => {
    if (!wrapRef.current || !glowRef.current) return

    // Two glow ranges (adjusted for 1000vh canvas):
    // Range 1 (forest section ~OriginBeat): 0.12–0.20 → faint glow
    // Range 2 (campsite/WorkBeat at 410vh = 410/1000 = 0.41): 0.39–0.57 → full fire
    let opacity = 0
    let glowOpacity = 0

    if (v >= 0.12 && v <= 0.20) {
      opacity = ((v - 0.12) / 0.08) * 0.15  // faint
      glowOpacity = opacity * 0.5
    } else if (v >= 0.39 && v <= 0.57) {
      // Peak at 0.42–0.52 (WorkBeat is at 410/1000 = 0.41)
      if (v < 0.42) {
        opacity = (v - 0.39) / 0.03
        glowOpacity = opacity * 0.8
      } else if (v <= 0.52) {
        opacity = 1
        glowOpacity = 0.8
      } else {
        opacity = 1 - (v - 0.52) / 0.05
        glowOpacity = opacity * 0.8
      }
    }

    wrapRef.current.style.opacity = Math.min(1, opacity)
    glowRef.current.style.opacity = Math.min(1, glowOpacity)
  })

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        bottom: '8vh',
        right: '10vw',
        zIndex: 4,
        pointerEvents: 'none',
        opacity: 0,
      }}
      ref={wrapRef}
    >
      {/* Ambient glow behind fire */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          inset: '-40px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,134,42,0.18) 0%, transparent 70%)',
          opacity: 0,
        }}
      />

      <svg viewBox="0 0 120 120" width="120" height="120">
        {/* Crossed logs */}
        <g transform="translate(60,60)">
          <rect x="-30" y="18" width="60" height="10" rx="5"
            fill="rgba(45,80,22,0.70)"
            transform="rotate(-20)" />
          <rect x="-30" y="18" width="60" height="10" rx="5"
            fill="rgba(45,80,22,0.70)"
            transform="rotate(20)" />
        </g>

        {/* Ember glow at base */}
        <ellipse cx="60" cy="88" rx="18" ry="7" fill="rgba(196,134,42,0.55)" />
        <ellipse cx="50" cy="90" rx="9"  ry="5" fill="rgba(196,134,42,0.40)" />
        <ellipse cx="72" cy="90" rx="9"  ry="5" fill="rgba(196,134,42,0.40)" />

        {/* Flames */}
        <motion.polygon
          points="60,30 50,75 70,75"
          fill="rgba(196,134,42,0.60)"
          style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
          animate={{ scaleY: [1, 1.18, 0.90, 1.05, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.polygon
          points="50,40 40,75 58,75"
          fill="rgba(196,134,42,0.45)"
          style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
          animate={{ scaleY: [1, 0.88, 1.14, 0.95, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.polygon
          points="70,40 62,75 80,75"
          fill="rgba(196,134,42,0.45)"
          style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
          animate={{ scaleY: [1, 1.12, 0.86, 1.08, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />

        {/* Sparks */}
        <motion.circle
          cx="57" cy="35" r="2.5"
          fill="rgba(196,134,42,0.70)"
          animate={{ cy: [35, 12, 35], opacity: [0, 0.9, 0] }}
          transition={{ duration: 2.0, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.circle
          cx="63" cy="38" r="2.0"
          fill="rgba(196,134,42,0.60)"
          animate={{ cy: [38, 15, 38], opacity: [0, 0.8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 0.7 }}
        />
        <motion.circle
          cx="55" cy="42" r="1.5"
          fill="rgba(196,134,42,0.50)"
          animate={{ cy: [42, 22, 42], opacity: [0, 0.7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: 1.2 }}
        />
      </svg>
    </div>
  )
}
