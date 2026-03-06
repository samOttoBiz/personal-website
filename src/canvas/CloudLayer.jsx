import { useRef } from 'react'
import { motion, useMotionValueEvent } from 'framer-motion'
import { useScrollContext } from '../context/ScrollContext'

const CLOUDS = [
  { x: 120,  y: 80,  rx: 90,  ry: 32, opacity: 0.05, driftX: -15, dur: 28 },
  { x: 420,  y: 55,  rx: 120, ry: 28, opacity: 0.04, driftX: -22, dur: 38 },
  { x: 750,  y: 95,  rx: 80,  ry: 25, opacity: 0.05, driftX: -18, dur: 32 },
  { x: 1100, y: 70,  rx: 110, ry: 30, opacity: 0.04, driftX: -25, dur: 42 },
  { x: 1350, y: 40,  rx: 95,  ry: 27, opacity: 0.03, driftX: -20, dur: 35 },
  { x: 280,  y: 130, rx: 70,  ry: 20, opacity: 0.03, driftX: -12, dur: 45 },
  { x: 900,  y: 115, rx: 85,  ry: 22, opacity: 0.03, driftX: -16, dur: 30 },
]

function Cloud({ x, y, rx, ry, opacity, driftX, dur }) {
  return (
    <motion.ellipse
      cx={x}
      cy={y}
      rx={rx}
      ry={ry}
      fill="rgba(255,255,255,0.85)"
      opacity={opacity}
      animate={{ x: [0, driftX, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'linear' }}
    />
  )
}

export default function CloudLayer() {
  const { smoothProgress } = useScrollContext()
  const wrapRef = useRef(null)

  useMotionValueEvent(smoothProgress, 'change', (v) => {
    if (!wrapRef.current) return
    // Clouds disappear above 55% scroll (above treeline, into alpine)
    const opacity = v < 0.48 ? 1 : v > 0.55 ? 0 : 1 - (v - 0.48) / 0.07
    wrapRef.current.style.opacity = opacity
  })

  return (
    <svg
      aria-hidden="true"
      className="cloud-layer"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 2,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid meet"
    >
      <g ref={wrapRef} style={{ transition: 'opacity 0.5s ease' }}>
        {CLOUDS.map((c, i) => (
          <Cloud key={i} {...c} />
        ))}
      </g>
    </svg>
  )
}
