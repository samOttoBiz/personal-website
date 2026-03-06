import { useRef } from 'react'
import { motion, useTransform, useMotionValueEvent } from 'framer-motion'
import { useScrollContext } from '../context/ScrollContext'

// Background trees — 12 trees, parallax 0.22x
const BG_TREES = [
  { x: 60,   h: 280, opacity: 0.16, delay: 0,    dur: 4.2, w: [0.32, 0.40, 0.48] },
  { x: 180,  h: 340, opacity: 0.22, delay: 0.5,  dur: 3.8, w: [0.28, 0.36, 0.44] },
  { x: 310,  h: 300, opacity: 0.18, delay: 0.2,  dur: 4.6, w: [0.30, 0.38, 0.46] },
  { x: 460,  h: 380, opacity: 0.20, delay: 0.8,  dur: 3.4, w: [0.34, 0.42, 0.50] },
  { x: 600,  h: 260, opacity: 0.14, delay: 0.3,  dur: 5.0, w: [0.26, 0.34, 0.42] },
  { x: 740,  h: 360, opacity: 0.24, delay: 0.6,  dur: 4.0, w: [0.36, 0.44, 0.52] },
  { x: 880,  h: 320, opacity: 0.17, delay: 0.1,  dur: 4.4, w: [0.29, 0.37, 0.45] },
  { x: 1010, h: 350, opacity: 0.21, delay: 0.7,  dur: 3.6, w: [0.33, 0.41, 0.49] },
  { x: 1140, h: 290, opacity: 0.19, delay: 0.4,  dur: 4.8, w: [0.31, 0.39, 0.47] },
  { x: 1270, h: 370, opacity: 0.23, delay: 0.9,  dur: 3.2, w: [0.35, 0.43, 0.51] },
  { x: 1370, h: 250, opacity: 0.15, delay: 0.15, dur: 4.5, w: [0.27, 0.35, 0.43] },
  { x: 80,   h: 200, opacity: 0.12, delay: 1.0,  dur: 5.2, w: [0.24, 0.32, 0.40] },
]

// Foreground trees — 8 trees, parallax 0.42x (reduced opacity so text remains readable)
const FG_TREES = [
  { x: 30,   h: 360, opacity: 0.22, delay: 0,    dur: 3.2, w: [0.32, 0.40, 0.48] },
  { x: 160,  h: 300, opacity: 0.18, delay: 0.4,  dur: 4.0, w: [0.30, 0.38, 0.46] },
  { x: 330,  h: 340, opacity: 0.20, delay: 0.7,  dur: 3.6, w: [0.34, 0.42, 0.50] },
  { x: 540,  h: 280, opacity: 0.16, delay: 0.2,  dur: 4.4, w: [0.28, 0.36, 0.44] },
  { x: 900,  h: 320, opacity: 0.19, delay: 0.6,  dur: 3.8, w: [0.31, 0.39, 0.47] },
  { x: 1080, h: 360, opacity: 0.23, delay: 0.1,  dur: 3.4, w: [0.35, 0.43, 0.51] },
  { x: 1250, h: 300, opacity: 0.17, delay: 0.5,  dur: 4.2, w: [0.29, 0.37, 0.45] },
  { x: 1400, h: 340, opacity: 0.21, delay: 0.3,  dur: 3.9, w: [0.33, 0.41, 0.49] },
]

function Tree({ x, h, opacity, delay, dur, w, fill }) {
  const base = 900 // SVG viewport bottom
  const tier = (f) => base - h * f

  return (
    <motion.g
      animate={{ rotate: [-0.6, 0.6, -0.6] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }}
      style={{ transformBox: 'fill-box', transformOrigin: 'bottom center', opacity }}
    >
      {/* Trunk */}
      <rect
        x={x - 1.5}
        y={tier(0.15)}
        width={3}
        height={h * 0.15}
        fill={fill || 'rgba(45,80,22,0.80)'}
      />
      {/* Tier 3 — bottom widest */}
      <polygon
        points={`${x},${tier(1)} ${x - h * w[0]},${tier(0.32)} ${x + h * w[0]},${tier(0.32)}`}
        fill={fill || 'rgba(45,80,22,1)'}
      />
      {/* Tier 2 — mid */}
      <polygon
        points={`${x},${tier(0.72)} ${x - h * w[1]},${tier(0.22)} ${x + h * w[1]},${tier(0.22)}`}
        fill={fill || 'rgba(45,80,22,1)'}
      />
      {/* Tier 1 — top narrow */}
      <polygon
        points={`${x},${tier(0.45)} ${x - h * w[2]},${tier(0.06)} ${x + h * w[2]},${tier(0.06)}`}
        fill={fill || 'rgba(45,80,22,1)'}
      />
    </motion.g>
  )
}

export default function ForestLayer() {
  const { scrollPx, smoothProgress } = useScrollContext()
  const bgRef = useRef(null)
  const fgRef = useRef(null)
  const bgOpRef = useRef(null)
  const fgOpRef = useRef(null)

  const maxPx = typeof window !== 'undefined' ? window.innerHeight * 9 : 6480

  // Parallax Y offsets (1000vh canvas)
  const bgY = useTransform(scrollPx, [0, maxPx], [0, -maxPx * 0.22])
  const fgY = useTransform(scrollPx, [0, maxPx], [0, -maxPx * 0.42])

  useMotionValueEvent(bgY, 'change', (v) => {
    if (bgRef.current) bgRef.current.setAttribute('transform', `translate(0,${v})`)
  })
  useMotionValueEvent(fgY, 'change', (v) => {
    if (fgRef.current) fgRef.current.setAttribute('transform', `translate(0,${v})`)
  })

  // Fade out as we go above treeline (adjusted for 1000vh — Work beat at 410/1000 = 0.41)
  useMotionValueEvent(smoothProgress, 'change', (v) => {
    // BG trees fade: 0.40 → 0.50
    if (bgOpRef.current) {
      const bgOpacity = v < 0.40 ? 1 : v > 0.50 ? 0 : 1 - (v - 0.40) / 0.10
      bgOpRef.current.style.opacity = bgOpacity
    }
    // FG trees fade: 0.35 → 0.44
    if (fgOpRef.current) {
      const fgOpacity = v < 0.35 ? 1 : v > 0.44 ? 0 : 1 - (v - 0.35) / 0.09
      fgOpRef.current.style.opacity = fgOpacity
    }
  })

  return (
    <svg
      aria-hidden="true"
      className="forest-layer"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 3,
        pointerEvents: 'none',
        willChange: 'transform',
        overflow: 'visible',
      }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background trees group */}
      <g ref={bgOpRef} style={{ transition: 'opacity 0.3s ease' }}>
        <g ref={bgRef}>
          {BG_TREES.map((t, i) => (
            <Tree key={`bg-${i}`} {...t} fill="rgba(45,80,22,0.20)" />
          ))}
        </g>
      </g>

      {/* Foreground trees group */}
      <g ref={fgOpRef} style={{ transition: 'opacity 0.3s ease' }}>
        <g ref={fgRef}>
          {FG_TREES.map((t, i) => (
            <Tree key={`fg-${i}`} {...t} fill="rgba(45,80,22,0.28)" />
          ))}
        </g>
      </g>
    </svg>
  )
}
