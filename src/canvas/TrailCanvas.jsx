import { useRef, useEffect } from 'react'
import { motion, useSpring, useTransform, useMotionValueEvent } from 'framer-motion'
import { useScrollContext } from '../context/ScrollContext'

// Trail S-curve switchback path through the full viewport
const TRAIL_PATH = `
  M 720 920
  C 580 820, 400 780, 480 640
  C 560 500, 820 460, 740 320
  C 660 180, 460 140, 580 40
  C 650 -20, 760 20, 720 -20
`

// Trail color stops: green → amber (epiphany) → green → alpine blue
const TRAIL_COLOR_STOPS = [
  [0,    '#2D5016'],
  [0.30, '#C4862A'],
  [0.44, '#2D5016'],
  [1.0,  '#4A7FA8'],
]

function interpolateTrailColor(progress) {
  const stops = TRAIL_COLOR_STOPS
  if (progress <= stops[0][0]) return stops[0][1]
  if (progress >= stops[stops.length - 1][0]) return stops[stops.length - 1][1]
  for (let i = 0; i < stops.length - 1; i++) {
    const [p0, c0] = stops[i]
    const [p1, c1] = stops[i + 1]
    if (progress >= p0 && progress <= p1) {
      const t = (progress - p0) / (p1 - p0)
      // Simple hex lerp for the trail color
      const hex = (h) => {
        const r = parseInt(h.slice(1, 3), 16)
        const g = parseInt(h.slice(3, 5), 16)
        const b = parseInt(h.slice(5, 7), 16)
        return [r, g, b]
      }
      const [r0, g0, b0] = hex(c0)
      const [r1, g1, b1] = hex(c1)
      const lerp = (a, b) => Math.round(a + (b - a) * t).toString(16).padStart(2, '0')
      return `#${lerp(r0, r1)}${lerp(g0, g1)}${lerp(b0, b1)}`
    }
  }
  return stops[stops.length - 1][1]
}

export default function TrailCanvas() {
  const { smoothProgress } = useScrollContext()
  const pathRef = useRef(null)
  const dotRef = useRef(null)
  const livePathRef = useRef(null)

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1])

  // Update hiker dot position and trail color on scroll
  useMotionValueEvent(smoothProgress, 'change', (v) => {
    if (!pathRef.current || !dotRef.current || !livePathRef.current) return

    // Update trail color
    const color = interpolateTrailColor(v)
    livePathRef.current.style.stroke = color

    // Move hiker dot along path
    try {
      const totalLength = pathRef.current.getTotalLength()
      const point = pathRef.current.getPointAtLength(totalLength * v)
      dotRef.current.setAttribute('cx', point.x)
      dotRef.current.setAttribute('cy', point.y)
    } catch (e) {
      // SVG not ready yet
    }
  })

  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 5,
        pointerEvents: 'none',
        willChange: 'transform',
        overflow: 'visible',
      }}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Ghost trail — always visible, dashed */}
      <path
        d={TRAIL_PATH}
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 10"
      />

      {/* Reference path for getPointAtLength (invisible) */}
      <path
        ref={pathRef}
        d={TRAIL_PATH}
        stroke="none"
        fill="none"
      />

      {/* Live drawn trail */}
      <motion.path
        ref={livePathRef}
        d={TRAIL_PATH}
        stroke="#2D5016"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        style={{ pathLength }}
      />

      {/* Hiker amber dot */}
      <circle
        ref={dotRef}
        cx="720"
        cy="920"
        r="5"
        fill="#C4862A"
        style={{ filter: 'drop-shadow(0 0 4px rgba(196,134,42,0.80))' }}
      />
    </svg>
  )
}
