import { motion } from 'framer-motion'

/**
 * ForestTreeline — full-width pine treeline at the bottom of the Hero section.
 * 14 swaying trees spread across the viewport, with a trailhead sign post at center.
 * position: absolute; bottom: 0 inside Hero section (which has overflow: hidden).
 */

const trees = [
  { x: 40,   h: 100, opacity: 0.28, delay: 0,    duration: 4.2 },
  { x: 110,  h: 150, opacity: 0.38, delay: 0.1,  duration: 3.8 },
  { x: 190,  h: 120, opacity: 0.30, delay: 0.2,  duration: 4.5 },
  { x: 270,  h: 170, opacity: 0.42, delay: 0.05, duration: 3.5 },
  { x: 360,  h: 130, opacity: 0.32, delay: 0.15, duration: 4.8 },
  { x: 460,  h: 160, opacity: 0.35, delay: 0.08, duration: 3.9 },
  { x: 560,  h: 110, opacity: 0.25, delay: 0.18, duration: 4.3 },
  { x: 660,  h: 180, opacity: 0.45, delay: 0.03, duration: 3.6 },
  { x: 780,  h: 140, opacity: 0.33, delay: 0.12, duration: 4.7 },
  { x: 900,  h: 155, opacity: 0.40, delay: 0.07, duration: 4.0 },
  { x: 1020, h: 125, opacity: 0.29, delay: 0.16, duration: 3.7 },
  { x: 1140, h: 165, opacity: 0.43, delay: 0.04, duration: 4.4 },
  { x: 1280, h: 135, opacity: 0.36, delay: 0.11, duration: 3.4 },
  { x: 1390, h: 105, opacity: 0.27, delay: 0.09, duration: 4.6 },
]

function PineTree({ x, h, opacity, delay, duration }) {
  const baseY = 260
  const trunkH = h * 0.15
  const trunkW = Math.max(2, h * 0.025)

  return (
    <motion.g
      animate={{ rotate: [-0.6, 0.6, -0.6] }}
      transition={{ duration, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay }}
      style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
    >
      {/* Trunk */}
      <rect
        x={x - trunkW / 2}
        y={baseY - trunkH}
        width={trunkW}
        height={trunkH}
        fill={`rgba(45, 80, 22, ${opacity * 0.8})`}
      />
      {/* Canopy tier 3 (bottom, widest) */}
      <polygon
        points={`${x},${baseY - h * 0.45} ${x - h * 0.44},${baseY - h * 0.06} ${x + h * 0.44},${baseY - h * 0.06}`}
        fill={`rgba(45, 80, 22, ${opacity})`}
      />
      {/* Canopy tier 2 (middle) */}
      <polygon
        points={`${x},${baseY - h * 0.72} ${x - h * 0.38},${baseY - h * 0.22} ${x + h * 0.38},${baseY - h * 0.22}`}
        fill={`rgba(45, 80, 22, ${opacity})`}
      />
      {/* Canopy tier 1 (top, narrowest) */}
      <polygon
        points={`${x},${baseY - h} ${x - h * 0.30},${baseY - h * 0.32} ${x + h * 0.30},${baseY - h * 0.32}`}
        fill={`rgba(45, 80, 22, ${opacity})`}
      />
    </motion.g>
  )
}

export default function ForestTreeline() {
  return (
    <motion.div
      className="forest-treeline"
      aria-hidden="true"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '260px',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <svg
        viewBox="0 0 1440 260"
        preserveAspectRatio="xMidYMax meet"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Trees */}
        {trees.map((tree, i) => (
          <PineTree key={i} {...tree} />
        ))}

        {/* Winding ground path through tree bases */}
        <path
          d="M 0 255 Q 200 248 400 252 Q 600 256 800 250 Q 1000 246 1200 253 Q 1300 256 1440 252"
          stroke="rgba(45, 80, 22, 0.18)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 4"
        />

        {/* Trailhead sign post at center (x=720) */}
        {/* Post */}
        <line x1="720" y1="210" x2="720" y2="260" stroke="rgba(45, 80, 22, 0.40)" strokeWidth="2" strokeLinecap="round" />
        {/* Sign board */}
        <rect x="695" y="186" width="50" height="24" rx="3" fill="rgba(247, 244, 239, 0.85)" stroke="rgba(45, 80, 22, 0.40)" strokeWidth="1.5" />
        {/* Trail blaze triangle on sign */}
        <polygon points="720,190 714,208 726,208" stroke="rgba(45, 80, 22, 0.40)" fill="none" strokeWidth="1.2" />
        {/* TRAILHEAD text */}
        <text
          x="720"
          y="202"
          textAnchor="middle"
          style={{ fontSize: '5px', fontFamily: 'DM Sans, system-ui, sans-serif', fill: 'rgba(45, 80, 22, 0.55)', letterSpacing: '0.06em', fontWeight: 600 }}
        >
          TRAILHEAD
        </text>
      </svg>
    </motion.div>
  )
}
